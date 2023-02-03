import { produce } from 'immer'

import { Coffee } from '../../model/coffee'

import { ActionTypes, CartActions } from './actions'

export interface Product extends Coffee {
  amount: number
}

export interface CartState {
  total: number
  products: {
    [key: string]: Product
  }
}

export const emptyCartState: CartState = {
  total: 0,
  products: {},
}

export function cartReducer(state: CartState, action: CartActions) {
  switch (action.type) {
    case ActionTypes.ADD_PRODUCT:
      return produce(state, (draft) => {
        const id = action.payload.product.id as string
        if (draft.products[id]) {
          draft.products[id].amount++
        } else {
          draft.products[id] = { ...action.payload.product, amount: 1 }
        }
        draft.total++
      })

    case ActionTypes.REMOVE_PRODUCT:
      return produce(state, (draft) => {
        const id = action.payload.productId
        if (draft.products[id]) {
          if (draft.products[id].amount > 1) {
            draft.products[id].amount--
          } else {
            delete draft.products[id]
          }
          draft.total--
        }
      })

    case ActionTypes.DELETE_PRODUCT:
      return produce(state, (draft) => {
        const id = action.payload.productId
        const productAmount = draft.products[id]?.amount || 0
        delete draft.products[id]
        draft.total = draft.total - productAmount
      })

    case ActionTypes.RESET_CART:
      return emptyCartState

    default:
      return state
  }
}
