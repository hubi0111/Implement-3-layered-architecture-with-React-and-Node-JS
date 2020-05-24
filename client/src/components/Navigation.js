import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div>
          <NavLink to="/">Home</NavLink>
          <br/>
          <NavLink to="/submit">Submit New</NavLink>
          <br/>
          <NavLink to="/getOrg">Get All</NavLink>
       </div>
    );
}
 
export default Navigation;