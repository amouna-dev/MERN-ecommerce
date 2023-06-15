import React,{ useEffect }from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAuthUser } from './JS/actions/AuthActions';
import NavBar from './components/Header/NavBar';
import Home from './components/Pages/Home';
import Dashbord from './components/Pages/Dashbord';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Profile from './components/Pages/Profile';
import UserList from './components/Admin/UserList';
import EditUser from './components/Admin/Edit';
import ProductDetails from './components/Pages/ProductDetails';
import ManageProduct from './components/Admin/ManageProduct';
import AddProduct from './components/Admin/AddProduct';
import Cart from './components/Pages/Cart';
import Shipping from './components/User/Shipping';
import OrderHistory from './components/User/OrderHistory';
import PlaceOrder from './components/User/PlaceOrder';
import Order from './components/Pages/Order';
import OrderList from './components/Admin/OrderList';
import PrivateRoute from './components/Route/PrivateRoute';
import AdminRoute from './components/Route/AdminRoute';
import './App.css';
import Footer from './components/Footer/Footer';
import ProductList from './components/Pages/ProductList';
import Contact from './components/Pages/Contact';
import EditProfile from './components/Pages/EditProfile';

function App() {
  const dispatch = useDispatch()
  const auth  =  localStorage.getItem('token')
  const getUser = () => dispatch(getAuthUser())


  useEffect(() => {
    if(auth){
      getUser();
    }
    // eslint-disable-next-line
  },[])
  
  return (
    <>
    <div className="App">
      <NavBar />
      
      <Routes>
            {/* visitor */}
        <Route exact path="/" element= {<Home/>} />     
        <Route exact path="/login" element= {<Login/>} />     
        <Route exact path="/register" element= {<Register/>} />     
        <Route exact path="/product/:id" element={<ProductDetails/>} />
        <Route exact path="/productlist" element={<ProductList/>} />
        <Route exact path="/cart" element={<Cart/>} />
        <Route exact path="/contact" element={<Contact/>} />
            {/* User && Admin */}
        <Route exact path="/profile/:id" element= {<Profile/>} />
        <Route exact path="/profile/edit/:id" element= {<EditProfile/>} />
        <Route exact path="/order/:id" element={<Order/>} />
        <Route exact path='/dashbord' element={<Dashbord/>}/>
       
            {/* User */}
        
        {/* <Route element={<PrivateRoute/>} >
          <Route exact path='/shipping' element={<Shipping/>}/>
          <Route exact path='/placeorder' element={<PlaceOrder/>}/>
          <Route exact path='/history' element={<OrderHistory/>}/>
        </Route> */}

        <Route
          path="/shipping"
              element={
                <PrivateRoute>
                  <Shipping />
                </PrivateRoute>
              }
        />
         <Route
          path="/placeorder"
              element={
                <PrivateRoute>
                  <PlaceOrder />
                </PrivateRoute>
              }
        />
         <Route
          path="/history"
              element={
                <PrivateRoute>
                  <OrderHistory />
                </PrivateRoute>
              }
        />
        
            {/* Admin */}
        
        {/* <Route element={<AdminRoute/>} >
          <Route exact path='/edit/:id' element={<EditUser/>}/>
          <Route exact path='/users' element={<UserList/>}/>
          <Route exact path='/products' element={<ManageProduct/>}/>
          <Route exact path='/products/edit/:id' element={<AddProduct/>}/>
          <Route exact path='/products/add' element={<AddProduct/>}/>
          <Route exact path='/orderlist' element={<OrderList/>}/>
        </Route>  */}
        <Route
          path="/edit/:id"
              element={
                <AdminRoute>
                  <EditUser />
                </AdminRoute>
              }
        />
        <Route
          path="/users"
              element={
                <AdminRoute>
                  <UserList />
                </AdminRoute>
              }
        />
        <Route
          path="/products"
              element={
                <AdminRoute>
                  <ManageProduct />
                </AdminRoute>
              }
        />
        <Route
          path="/products/edit/:id"
              element={
                <AdminRoute>
                  <AddProduct />
                </AdminRoute>
              }
        />
        <Route
          path="/products/add"
              element={
                <AdminRoute>
                  <AddProduct />
                </AdminRoute>
              }
        />
        <Route
          path="/orderlist"
              element={
                <AdminRoute>
                  <OrderList />
                </AdminRoute>
              }
        />     

        
      </Routes>
      </div>
       
      <Footer />
      
    </>
  );
}

export default App;
