//import {combineReducers} from 'redux';
import {createSlice } from '@reduxjs/toolkit'


// const rootReducer = combineReducers({
//     AuthReducer,
//     userReducer,
//     productReducer,
//     editReducer,
//     filterReducer,
//     cart: cartReducer,
//     orderReducer,
// })

// export default rootReducer;

const initialState = {
    cart: {
        cartItems: localStorage.getItem('cartItems')
        ? JSON.parse(localStorage.getItem('cartItems'))
        : [],
        shippingAddress: localStorage.getItem('shippingAddress')
        ? JSON.parse(localStorage.getItem('shippingAddress'))
        : {},
        // paymentMethod: localStorage.getItem('paymentMethod')
        // ? JSON.parse(localStorage.getItem('paymentMethod'))
        // : {},
    }
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        
    },
    
})

//export {AuthReducer, userReducer, productReducer, editReducer, filterReducer, cart, orderReducer } = storeSlice.actions 
export default cartSlice.reducer;