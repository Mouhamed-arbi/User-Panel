import React, { useContext } from 'react';
import '../styles/oneProduct.css';
import { GiftContext } from './Context';

const OneProduct = (props) => {
  const [isGift, setIsGift] = useContext(GiftContext);
  const addToMyPannel = (obj) => {
    if (isGift.balance >= obj.price) {
      const updatedWalletBalance = isGift.balance - obj.price;
      const updatedProduct = { ...obj, qty: 1 };
      setIsGift({
        ...isGift,
        myPannel: [...isGift.myPannel, updatedProduct],
        balance: updatedWalletBalance,
      });
    } else {
      alert('Insufficient balance');
    }
  };

  return (
    <div className="card">
      <div className="card-img">
        <img
          src={props?.product?.image}
          alt={props?.product?.label}
          style={{ alignItems: 'center' }}
        />
      </div>
      <div className="card-info">
        <p className="text-title" style={{ textAlign: 'center' }}>
          {props?.product?.title}
        </p>
        <p className="text-body">{props?.product?.description}</p>
      </div>
      <div className="card-footer">
        <span className="text-title">{props?.product?.price} dt</span>
        <span>quantity: {props?.product?.qty}</span>
      </div>
      <p className="btn" onClick={() => addToMyPannel(props?.product)}>
        add to panel
      </p>
    </div>
  );
};

export default OneProduct;
