import {
    ORDER_CREATE_FAIL,
    ORDER_CREATE_REQUEST,
    ORDER_CREATE_RESET,
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

  const initialState = {
        orders: [],
        loading: false,
        order: {},
        error: null,
        success: null,
  }
  
  export const orderReducer = (state = initialState, {type, payload}) => {
    switch (type) {
      case ORDER_CREATE_REQUEST:
        case ORDER_DETAILS_REQUEST:
            case ORDER_MINE_LIST_REQUEST:
                case ORDERS_LIST_REQUEST:
                    case ORDER_DELETE_REQUEST:
                        case ORDER_UPDATE_REQUEST:
        return { 
            ...state,
            loading: true 
        }
      case ORDER_CREATE_SUCCESS:
        case ORDER_DETAILS_SUCCESS:
            case ORDER_DELETE_SUCCESS:
                case ORDER_UPDATE_SUCCESS:
        return { 
            ...state,
            loading: false, 
            success: true, 
            order: payload 
        }
      case ORDER_CREATE_FAIL:
        case ORDER_DETAILS_FAIL:
            case ORDER_MINE_LIST_FAIL:
                case ORDERS_LIST_FAIL:
                    case ORDER_DELETE_FAIL:
                        case ORDER_UPDATE_FAIL:
        return { 
            ...state,
            loading: false, 
            error: payload 
        }
      case ORDER_CREATE_RESET:
        return {
            ...state,
            loading: false,
            order: {},
        }
    case ORDER_MINE_LIST_SUCCESS:
        case ORDERS_LIST_SUCCESS:
        return { 
            ...state,
            loading: false, 
            orders: payload 
        }
    
      default:
        return state;
    }
}
  
//   export const orderUpdateReducer = (state = { order:{} }, {type, payload}) => {
//     switch (type) {
//       case ORDER_UPDATE_REQUEST:
//         return { 
//           loading: true 
//         }
//       case ORDER_UPDATE_SUCCESS:
//         return { 
//           loading: false, 
//           success: true ,
//           order: payload
//         }
//       case ORDER_UPDATE_FAIL:
//         return { 
//           loading: false, 
//           error: payload 
//         }
 
//       default:
//         return state
//     }
//   };  