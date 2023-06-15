import {
    ORDER_CREATE_FAIL,
    ORDER_CREATE_REQUEST,
    ORDER_CREATE_SUCCESS,
    ORDER_DETAILS_FAIL,
    ORDER_DETAILS_REQUEST,
    ORDER_DETAILS_SUCCESS,
    ORDER_MINE_LIST_FAIL,
    ORDER_MINE_LIST_REQUEST,
    ORDER_MINE_LIST_SUCCESS,
    ORDERS_LIST_REQUEST,
    ORDERS_LIST_SUCCESS,
    ORDERS_LIST_FAIL,
    ORDER_DELETE_REQUEST,
    ORDER_DELETE_SUCCESS,
    ORDER_DELETE_FAIL,
    ORDER_UPDATE_REQUEST,
    ORDER_UPDATE_SUCCESS,
    ORDER_UPDATE_FAIL,
  } from '../constants/order';
  import { CART_EMPTY } from '../constants/cart';
import axios from 'axios';


//Get orders
//For Admin : get all orders
export const getOrders = () => async(dispatch) => {
    dispatch({type: ORDERS_LIST_REQUEST})
    try {
         
        let result = await axios.get('/api/order/orderlist', {
            headers: {
                'auth-token' : localStorage.getItem('token')
            }
        })
        dispatch({
            type: ORDERS_LIST_SUCCESS,
            payload: result.data.response
        })
    } catch (error) {
        console.dir(error)
        dispatch({
            type: ORDERS_LIST_FAIL,
            payload: error.response.data.msg
        })
    }
}

//Get order by orderId
export const getOrder = (id) => async(dispatch) => {
    dispatch({type: ORDER_DETAILS_REQUEST})
    try {
        let result = await axios.get(`/api/order/${id}`, {
            headers: {
                'auth-token': localStorage.getItem('token')
            }
        })
        dispatch({
            type: ORDER_DETAILS_SUCCESS,
            payload: result.data.response
        })
    } catch (error) {
        console.dir(error)
        dispatch({
            type: ORDER_DETAILS_FAIL, 
            payload: error.response.data.msg 
        })
    }
}

//Get orders by userid (myhistory)
export const getMyOrders = (user) => async(dispatch) => {
    dispatch({type: ORDER_MINE_LIST_REQUEST})
    try {
        let result = await axios.get(`/api/order/history`, {
            headers: {
                'auth-token' : localStorage.getItem('token')
            }
        })
        dispatch({
            type: ORDER_MINE_LIST_SUCCESS,
            payload: result.data.response
        })
    } catch (error) {
        console.log(error)
        dispatch({
            type: ORDER_MINE_LIST_FAIL,
            payload: error.response.data.msg
        })
    }
}

//create Order and empty the cart
export const createOrder = (order) => async (dispatch) => {
    dispatch({ type: ORDER_CREATE_REQUEST, payload: order });
    try {
      const { data } = await axios.post('/api/order', order, {
        headers: {
            'auth-token': localStorage.getItem('token')        
        },
      });
      dispatch({ 
          type: ORDER_CREATE_SUCCESS, 
          payload: data.response 
        });
      dispatch({ type: CART_EMPTY});
      localStorage.removeItem('cartItems');
      localStorage.removeItem('shippingAddress');
    } catch (error) {
        console.dir(error)
      dispatch({
        type: ORDER_CREATE_FAIL,
        payload: error.response.data.msg
      });
    }
  };
//Delete order
export const deleteOrder = (id) => async(dispatch) => {
    dispatch({type: ORDER_DELETE_REQUEST})
    try {
        //headers
        const config = {
            headers:{
                'auth-token': localStorage.getItem('token')
            }
        }
        const {data} = await axios.delete(`/api/order/${id}`, config)
         dispatch({
             type: ORDER_DELETE_SUCCESS,
             payload: data.response
            })
        dispatch(getOrders())
    } catch (error) {
        console.log(error)
        dispatch({
            type: ORDER_DELETE_FAIL,
            payload: error.response.data.msg
        })
    }
}

//Update order
export const updateOrder = (id) => async(dispatch) => {
        dispatch({type: ORDER_UPDATE_REQUEST})
    try {
       //headers
       const config = {
        headers:{
            'auth-token': localStorage.getItem('token')
        }
    }
        const result = await axios.put(`/api/order/${id}/pay`, {}, config)
        dispatch({
            type: ORDER_UPDATE_SUCCESS,
            payload: result.data.response
        })
        dispatch(getOrders())
    } catch (error) {
        console.dir(error)
        dispatch({
            type: ORDER_UPDATE_FAIL,
            payload: error.response.data.msg
        })
    }
}
