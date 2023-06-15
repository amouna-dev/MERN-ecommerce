import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Spinner } from 'react-bootstrap';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import { getProduct } from '../../JS/actions/productActions';
import { addToCart } from '../../JS/actions/cartActions'
import { useNavigate } from 'react-router-dom';


const ProductDetails = () => {
    const productDetails = useSelector(state => state.productReducer)
    const {loadProduct, prod, error} = productDetails
    const [qty, setQty] = useState(1);
   
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const { id } = useParams();
   // const history = useHistory();

  useEffect(() => {
      
      if(prod && id !== prod._id){
         dispatch(getProduct(id)) 
      }
  },[dispatch, prod, id])
  
   const handleAddToCart = () => {
     if(prod._id)
     dispatch(addToCart(prod._id, qty))
     navigate("/cart");
   }
 
  return (
    <div>
    {loadProduct? (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    ): error? (
    <h2>{error}</h2>
    ) : ( 
      <>
      <h4> {prod.nameProd} Details : </h4>
    <Row>
      <Col md={6}>
        <Image src={prod.imageProd} alt={prod.nameProd} fluid />
      </Col>
      <Col md={3}>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <h3>{prod.nameProd}</h3>
          </ListGroup.Item>
          
          <ListGroup.Item><strong>Price :</strong>  {prod.price} DTN</ListGroup.Item>
          <ListGroup.Item><strong>Brande :</strong> {prod.brand} </ListGroup.Item>
          <ListGroup.Item><strong>Category :</strong> {prod.category} </ListGroup.Item>
          <ListGroup.Item><strong>Description :</strong> {prod.description}</ListGroup.Item>
        </ListGroup>
      </Col>
      <Col md={3}>
        <Card>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Row>
                <Col>Price:</Col>
                <Col>
                  <strong>{prod.price} DTN</strong>
                </Col>
              </Row>
            </ListGroup.Item>

            <ListGroup.Item>
              <Row>
                <Col>Status:</Col>
                <Col>{prod.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}</Col>
              </Row>
            </ListGroup.Item>

            {prod.countInStock > 0 && (
              <ListGroup.Item>
                <Row>
                  <Col>Qty:</Col>
          
                  <Col>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        onChange={(e) => setQty(e.target.value)}
                        label="Qty"
                        value={qty}
                      >
                        {[...Array(prod.countInStock).keys()].map((x) => (
                          <MenuItem key={x + 1} value={x + 1}>
                            {x + 1}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Col>
                </Row>
              </ListGroup.Item>
            )}

            <ListGroup.Item>
              <Button
                variant="contained"
                color="primary"
                onClick={handleAddToCart}
                fullWidth
                disabled={!prod.countInStock}
              >
                Add To Cart
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
    
  </>
    )}
    </div>
  );
};

export default ProductDetails;