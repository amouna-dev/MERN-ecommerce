import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateOrder  } from '../../JS/actions/orderActions';
import '../../App.css'
import { Container, Row, Card, Spinner, Col, Image } from 'react-bootstrap';


const Order = () => {
   // const orderId = useParams();
    // console.log(orderId)
   
   const OrderDetails = useSelector(state => state.orderReducer)
  const { order, loading, error} = OrderDetails 
  const user = useSelector(state => state.AuthReducer.user)

    const dispatch = useDispatch();
    
    useEffect(() => {
        //if(!order || orderId !== order._id){
           //  dispatch(getOrder(orderId))
         //}
        
     // eslint-disable-next-line 
    }, []);

    const payHandler = () => {
        dispatch(updateOrder(order._id));
      };

    return (
        <div>
        {loading ? (
        <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
        </Spinner> 
      ) : error ? (
         <h2>{error}</h2>
      ) : (
       
        <Container>
        <Row>
        <h3>ORDER N: {order._id} </h3>
             
            
                <Card className="card1">
                <Card.Header><h4>Shipping Informations</h4></Card.Header>    
                  <ul>
                  <li>  <strong>Name:</strong> {order.shippingAddress.fullName}</li>
                
                  <li> <strong>Address: </strong> {order.shippingAddress.address}
                    {order.shippingAddress.city}, {order.shippingAddress.postalCode}
                    ,{order.shippingAddress.country}</li> 

                 <li><strong>Phone: </strong> {order.shippingAddress.phone}</li>

                  <li><h6>Payment Method: <strong>Cash</strong></h6> </li>
                  </ul>
                </Card>
              
                <Card className="card1">
                <Card.Header><h3>Order Items</h3> </Card.Header>
                </Card>
        <table className="table">
          <thead>
            <tr>
              
              <th>PRODUCTS</th>
              <th>Quantity</th>
              <th>PRICE</th>
              
            </tr>
          </thead>
          <tbody>            
                {order.orderItems.map((item) => (
                   <tr key={item.product}> 
                      
                      <td >
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
                    </td>
                    <td>{item.qty}</td>    
                    <td>{item.price}TND</td>                         
              </tr>
              ))}
           
          </tbody>
          <tfoot>
            <tr>
            <td ></td>
          <td><strong>Items Price</strong></td>
          <td colSpan={2}>{order.itemsPrice.toFixed(2)}TND</td>  
            </tr>
            <tr>
            <td ></td>
          <td><strong>Shipping Price</strong></td>
          <td colSpan={2}>{order.shippingPrice.toFixed(2)}</td>  
            </tr>
            <tr>
            <td ></td>
          <td><strong>Tax Price</strong></td>
          <td colSpan={2}>{order.taxPrice.toFixed(2)}</td>  
            </tr>
          <tr>
          <td ></td>
          <td><strong>TOTAL AMOUNT</strong></td>
          <td colSpan={2}><strong>{order.totalPrice.toFixed(2)}TND</strong></td>
        </tr>
          </tfoot>
        </table>
                  
          </Row>

          <Row>
          {(user.role === "admin" && !order.isPaid && order.paymentMethod === "Cash" && !order.isDelivered)  && (
                <>
                  {loading && (
                  <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
              </Spinner>)}
                  {error && (
                   
                    <h3> {error} </h3>
                                    
                    )}
                  <button
                    type="button"
                    className="primary block"
                    onClick={payHandler}
                  >
                    Paid Cach
                  </button>
                  </>
              )}
            
          </Row>
        </Container>
      )}
        
      </div>
    )
}

export default Order
