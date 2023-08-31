import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import NavbarComponent from './components/NavbarComponent'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllProducts from "./components/AllProducts";
import {ContextProvider} from "./components/Context";
import WalletBalance from './components/Wallet'

function App() {
  const [myPannel,setMyPannel]=useState([]);

  return (
<ContextProvider>
  
      <BrowserRouter>
      <Routes>
        <Route path='/products' element={<AllProducts myPannel={myPannel} setMyPannel={setMyPannel}/>}/>
        <Route path="/pannel" element={ <WalletBalance myPannel={myPannel} setMyPannel={setMyPannel}/>}/>
      </Routes>
    </BrowserRouter>
</ContextProvider>
    
  )
}

export default App
