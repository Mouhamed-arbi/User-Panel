import React, { useContext, useEffect, useState } from 'react'
import ProductBuy from './ProductBuy';
import "../styles/allProducts.css"
import data from "../data"
import "../styles/navbarComponent.css"
import {GiftContext} from "./Context"

function WalletBalance() {
  const [products,setProducts]=useState(data)
  const [isGift,setIsGift]=useContext(GiftContext)


  
  return (
    <>
    <div className='nav'>
      <h2>Your Wallet Balance</h2>
      <p>Balance:  {isGift.balance} DT</p>
    </div>
    <div className='all-products'>
        {isGift.myPannel && isGift.myPannel.map((product,i)=>{
        return (<ProductBuy key={i} product={product}/>)
        })}
    </div>
    
    
    </>

  );
}

export default WalletBalance;
