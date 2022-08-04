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

  const limit = 6;
  const [pagesCount, setPagesCount] = React.useState(1);
  const [currentPage, setCurrentPage] = React.useState(1);

  const getProducts = () => {
    fetch(`${productsApi}?q_limit=${limit}&_page=${currentPage}`)
      .then((res) => {
        let count = Math.ceil(res.headers.get("X-Total-Count") / limit);
        setPagesCount(count);
        return res.json();
      })

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
    pagesCount,
    currentPage,
    getProducts,
    setCurrentPage,
  };
  return <HomeContext.Provider value={data}>{children}</HomeContext.Provider>;
}

export default HomeProvider;
