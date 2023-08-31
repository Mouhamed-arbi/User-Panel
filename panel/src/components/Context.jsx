// eslint-disable-next-line no-unused-vars
import React, { useState, createContext } from "react";

const GiftContext = createContext();

const ContextProvider = ({ children }) => {
  const [isGift, setIsGift] = useState({isGift:"",myPannel:[]});

  return (
    <GiftContext.Provider value={[isGift, setIsGift]}>
      {children}
    </GiftContext.Provider>
  );
};
export{
  ContextProvider,
  GiftContext
};