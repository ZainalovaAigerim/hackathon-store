import React from "react";
import { productsApi } from "../helpers/const";

export const HomeContext = React.createContext();

const reducer = (state, action) => {
  if (action.type === "GET_PRODUCTS") {
    return {
      ...state,
      products: action.payload,
    };
  }
  return state;
};

function HomeProvider({ children }) {
  const [state, dispatch] = React.useReducer(reducer, {
    products: [],
  });

  const getProducts = () => {
    fetch(productsApi)
      .then((res) => res.json())
      .then((data) => {
        let action = {
          type: "GET_PRODUCTS",
          payload: data,
        };
        dispatch(action);
      });
  };

  const data = {
    products: state.products,
    getProducts,
  };
  return <HomeContext.Provider value={data}>{children}</HomeContext.Provider>;
}

export default HomeProvider;
