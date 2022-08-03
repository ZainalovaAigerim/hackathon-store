import React from "react";
import { productsApi } from "../helpers/const";

export const AdminContext = React.createContext();

const reducer = (state, action) => {
  if (action.type === "GET_PRODUCTS") {
    return {
      ...state,
      products: action.payload,
    };
  }

  return state;
};

function AdminProvider({ children }) {
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

  const data = {};

  return <AdminContext.Provider value={data}>{children}</AdminContext.Provider>;
}

export default AdminProvider;
