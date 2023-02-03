import { createContext, ReactNode, useReducer } from 'react'

import { Coffee } from '../model/coffee'
import {
  addProductAction,
  deleteProductAction,
  removeProductAction,
  resetCartAction,
} from '../reducers/cart/actions'
import {
  cartReducer,
  CartState,
  emptyCartState,
} from '../reducers/cart/reducer'

interface CartContextType {
  cart: CartState
  addProduct: (product: Coffee) => void
  removeProduct: (productId: string) => void
  deleteProduct: (productId: string) => void
  resetCart: () => void
}

const CartContext = createContext({} as CartContextType)

interface CartProviderProps {
  children?: ReactNode
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, dispatch] = useReducer(cartReducer, emptyCartState)

  function addProduct(product: Coffee) {
    dispatch(addProductAction(product))
  }

  function removeProduct(productId: string) {
    dispatch(removeProductAction(productId))
  }

  function deleteProduct(productId: string) {
    dispatch(deleteProductAction(productId))
  }

  function resetCart() {
    dispatch(resetCartAction())
  }

  return (
    <CartContext.Provider
      value={{ cart, addProduct, removeProduct, deleteProduct, resetCart }}
    >
      {children}
    </CartContext.Provider>
  )
}
