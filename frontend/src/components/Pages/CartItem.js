import React from 'react'
import { Row, Col, ListGroup, Image } from 'react-bootstrap';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Link } from 'react-router-dom';




const CartItem = ({item, handleQtyChange, handleRemove}) => {
    
 
    return (
        <div>
           <ListGroup.Item key={item.product}>
               <Row>
                 <Col md={2}>
                   <Image src={item.imageProd} alt={item.nameProd} fluid rounded />
                 </Col>
                 <Col md={3}>
                   <Link
                     to={`/product/${item.product}`}
                   >
                     {item.nameProd}
                   </Link>
                 </Col>
                 <Col md={2}>{item.price}TND</Col>
                 <Col md={2}>
                   <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                     <Select
                       labelId="demo-simple-select-label"
                       id="demo-simple-select"
                       label="Qty"
                       value={item.qty}
                       onChange={(e) => handleQtyChange(item.product, Number(e.target.value))}
                     >
                       
                       {[...Array(item.countInStock).keys()].map(x => (
                         <MenuItem key={x + 1} value={x + 1}>
                           {x + 1}
                         </MenuItem>
                       ))}
                     </Select>
                   </FormControl>
                 </Col>
                 
                 <Col md={2}>
                   <button type="button" onClick={() => handleRemove(item.product)}>
                     <i className="fas fa-trash" style={{color: "#e53637"}}></i>
                   </button>
                 </Col>
               </Row>
             </ListGroup.Item> 
        </div>
    )
}

export default CartItem
