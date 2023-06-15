import { GET_NEW_ARRIVALS_LOAD, GET_NEW_ARRIVALS_SUCCESS, GET_NEW_ARRIVALS_FAIL } from "../constants/filter";

const initialState = {
    loading: false,
    newArrivals: [],
    error: null
}

const filterReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_NEW_ARRIVALS_LOAD:
          return {
              loading: true
          }  
        case GET_NEW_ARRIVALS_SUCCESS:
            return {
                loading: false,
                newArrivals: [...payload]
            }  
        case GET_NEW_ARRIVALS_FAIL:
            return {
                loading: false,
                error: payload
            }
        default:
            return state
    }
}

export default filterReducer;
