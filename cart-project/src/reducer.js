import {
  CLEAR_CART,
  REMOVE_ITEM,
  DECREASE_AMOUNT,
  INCREASE_AMOUNT,
  DISPLAY_ITEMS,
  LOADING,
} from "./actions";

const reducer = (state, action) => {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: new Map() };
  }

  if (action.type === REMOVE_ITEM) {
    const newCart = new Map(state.cart);
    newCart.delete(action.payload.id);
    return { ...state, cart: newCart };
  }

  if (action.type === INCREASE_AMOUNT) {
    const newCart = new Map(state.cart);
    const itemId = action.payload.id;
    const item = newCart.get(itemId);
    const newItem = { ...item, amount: item.amount++ };
    newCart.set(itemId, newItem);
    return { ...state, cart: newCart };
  }

  if (action.type === DECREASE_AMOUNT) {
    const newCart = new Map(state.cart);
    const itemId = action.payload.id;
    const item = newCart.get(itemId);

    if (item.amount === 0) {
      newCart.delete(itemId);
      return { ...state, cart: newCart };
    }
    const newItem = { ...item, amount: item.amount-- };
    newCart.set(itemId, newItem);
    return { ...state, cart: newCart };
  }

  if (action.type === LOADING) {
    return { ...state, isLoading: true };
  }

  if (action.type === DISPLAY_ITEMS) {
    const newCart = new Map(action.payload.cart.map((item) => [item.id, item]));
    return { ...state, isLoading: false, cart: newCart };
  }

  throw new Error(`no matching action type: ${action.type}`);
};

export default reducer;
