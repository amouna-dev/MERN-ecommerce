import React, { useState} from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingAddress } from '../../JS/actions/cartActions';
import TextField from '@mui/material/TextField';
import CheckoutSteps from './CheckoutSteps';
import { useNavigate } from 'react-router-dom';

const Shipping = () => {

    const {isAuth} = useSelector(state => state.AuthReducer)
    const cart = useSelector(state => state.cart)
    const {shippingAddress} = cart
    const navigate = useNavigate()
   
    if (!isAuth){
    navigate("/login")
    }
    const [fullName, setFullName] = useState(shippingAddress.fullName);
    const [address, setAddress] = useState(shippingAddress.address);
    const [city, setCity] = useState(shippingAddress.city);
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
    const [country, setCountry] = useState(shippingAddress.country);
    const [phone, setPhone] = useState(shippingAddress.phone);
  
    // if (cartItems.length === 0) {
    //   history.push("/");
    // }
  
    const dispatch = useDispatch();
  
    const handleSubmit = (e) => {
      e.preventDefault();
     dispatch(saveShippingAddress({ fullName, address, city, postalCode, country, phone }));
      navigate("/placeorder");
    };
   
   
  return (
    <>
      <CheckoutSteps step1 step2 />
       <div className="card1" >
      <Form className="form" onSubmit={handleSubmit}>
        <h1>Shipping Address</h1>

        <TextField
          variant="outlined"
          type="text"
          margin="normal"
          required
          fullWidth
          id="fullName"
          label="fullName"
          name="fullName"
          autoComplete="fullName"
          autoFocus
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <TextField
          variant="outlined"
          type="text"
          margin="normal"
          required
          fullWidth
          id="address"
          label="Address"
          name="address"
          autoComplete="address"
          autoFocus
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <TextField
          variant="outlined"
          type="text"
          margin="normal"
          required
          fullWidth
          id="city"
          label="Enter City"
          name="city"
          autoComplete="city"
          autoFocus
          value={city}
          onChange={(e) => setCity(e.target.value)} 
        />

        <TextField
          variant="outlined"
          type="text"
          margin="normal"
          required
          fullWidth
          id="postal code"
          label="Enter postal code"
          name="postal code"
          autoComplete="postal code"
          autoFocus
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
        />

        <TextField
          variant="outlined"
          type="text"
          margin="normal"
          required
          fullWidth
          id="country"
          label="Enter country"
          name="country"
          autoComplete="country"
          autoFocus
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <TextField
          variant="outlined"
          type="text"
          margin="normal"
          required
          fullWidth
          id="phone"
          label="phone"
          name="phone"
          autoComplete="phone"
          autoFocus
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button type="submit" className="primary" >
          Continue
        </button>
      </Form>

      </div> 
    </>
    );
};

export default Shipping;