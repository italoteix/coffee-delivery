/* eslint-disable no-unused-vars */
import { Coffee } from '../../model/coffee'

export enum ActionTypes {
  ADD_PRODUCT = 'ADD_PRODUCT',
  REMOVE_PRODUCT = 'REMOVE_PRODUCT',
  DELETE_PRODUCT = 'DELETE_PRODUCT',
  RESET_CART = 'RESET_CART',
}

export type CartActions =
  | ReturnType<typeof addProductAction>
  | ReturnType<typeof removeProductAction>
  | ReturnType<typeof deleteProductAction>
  | ReturnType<typeof resetCartAction>

export function addProductAction(product: Coffee) {
  return {
    type: ActionTypes.ADD_PRODUCT as const,
    payload: {
      product,
    },
  }
}

export function removeProductAction(productId: string) {
  return {
    type: ActionTypes.REMOVE_PRODUCT as const,
    payload: {
      productId,
    },
  }
}

export function deleteProductAction(productId: string) {
  return {
    type: ActionTypes.DELETE_PRODUCT as const,
    payload: {
      productId,
    },
  }
}

export function resetCartAction() {
  return {
    type: ActionTypes.RESET_CART as const,
  }
}
