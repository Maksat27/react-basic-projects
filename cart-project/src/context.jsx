import React, { createContext, useContext, useEffect, useReducer } from "react";
import {
  CLEAR_CART,
  REMOVE_ITEM,
  DECREASE_AMOUNT,
  INCREASE_AMOUNT,
  DISPLAY_ITEMS,
  LOADING,
} from "./actions";
import reducer from "./reducer";
import cartItems from "./data";
import { getTotals } from "./utils";

// api
const url = "https://www.course-api.com/react-useReducer-cart-project";

const AppContext = createContext();

const initialState = {
  isLoading: false,
  cart: new Map(),
};
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { totalAmount, totalCost } = getTotals(state.cart);

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: { id } });
  };

  const increaseAmount = (id) => {
    dispatch({ type: INCREASE_AMOUNT, payload: { id } });
  };

  const decreaseAmount = (id) => {
    dispatch({ type: DECREASE_AMOUNT, payload: { id } });
  };

  const fetchData = async () => {
    dispatch({ type: LOADING });
    const resp = await fetch(url);
    const cart = await resp.json();
    dispatch({ type: DISPLAY_ITEMS, payload: { cart } });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
        increaseAmount,
        decreaseAmount,
        totalAmount,
        totalCost,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
