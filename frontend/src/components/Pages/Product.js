import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';


const Product = ({product}) => {
    return (
        <div>
          <Card style={{ width: '16rem', height: '500px', margin: '10px 0px'}}>
            <Card.Img variant="top" src={product.imageProd} />
            <Card.Body style={{position: "relative"}}>
                <Card.Title style={{fontSize: 16 }}>{product.nameProd}</Card.Title>
                
                <Card.Text>
                <Rating name="read-only" value={product.rating} readOnly />
                </Card.Text>
                <Card.Text style={{fontSize: 14 }}>
                Category:  {product.category}
                </Card.Text>
                <Card.Text style={{fontSize: 14 }}>
                Price:  DTN {product.price}
                </Card.Text>
            
                <Link to={`/product/${product._id}`} >
                  <Button variant="info" style={{position: "absolute", bottom: 10 }}>View Details</Button>
                </Link>
             </Card.Body>   
            </Card>  
        </div>
    );
};

export default Product;