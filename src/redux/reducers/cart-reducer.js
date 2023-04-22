import { addToCart, removeFromCart } from "../actions/cart"

let cart = []
let count = 1

export const cartReducer = (state = cart , action , quantity = count ) => {
    if (action.type === 'ADD_TO_CART') {
         return cart = [...state , {...action.payload , quantity} ] 
    }
    else if (action.type === 'INCREASE_COUNT') {
        console.log(cart);
        return cart[action.payload].quantity += 1
    }
     else {
        return state
    }
}