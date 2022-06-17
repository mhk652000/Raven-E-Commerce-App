import React, { useState, useEffect } from 'react';

//import Products from './components/Products/Products';

import {Navbar, Cart} from './components';

import { commerce } from './lib/commerce';   //APIS with CRUD is stored in commerce instance

const App = () => {
    const [ setProducts] = useState([]);
    const [cart, setCart] = useState({});

    const fetchProducts = async () =>
    {
        const { data } = await commerce.products.list();
        setProducts(data);
    }

    const fetchCart = async () => {
        setCart( await commerce.cart.retrieve())
    }

    

    useEffect(                                         //calls fetch Products function at runtime
        ()=> {
            fetchProducts();
            fetchCart();
        }, 
    );


    return (
        <div>
            <Navbar totalItems={cart.total_items}/>
            {/*<Products products={products} onAddToCart={handleAddToCart} /> */}
            <Cart cart={cart} />
        </div>
    )
}


export default App