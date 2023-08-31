import React, { useContext, useEffect, useState } from 'react'
import ProductBuy from './ProductBuy';
import "../styles/allProducts.css"
import data from "../data"
import "../styles/navbarComponent.css"
import {GiftContext} from "./Context"

function WalletBalance() {
  const initialBalance = 100; 
  const [products,setProducts]=useState(data)
  const [isGift,setIsGift]=useContext(GiftContext)


  const [balance, setBalance] = useState(initialBalance);
  const wallet =(quantity,price)=>{
    if (quantity==0) {alert("There is no irceroduct")}
    else if (initialBalance>price && quantity>0){
      initialBalance= initialBalance-price
    }
   else  {alert("You don't Have Money")}
  }
  return (
    <>
    <div className='nav'>
      <h2>Your Wallet Balance</h2>
      <p>Balance: ${balance}</p>
    </div>
    <div className='all-products'>
        {isGift.myPannel && isGift.myPannel.map((product,i)=>{
        return (<ProductBuy key={i} product={isGift.myPannel}/>)
        })}
    </div>
    
    
    </>

  );
}

export default WalletBalance;
