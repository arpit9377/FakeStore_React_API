import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProductStyle.css'
// import { useLocation } from 'react-router-dom';

const ProductDetails = () => {
  // const location = useLocation();
  const { productId } = useParams();
  //const productId = location.pathname.split('/')[2]; // breaks the url into:- ['', 'products', '1'] then assign
     //value on 2 index to productId which is the id number

  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`) // fetch the details this particular id 
      .then(res => res.json())
      .then(json => setProduct(json));
  }, [])
  return (
    <div className='prodd'>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title}  className='prodd-img'/>
      <p>Description: {product.description} </p>
      <p>Category: {product.category}</p>
      
    </div>
  );
};

export default ProductDetails;