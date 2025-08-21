import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.id === item.id);
      if (existing) {
        return prev.map((c) =>
          c.id === item.id ? { ...c, quantity: c.quantity + item.quantity } : c
        );
      }
      return [...prev, item];
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
};
