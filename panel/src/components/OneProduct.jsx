import React, { useContext , useState} from 'react';
import '../styles/oneProduct.css';
import { GiftContext } from './Context';



const OneProduct = (props) => {
  const [isGift, setIsGift] = useContext(GiftContext);

  const findProductInCart = (productId) => {
    if(isGift.myPannel.length>0){
      return isGift.myPannel.find(item => item.id === productId);
    }
  }
  
  const addToMyPannel = (obj) => {
    var productInCart = findProductInCart(obj.id);
    console.log(productInCart,"this is exist ")
    if (isGift.balance >= obj.price) {
      if ( props.product.qty>0) {
        props.product.qty = props.product.qty - 1;

      }
      else if (props.product.qty===0){alert('No product');}
      const updatedWalletBalance = isGift.balance - obj.price;
      const updatedPannel=isGift.myPannel.filter(e=>{
        return productInCart && productInCart.id !== e.id
      })
      if(productInCart){
        productInCart={...productInCart ,qty:productInCart.qty+1 }
        setIsGift({
          ...isGift,
          myPannel: [...updatedPannel, productInCart],
          balance: updatedWalletBalance,
        });
      }else{
        setIsGift({
          ...isGift,
          myPannel: [...isGift.myPannel, {...obj,qty:1}],
          balance: updatedWalletBalance,
        })
      }
      
      
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
      <button className="btn" onClick={() =>{
         addToMyPannel(props?.product)
         props.setCount(props.count+1)}}>
        add to panel
      </button>
    </div>
  );
};

export default OneProduct;
