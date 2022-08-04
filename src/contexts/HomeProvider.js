import React from "react";
import { act } from "react-dom/test-utils";
import { productsApi } from "../helpers/const";

export const HomeContext = React.createContext();

const reducer = (state, action) => {
  if (action.type === "GET_PRODUCTS") {
    return {
      ...state,
      products: action.payload,
    };
  }
  if (action.type === "GET_PRODUCTS_FROM_BASKET") {
    return {
      ...state,
      basketProducts: action.payload,
    };
  }
  if (action.type === "GET_BASKET_COUNT") {
    return {
      ...state,
      basketCount: action.payload,
    };
  }
  return state;
};

function HomeProvider({ children }) {
  const [state, dispatch] = React.useReducer(reducer, {
    products: [],
    basketProducts: {
      products: [],
      totalPrice: 0,
    },
    basketCount: 0,
  });

  const [searchWord, setSearchWord] = React.useState("");
  const [filterByPrice, setFilterByPrice] = React.useState([0, 999999]);
  const [minmax, setMinMax] = React.useState([0, 99999]);

  const limit = 3;
  const [pagesCount, setPagesCount] = React.useState(1);
  const [currentPage, setCurrentPage] = React.useState(1);

  const getProducts = () => {
    fetch(
      `${productsApi}?q=${searchWord}&price_gte=${filterByPrice[0]}&price_lte=${filterByPrice[1]}&_limit=${limit}&_page=${currentPage}`
    )
      .then((res) => {
        let count = Math.ceil(res.headers.get("X-total-Count") / limit);
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
  // ! Basket
  const addProductToBasket = (newProduct) => {
    let basket = JSON.parse(localStorage.getItem("basket"));
    if (!basket) {
      basket = {
        totalPrice: 0,
        products: [],
      };
    }
    let productToBasket = {
      ...newProduct,
      count: 1,
      subPrice: newProduct.price,
    };

    let check = basket.products.find((item) => {
      return item.id === productToBasket.id;
    });
    if (check) {
      basket.products = basket.products.map((item) => {
        if (item.id === productToBasket.id) {
          item.count++;
          item.subPrice = item.count * item.price;
          return item;
        }
        return item;
      });
    } else {
      basket.products.push(productToBasket);
    }
    basket.totalPrice = basket.products.reduce((prev, item) => {
      return prev + item.subPrice;
    }, 0);
    localStorage.setItem("basket", JSON.stringify(basket));
    let action = {
      type: "GET_PRODUCTS_FROM_BASKET",
      payload: basket,
    };
    dispatch(action);
    getBasketCount();
  };

  // ! price
  const getPrices = () => {
    fetch(productsApi)
      .then((res) => res.json())
      .then((data) => {
        data.sort((a, b) => a.price - b.price);
        let max = +data[data.length - 1].price;
        let min = +data[0].price;
        setFilterByPrice([min, max]);
        setMinMax([min, max]);
      });
  };

  // ! otobrajenie v navbare

  const getBasketCount = () => {
    let basket = JSON.parse(localStorage.getItem("basket"));
    if (!basket) {
      basket = {
        products: [],
      };
    }
    let action = {
      type: "GET_BASKET_COUNT",
      payload: basket.products.length,
    };
    dispatch(action);
  };

  const getProductsFromBasket = () => {
    let basket = JSON.parse(localStorage.getItem("basket"));
    if (basket) {
      let action = {
        type: "GET_PRODUCTS_FROM_BASKET",
        payload: basket,
      };
      dispatch(action);
    } else {
      let basket2 = {
        products: [],
        totalCount: 0,
      };
      let action = {
        type: "GET_PRODUCTS_FROM_BASKET",
        payload: basket2,
      };
      dispatch(action);
    }
  };

  React.useEffect(() => {
    getPrices();
    getBasketCount();
  }, []);

  const data = {
    filterByPrice,
    searchWord,
    pagesCount,
    currentPage,
    products: state.products,
    basketProducts: state.basketProducts,
    minmax,
    basketCount: state.basketCount,
    getProductsFromBasket,
    getProducts,
    setSearchWord,
    setFilterByPrice,
    setCurrentPage,
    addProductToBasket,
    setMinMax,
    getBasketCount,
  };
  return <HomeContext.Provider value={data}>{children}</HomeContext.Provider>;
}

export default HomeProvider;
