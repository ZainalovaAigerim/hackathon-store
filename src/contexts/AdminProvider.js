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
  if (action.type === "GET_EDIT_PRODUCT") {
    return {
      ...state,
      savedEditedProduct: action.payload,
    };
  }
  return state;
};

function AdminProvider({ children }) {
  const [state, dispatch] = React.useReducer(reducer, {
    products: [],
    savedEditedProduct: null,
  });

  const addNewProduct = (newProduct) => {
    fetch(productsApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    }).then(() => {
      getProducts();
    });
  };

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

  const deleteProduct = (id) => {
    fetch(`${productsApi}/${id}`, {
      method: "DELETE",
    }).then(() => getProducts());
  };

  const getEditProduct = (id) => {
    fetch(`${productsApi}/${id}`)
      .then((res) => res.json())
      .then((data) => {
        let action = {
          type: "GET_EDIT_PRODUCT",
          payload: data,
        };
        dispatch(action);
      });
  };

  const toSaveEditedProduct = (editedProduct) => {
    fetch(`${productsApi}/${editedProduct.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedProduct),
    });
  };

  const data = {
    products: state.products,
    savedEditedProduct: state.savedEditedProduct,
    getProducts,
    addNewProduct,
    deleteProduct,
    getEditProduct,
    toSaveEditedProduct,
  };

  return <AdminContext.Provider value={data}>{children}</AdminContext.Provider>;
}

export default AdminProvider;
