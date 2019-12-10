import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useLocalStorage } from './hooks/useLocalStorage.js';
import data from './data';

import { ProductContext } from '../src/contexts/ProductContext.js';
import { CartContext } from '../src/contexts/CartContext.js';

// // Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	// const [cart, setCart] = useState([]);
	// const [count, setCount] = useLocalStorage("count", []);
	const [cart, setCart] = useLocalStorage("count", []);

	// useEffect(() => {
	// }, [count])

	const addItem = item => {
		// add the given item to the cart
		// setCount([...cart, item])
		setCart([...cart, item])
	};

	const deleteItem = (id) => {
		console.log("id", id);
		const itemDeleted = cart.filter(item => item.id !== id);
		setCart([...itemDeleted])
	}

	return (
		<div className="App">
 		  <ProductContext.Provider value={ {products, addItem} }>
		   <CartContext.Provider value={ { cart, deleteItem } }>
			 <Navigation component={Navigation} />
			 <Route exact path="/" component={Products} />
			 <Route path="/cart" component={ShoppingCart} />
		  </CartContext.Provider>
		 </ProductContext.Provider>
		</div>
	);
}

export default App;


