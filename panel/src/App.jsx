import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import NavbarComponent from './components/NavbarComponent'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllProducts from "./components/AllProducts";
import {ContextProvider} from "./components/Context";

function App() {
  const [myPannel,setMyPannel]=useState([]);

  return (
<ContextProvider>
  
      <BrowserRouter>
      <Routes>
        <Route path='/products' element={<AllProducts myPannel={myPannel} setMyPannel={setMyPannel}/>}/>
        {/* <Route path="/pannel" element={}/> */}
      </Routes>
    </BrowserRouter>
</ContextProvider>
    
  )
}

export default App
