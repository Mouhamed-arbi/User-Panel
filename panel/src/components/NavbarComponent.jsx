// eslint-disable-next-line no-unused-vars
import React , { useContext} from 'react'
import "../styles/navbarComponent.css"
import {GiftContext} from "./Context"
import WalletBalance from './Wallet';
import { Link } from 'react-router-dom';


const NavbarComponent = () => {
  const [isGift,setIsGift]=useContext(GiftContext)
  console.log(isGift);
  return (
    <nav className='nav'>
      <h1 className='logo'>Logo</h1>
      <Link to="/pannel">Wallet</Link>
      <div className="dropdown" >
        <button className="dropbtn">Categories</button>
        <div className="dropdown-content">
          <p onClick={()=>setIsGift({...isGift,isGift:"gift"})}>Product Gift</p>
          <p onClick={()=>setIsGift({...isGift,isGift:"noGift"})}>Product without Gift</p>
        </div>
      </div>
    </nav>
  )
}

export default NavbarComponent
