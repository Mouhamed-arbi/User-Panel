import React, { useContext } from 'react';
import '../styles/oneProduct.css';
import { GiftContext } from './Context';

const OneProduct = (props) => {
  const [isGift, setIsGift] = useContext(GiftContext);
 
  return (
    <div className="card">
      
        <div  className="product-card">
          <div className="card-img">
            <img src={props.product.image} alt={props.product.label} style={{ alignItems: 'center' }} />
          </div>
          <div className="card-info">
            <p className="text-title" style={{ textAlign: 'center' }}>
              {props.product.title}
            </p>
            <p className="text-body">{props.product.description}</p>
          </div>
        </div>
     
    </div>
  );
};

export default OneProduct;
