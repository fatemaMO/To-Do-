
import React, { Component } from 'react';
import {Link } from "@reach/router"

export default class Home extends Component{


  render()
  {
      return(

      <div >
 
    
     <h1 className="header">to do list </h1>  
     <br />           
     
      <Link className="link" to='/todos'>see what you will do</Link>
      <p className="p">Checking items off a to-do list doesn’t 
      determine progress  focusing on your priorities is what counts 
     </p> 
      </div>
)}



}
