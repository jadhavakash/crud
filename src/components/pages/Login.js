import axios from 'axios';
import React,{useState} from 'react';
import {useHistory,NavLink} from "react-router-dom";
const Login=()=> {
    let history = useHistory();
    const[user,setUser] = useState({
        name:"",
        username:"",
        email:"",
        phone:"",
        website:""
    });

    const {name,username,email,phone,website} = user;
    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
        // console.log(e.target.value);
      };
    
      const onSubmit = async e =>{
          e.preventDefault();
          await axios.post("http://localhost:3001/users",user);
          history.push("/");
      }
    return(
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Login User</h2>
                <form onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Enter Your UserName"
                    name="name"
                    value={name}
                    onChange = {e => onInputChange(e)}
                    />
                </div>
                <div className="form-group">
                    <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Enter Your Password"
                    name="username"
                    value={username}
                    onChange = {e => onInputChange(e)}

                    />
                </div>
                {/* <div className="form-group">
                    <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Enter Your E-mail Address"
                    name="email"
                    value={email}
                    onChange = {e => onInputChange(e)}

                    />
                </div>
                <div className="form-group">
                    <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Password"
                    name="phone"
                    value={phone}
                    onChange = {e => onInputChange(e)}

                    />
                </div>
                <div className="form-group">
                    <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Confirm Password"
                    name="website"
                    value={website}
                    onChange = {e => onInputChange(e)}

                    />
                </div> */}
                <div className="form-group">
                    <NavLink className="nav-link" exact to="/users/add">Register New User</NavLink>
                </div>
                <button className="btn btn-primary btn-block">Login</button>
                </form>
            </div>
        </div>
    );
};
export default Login;