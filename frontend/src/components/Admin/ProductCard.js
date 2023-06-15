import React from 'react';
import { useDispatch } from 'react-redux';
import { Card, Button, ListGroup, ListGroupItem, Row, Col } from 'react-bootstrap';
import Rating from '@mui/material/Rating';
import { deleteProduct, getProduct } from '../../JS/actions/productActions';
import { toggleTrue } from '../../JS/actions/edit';
import { Link } from 'react-router-dom';


const ProductCard = ({product}) => {
    const dispatch = useDispatch()

    return (
        <div>
        <div style={{display: "inline-flex", justifyContent: "space-evenly", flexWrap: "wrap", margin: "10px 0px"}} >
        <Card style={{ width: '18rem', height: '26rem', textAlign: "center", position:"relative", boxShadow: "rgba(0, 0, 0, 0.25) 0px 5px 7px" }}>
         <Card.Img variant="top" style={{width: "50%", marginLeft: "70px"}} src={product.imageProd} />
            <Card.Body>
             <Card.Title> {product.nameProd} </Card.Title>
            

             <ListGroup className="list-group-flush" >
                 <ListGroupItem> Brand: {product.brand} </ListGroupItem>
                 <ListGroupItem> Price: {product.price} TND </ListGroupItem>
                 <ListGroupItem> 
                     <Rating name="read-only" value={product.rating} readOnly /> 
                </ListGroupItem>
             </ListGroup>

         <Row style={{ position:"absolute", bottom: 5, textAlign: "center"}}>
             
                 <Col>
                 <Link to={`/products/edit/${product._id}`}> 
                <Button style={{width: 100}} variant="success" 
                    onClick={() =>{ 
                        dispatch(getProduct(product._id)); 
                        dispatch(toggleTrue())
                    }}> Edit 
                     </Button> 
                    </Link>
                 </Col>
                 <Col>
                 <Button style={{width: 100}} variant="danger" onClick={()=> { 
                    if(window.confirm("Are you sure to delete this product?"))
                    dispatch(deleteProduct(product._id)) }} >
                         Delete
                </Button>
                 </Col>
             </Row>                
         </Card.Body>
        </Card> 
            
        </div>
        </div>
    );
};

export default ProductCard;