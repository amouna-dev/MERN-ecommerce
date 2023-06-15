import { 
    GET_NEW_ARRIVALS_LOAD, 
    GET_NEW_ARRIVALS_SUCCESS, 
    GET_NEW_ARRIVALS_FAIL 
} from '../constants/filter';
import { GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAIL } from '../constants/product';

import axios from 'axios';


export const getNewArrivals = (sortBy = 'desc', limit = 3) => async dispatch => {
		try {
			dispatch({ type: GET_NEW_ARRIVALS_LOAD});
			const res = await axios.get(`/api/filter?sortBy=${sortBy}&limit=${limit}`);
			
			dispatch({
				type: GET_NEW_ARRIVALS_SUCCESS,
				payload: res.data.newArrivals,
			});
		} catch (err) {
			console.dir(err);
			dispatch({
				type: GET_NEW_ARRIVALS_FAIL,
				payload: err.response.data
			});
		}
}

export const getProductsByFilter = arg => async dispatch => {
	try {
		const res = await axios.post('/api/filter/search', arg);

		dispatch({
			type: GET_PRODUCTS_SUCCESS,
			payload: res.data.response,
		});
	} catch (err) {
        console.dir(err)
        dispatch({
            type: GET_PRODUCTS_FAIL,
            payload: err.response.data.msg
        })
    }
};
