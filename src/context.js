import React, { useState } from "react";

export const ProductContext = React.createContext();

export const ProductProvider = props => {
  const [cart, setCart] = useState([]);
  return (
    <ProductContext.Provider value={[cart, setCart]}>
      {props.children}
    </ProductContext.Provider>
  );
};

//const ProductConsumer = ProductContext.Consumer;
