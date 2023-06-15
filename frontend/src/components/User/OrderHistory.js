import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMyOrders ,getOrder } from '../../JS/actions/orderActions';
import { Spinner, Alert, Col, Row, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../App.css'

const OrderHistory = () => {

    const user = useSelector((state) => state.AuthReducer.user);
    const myOrders = useSelector((state) => state.orderReducer);
    const { loading, error, orders } = myOrders;
    const dispatch = useDispatch();
    
    useEffect(() => {
    dispatch(getMyOrders(user._id));
    }, [dispatch, user]);

    return (
        <div className="history-page">
            <h2>Your History</h2>

            <h4>You have {orders.length} orderes</h4>
            
      {loading ? (
        <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : error ? (
        <Alert variant="danger">
            <Alert.Heading>{error}</Alert.Heading>
        </Alert> 
      ) : (
            <table className="table">
                <thead>
                    <tr>
                
                        <th>List products</th>
                        <th>Total Amount</th>
                        <th>Action </th>
                    </tr>
                </thead>
                <tbody>
                {orders.map((order) => (
              <tr key={order._id}>
                
                <td>
                    <ul>
                    {order.orderItems.map((item) => (
                      <li key={item.product}>
                        <Row>
                        <Col md={1}>
                          <Image
                            src={item.imageProd}
                            alt={item.nameProd}
                            fluid
                            rounded
                          />
                          </Col>
                          <Col>
                            <Link to={`/product/${item.product}`}>
                              {item.nameProd}
                            </Link>
                          </Col>
                        </Row>
                      </li>
                    ))}
                </ul>
                </td>
                <td>{order.totalPrice.toFixed(2)}TND</td>
                <td>
                <Link to={`/order/${order._id}`} >
                  <button
                    type="button"
                    className="small"
                    onClick={()=>dispatch(getOrder(order._id))}
                    >
                    Details
                  </button></Link>
                    </td>
                </tr>
                 ) )}
                </tbody>
            </table>
      )}
        </div>
    )
}

export default OrderHistory
