import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../../JS/actions/userActions";
import '../../App.css'
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  
  
    const  user  = useSelector(state => state.AuthReducer.user)
    const dispatch = useDispatch()
  
    const [editUser, setEditUser] = useState({firstName: "", lastName: "",  email: "", password: "", address: "", phone: "" });
    const navigate = useNavigate()

    useEffect(() => {
        setEditUser(user)
    }, [user])

    const handleChange = (e) => {
        e.preventDefault();
       setEditUser({...editUser, [e.target.name]:e.target.value}) 
    }
    const handleSubmit = async (e) => {
      e.preventDefault();
      
      dispatch(updateUser(user._id, editUser))
        navigate(`/profile/${user._id}`)
    };

    return (
      <div className="profile">
        <div className="profileWrapper">
          <div className="profileTitle">
            <span className="profileUpdateTitle">Update Your Account</span>
           
          </div>
          <form className="profileForm" onSubmit={handleSubmit}>
            
            <label>First name</label>
            <input
              type="text"
              placeholder="First Name" 
              name="firstName" 
              value={editUser.firstName} 
              onChange={handleChange}
            />
             <label>Last name</label>
            <input
              type="text"
              placeholder="Last Name" 
              name="lastName" 
              value={editUser.lastName} 
              onChange={handleChange}
            />
             
            <label>Email</label>
            <input
              type="email" 
              placeholder="Enter email" 
              name="email" 
              value={editUser.email} 
              onChange={handleChange}
              required
            />
            <label>Password</label>
            <input
              type="password" 
              placeholder="Password" 
              name="password" 
              value={editUser.password} 
              onChange={handleChange}
              required
            />
            <label>Address</label>
             <input
              type="text"
              placeholder="Address" 
              name="address" 
              value={editUser.address} 
              onChange={handleChange}
            />
            <label>Phone</label>
             <input
              type="text"
              placeholder="Phone" 
              name="phone" 
              value={editUser.phone} 
              onChange={handleChange}
            />
            <button className="profileSubmit" type="submit">
              Update Profile
            </button>
            
          </form>
        </div>
       
      </div>
    )
}

export default EditProfile
