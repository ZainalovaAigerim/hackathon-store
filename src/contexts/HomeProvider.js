import React from "react";
import { productsApi } from "../helpers/const";

export const HomeContext = React.createContext();

const reducer = (state, action) => {};

function HomeProvider({ children }) {
  const data = {};
  return <HomeContext.Provider value={data}>{children}</HomeContext.Provider>;
}

export default HomeProvider;
