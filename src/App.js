import React from "react";
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import About from './components/pages/About';
import Home from './components/pages/Home';
import Navbar from "./components/layout/Navbar";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Contact from "./components/pages/Contact";
import AddUser from "./components/users/AddUser";
import EditUser from "./components/users/EditUser";
import User from "./components/users/User";
import Login from './components/pages/Login'; 
function App() {
    return ( 
    <Router>
      <div className = "App" >
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/users/add" component={AddUser}/>
          <Route exact path="/users/edit/:id" component={EditUser}/>
          <Route exact path="/users/:id" component={User} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
    );
};

export default App;