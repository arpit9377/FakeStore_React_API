import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Style.css';

function Products() {
  const [prod, setProd] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProd(json));
  }, []);

  const navigate = useNavigate();
  

  return (
    <>
      <h1>All Products</h1>
      <div className="container">
        {prod.map((item, id) => (                                            
          <Link to={`/product/${item.id}`} key={id} onClick={() => navigate(`/product/${item.id}`)}>
            <p>
              <div className="item-title">{item.title}</div>
              <img src={item.image} alt={item.title} className="item-img" />
              <div className="item-price">Cost :Rs {item.price}</div>
            </p>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Products;