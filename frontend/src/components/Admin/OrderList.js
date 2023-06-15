import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteOrder, getOrders } from '../../JS/actions/orderActions';
import { Spinner, Alert, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getOrder } from '../../JS/actions/orderActions';
//import { getUsers } from '../../JS/actions/userActions';
import '../../App.css'


export default function OrderList({history}) {
    
  const orderList = useSelector((state) => state.orderReducer);
  const { loading, error, orders } = orderList;
  const orderDelete = useSelector((state) => state.orderReducer);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = orderDelete;

 // const users = useSelector((state) => state.userReducer);
  
  const dispatch = useDispatch();
  useEffect(() => {
    //dispatch(getUsers())
    //dispatch({ type: ORDER_DELETE_RESET });
    dispatch(getOrders( ));
  }, [dispatch, successDelete]);

  const deleteHandler = (order) => {
    if (window.confirm('Are you sure to delete?')) {
      dispatch(deleteOrder(order._id));
    }
  };
   
 
  return (
    <div>
      <h2>Orders</h2>
      
      {loadingDelete && 
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner> }
      {errorDelete && <Alert variant="danger">
        <Alert.Heading> {errorDelete} </Alert.Heading>
        </Alert>
    }
      {loading ? (
        <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
        </Spinner> 
      ) : error ? (
        <Alert variant="danger">
        <Alert.Heading> {error} </Alert.Heading>
        </Alert>
      ) : (
        <Table responsive>
          <thead>
            <tr>
             
              <th>USER</th>
              <th>PHONE</th>
             
              <th>TOTAL</th>
              <th>PAID</th>
              <th>DELIVERED</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                
                <td>{order.shippingAddress.fullName}</td>
                <td>{order.shippingAddress.phone}</td>
                
                <td>{order.totalPrice.toFixed(2)}TND</td>
                <td>{order.isPaid ? 'Yes' : 'No'}</td>
                <td> {order.isDelivered ? 'Yes': 'No'}</td>

                <td>
                <Link to={`/order/${order._id}`}>
                  <button
                    type="button"
                    className="small"
                    onClick={()=>dispatch(getOrder(order._id))}
                  >
                    Details
                  </button>
                  </Link>
                  <button
                    type="button"
                    className="small"
                    onClick={() => deleteHandler(order)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
}