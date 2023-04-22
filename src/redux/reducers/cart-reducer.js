import { addToCart, removeFromCart } from "../actions/cart"

let cart = []
let count = 1

export const cartReducer = (state = cart , action , quantity = count ) => {
    if (action.type === 'ADD_TO_CART') {
         return cart = [...state , {...action.payload , quantity} ] 
    }
    else if (action.type === 'INCREASE_COUNT') {
        console.log(cart);
        const index = action.payload
        cart[index].quantity += 1
        return [...cart]
    }
    else if (action.type === 'DECREASE_COUNT') {
        console.log(cart);
        const index = action.payload
        cart[index].quantity -= 1
        return [...cart]
    }
     else {
        return state
    }
}