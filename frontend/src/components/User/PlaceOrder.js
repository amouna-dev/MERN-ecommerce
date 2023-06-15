import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { createOrder } from '../../JS/actions/orderActions';
import CheckoutSteps from './CheckoutSteps';
import '../../App.css'
import { Col, Container, Row, Spinner, Alert, Card } from 'react-bootstrap';
//import { ORDER_CREATE_RESET } from '../../JS/constants/order';


const PlaceOrder = () => {

    const cart = useSelector(state => state.cart);
    const navigate = useNavigate()
    
    const orderCreate = useSelector((state) => state.orderReducer);
    const { loading, success, error, order } = orderCreate;
    const toPrice = (num) => Number(num.toFixed(2)); // 5.123 => "5.12" => 5.12
    cart.itemsPrice = toPrice(
      cart.cartItems.reduce((a, c) => a + c.qty * c.price, 0)
    );
    // shipping free if  
    cart.shippingPrice = cart.itemsPrice > 1000 ? toPrice(0) : toPrice(10);
    //tax:8%
    cart.taxPrice = toPrice(0.08 * cart.itemsPrice);
    //total
    cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPrice;
    
    const dispatch = useDispatch();

    useEffect(() => {
     
      if (success) {
        navigate(`/order/${order._id}`)
       // dispatch({type: ORDER_CREATE_RESET})
      }
    }, [dispatch, order, navigate, success])

    const placeOrderHandler = () => {
        // replace cartItems with orderItems
      dispatch(createOrder({ ...cart, orderItems: cart.cartItems }));
      
    }
   

    return (
        <div>
        {
        loading ?  (
            <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
            </Spinner>
        ) : error ? (
            <Alert variant="danger">
              <Alert.Heading> {error} </Alert.Heading>
            </Alert>
        ) : (
        <>
            <CheckoutSteps step1 step2 step3 ></CheckoutSteps>

        <Container>
          <Row>
            <h2>Checkout Information</h2>
                <p>
                    <i>Please read the list of items in your order and click "Confirm" to confirm your order.</i>
                </p>
            <Col xs={12} md={8}> 
            
                <Card className="card1">
                <Card.Header><h3>Shipping</h3></Card.Header>
                  <p>
                    <strong>Name:</strong> {cart.shippingAddress.fullName} <br />
                    <strong>Address: </strong> {cart.shippingAddress.address},
                    {cart.shippingAddress.city}, {cart.shippingAddress.postalCode}
                    ,{cart.shippingAddress.country} <br />
                    <strong>Phone:</strong> {cart.shippingAddress.phone} <br />
                  </p>
                  <h3>Payment</h3>
                  <p>
                    <strong>Method:</strong> Cash
                  </p>
                </Card>
             
             
                <Card className="card1">
                <Card.Header><h3>Order Items</h3> </Card.Header>
                 
                  <ul>
                    {cart.cartItems.map((item) => (
                      <li key={item.product}>
                        <Row>
                            {cart.cartItems.indexOf(item)+1}
                          <Col xs lg="2"> 
                            <img
                              src={item.imageProd}
                              alt={item.name}
                              className="small"
                            />
                          </Col>
                          <Col>
                            <Link to={`/product/${item.product}`}>
                              {item.nameProd}
                            </Link>
                          </Col>
  
                          <Col>
                           <span> {item.qty} x {item.price}TND = {item.qty * item.price}TND</span>
                          </Col>
                        </Row>
                      </li>
                    ))}
                  </ul>
                </Card>
              
            </Col>

          <Col >
            <Card className= "card1">  
                <Card.Header><h3>Order Summary</h3> </Card.Header>
               <ul>
                <li>
                  <Row>
                  <Col><strong>Items:</strong></Col>
                  <Col><span>{cart.itemsPrice.toFixed(2)}TND</span></Col>
                  </Row>
                </li>
                <li>
                  <Row>
                  <Col><strong>Shipping:</strong></Col>  
                  <Col><span>{cart.shippingPrice.toFixed(2)}TND</span></Col>
                  </Row>
                </li>
                <li>
                  <Row>
                  <Col>
                    <strong>Tax:</strong></Col>
                    <Col> <span>{cart.taxPrice.toFixed(2)}TND</span></Col>
                  </Row>
                </li>
                <li>
                  <Row>
                    <Col>
                      <h6><strong> Order Total</strong></h6>
                    </Col>
                    <Col>
                      <strong>{cart.totalPrice.toFixed(2)}TND</strong>
                    </Col>
                  </Row>
                </li>
                </ul>
                  <button
                    type="button"
                    onClick={placeOrderHandler}
                    className="primary block"
                    disabled={cart.cartItems.length === 0}
                  >
                    Confirm
                  </button>
              
            </Card>
          </Col>
          </Row>
        </Container>
        </>
        )}
      </div>
    )
}

export default PlaceOrder
