import React, { useState } from "react";

import {Link,Outlet} from 'react-router-dom';

// import {Link} from 'react-router-dom';




export default function Navigation(){
  // const Login=()=><Login></Login>;
  const [log,setlog]= useState(false);
  const [reg,setReg]=useState(false);
  const [flag,setFlag]=useState(false);

  return (
    <>
    {/* <Router> */}
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">App</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      {/* <a className="nav-item nav-link active" href="#"><span className="sr-only">Register</span></a> */}
      <Link to="/Register" onClick={()=>setReg(true)} className="nav-item nav-link">Register</Link>
      <Link to="/Login" onClick={()=>setlog(true)} className="nav-item nav-link">Login</Link>
      <Link to="/Joblisting" onClick={()=>setFlag(true)} className="nav-item nav-link">Show Jobs</Link>
      <a className="nav-item nav-link" href="#">Add Work</a>
      </div>
    </div>
  </nav>    
  {log && <Outlet></Outlet>}
  {reg && <Outlet></Outlet>}
  {flag && <Outlet></Outlet>}
    </>
  );
};

