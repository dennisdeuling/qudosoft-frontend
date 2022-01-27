import React, { useEffect, useState } from 'react';
import axios from 'axios';

import ProductCard from '../productcard/ProductCard';

import './style.css';

function ProductOverview() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		axios.get('/api/products').then(product => setProducts(product.data));
	}, []);

	const showProducts = products.map(product => <ProductCard key={product.sku} props={product} />);
	return <div className="flex-container">{showProducts}</div>;
}

export default ProductOverview;
