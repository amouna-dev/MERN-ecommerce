import {
     GET_USER_LOAD, 
     GET_USER_SUCCESS, 
     GET_USER_FAIL, 
     GET_USER, 
     EDIT_USER,
     EDIT_USER_ERRORS 
    } from "../constants/user";

import axios from 'axios'

export const getUsers = () => async(dispatch) => {
    dispatch({type: GET_USER_LOAD})
    try {
         //headers
         const config = {
            headers:{
                'auth-token': localStorage.getItem('token')
            }
        }
        let result = await axios.get("/api/user/users", config)
        dispatch({
            type: GET_USER_SUCCESS, 
            payload: result.data.response
        })
    } catch (error) {
        dispatch({type: GET_USER_FAIL})
        console.dir(error)
    }
}
// delete user
export const deleteUser = (id) => async(dispatch) => {
      //headers
      const config = {
        headers:{
            'auth-token': localStorage.getItem('token')
        }
    }
    axios
    .delete(`/api/user/${id}`, config)
    .then((() => dispatch(getUsers())))
    .catch(err => console.log(err))
}
//get user by id
export const getUser = (id) => async(dispatch) => {
    dispatch({type: GET_USER_LOAD})
    try {
          //headers
          const config = {
            headers:{
                'auth-token': localStorage.getItem('token')
            }
        }
        let result = await axios.get(`/api/user/${id}`, config)
        dispatch({
            type: GET_USER,
            payload: result.data.response
        })
    } catch (error) {
        console.dir(error)
        dispatch({type: GET_USER_FAIL})
    }
}
// edit user
export const updateUser = (id, user) => async(dispatch) => {
    try {
          //headers
          const config = {
            headers:{
                'auth-token': localStorage.getItem('token')
            }
        }
        let result = await axios.put(`/api/user/${id}`, user, config)
        
        dispatch({
            type: EDIT_USER,
            payload: result.data.response
        })
       // dispatch(getUsers())
    } catch (error) {
        console.dir(error)
        const {errors, msg} = error.response.data
        if(Array.isArray(errors)){
            errors.forEach(err => alert(err.msg))
        }
        if(msg){
            return alert(msg)
        }
        dispatch({type: EDIT_USER_ERRORS})
    }
}