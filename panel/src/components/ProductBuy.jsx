import React, { useContext } from 'react';
import '../styles/oneProduct.css';
import { GiftContext } from './Context';

const OneProduct = (props) => {
  const [isGift, setIsGift] = useContext(GiftContext);

  return (
    <div className="card">
      {props.product.map((product, i) => (
        <div key={i} className="product-card">
          <div className="card-img">
            <img src={product.image} alt={product.label} style={{ alignItems: 'center' }} />
          </div>
          <div className="card-info">
            <p className="text-title" style={{ textAlign: 'center' }}>
              {product.title}
            </p>
            <p className="text-body">{product.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OneProduct;
