import { combineReducers } from '@reduxjs/toolkit';
import {createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import AuthReducer from '../reducers/AuthReducer';
import userReducer from '../reducers/userReducer';
import productReducer from '../reducers/productReducer';
import {editReducer} from '../reducers/edit';
import filterReducer from '../reducers/filterReducer';
import cartReducer from '../reducers/cartReducer';
import { orderReducer } from '../reducers/orderReducer';


const middleware = [thunk];

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

const rootReducer = combineReducers({
    AuthReducer,
    userReducer,
    productReducer,
    editReducer,
    filterReducer,
    cart: cartReducer,
    orderReducer,
})

// const store = configureStore({
//     reducer: {
//         rootReducer,
//     },
//     preloadedState: initialState,
//     middleware: [thunk],
// })

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
        applyMiddleware(...middleware)
    )
)    


export default store
