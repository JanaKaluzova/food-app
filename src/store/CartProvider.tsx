import React, { PropsWithChildren, useReducer } from "react";

import { CartContext, CartContextType, CartItem } from "./Cart-context";

type CartState = {
  items: CartItem[];
  totalAmount: number;
};

const defaultCartState: CartState = {
  items: [],
  totalAmount: 0,
};

type AddToCartAction = {
  type: "ADD_TO_CART";
  item: CartItem;
};

type RemoveFromCartAction = {
  type: "REMOVE_FROM_CART";
  id: string;
};

type CartAction = AddToCartAction | RemoveFromCartAction;

const cartReducer = (state: CartState, action: CartAction): CartState => {
  if (action.type === "ADD_TO_CART") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultCartState;
};

export const CartProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemToCartHandler = (item: CartItem) => {
    dispatchCartAction({ type: "ADD_TO_CART", item });
  };

  const removeItemFromCartHandler = (id: string) => {
    dispatchCartAction({ type: "REMOVE_FROM_CART", id: id });
  };

  const cartContextValue: CartContextType = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
};
