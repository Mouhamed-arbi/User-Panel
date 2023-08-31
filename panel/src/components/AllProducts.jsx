// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from 'react'
import OneProduct from './OneProduct';
import "../styles/allProducts.css"
import data from "../data"
import NavbarComponent from './NavbarComponent';
// import { useRoutes } from 'react-router-dom';
import { GiftContext } from './Context';
const AllProducts = () => {
    const [isGift,setIsGift]=useContext(GiftContext)
    const [products,setProducts]=useState(data)
    
useEffect(()=>{
    (()=>{
        if(isGift.isGift==="gift"){
            const giftedProduct=data.filter(e=>e.is_gift===true)
            setProducts(giftedProduct)
        }else if(isGift.isGift==="noGift"){
            const nonGiftedProduct=data.filter(e=>e.is_gift===false)
            setProducts(nonGiftedProduct)
        }else if(isGift.isGift===""){
            setProducts(data)
        }
    })();
},[isGift.isGift])
  return (
    <>
        <NavbarComponent/>
        <div className='all-products'>
            {products && products.map((product,i)=>{
            return (<OneProduct key={i} product={product}/>)
            })}
        </div>
        
    </>
  )
}

export default AllProducts
