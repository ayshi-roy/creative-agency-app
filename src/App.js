import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/Home/Home/Home';
import Order from './Component/Order/Order';
import Review from './Component/Review/Review';
import Login from './Component/Login/Login';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import ServiceList from './Component/ServiceList/ServiceList';
import AllServiceList from './Component/Adminpages/AllServiceList/AllServiceList';
import AddService from './Component/Adminpages/AddService/AddService';
import MakeAdmin from './Component/Adminpages/MakeAdmin/MakeAdmin';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>     
    <Router>
        <Switch>        
            <PrivateRoute path="/order">
              <Order></Order>
            </PrivateRoute>
            <PrivateRoute path="/review">
              <Review></Review>
            </PrivateRoute>
            <PrivateRoute path="/serviceList">
              <ServiceList></ServiceList>
            </PrivateRoute>
            <PrivateRoute path="/allServiceList">
              <AllServiceList></AllServiceList>
            </PrivateRoute>
            <PrivateRoute path="/makeAdmin">
              <MakeAdmin></MakeAdmin>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/addService">
              <AddService></AddService>
            </PrivateRoute>
            <Route path="/">
              <Home></Home>
            </Route>
        </Switch> 
    </Router>
    </UserContext.Provider>
  );
}

export default App;
