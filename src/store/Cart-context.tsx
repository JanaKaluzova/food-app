import React from "react";
import { Meal } from "../components/Meals/MealItem/MealItem";

export type CartItem = {
  id: string;
  name: string;
  description?: string;
  price: number;
  amount: number;
};

export type CartContextType = {
  items: CartItem[];
  totalAmount: number;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
};

export const CartContext = React.createContext<CartContextType>({
  items: [],
  totalAmount: 0,
  addItem: (item: Meal) => {},
  removeItem: (id: string) => {},
});
