import React, { Component } from 'react';
import {Nav, Button} from "react-bootstrap"
import {Link} from "react-router-dom"
import "./style.css"
import {AiTwotoneHome} from "react-icons/ai"
import {FcSearch} from "react-icons/fc"
export default class Menu extends Component{
    render(){
        return(
           <>
           
      <div className='menu'>
        <h2 class='header'>Contact manager</h2>
          <div className='container'>
          <div className='nav'>
           <button className='btn1'><Link to="/" className='data'><AiTwotoneHome/>Home</Link></button>
           <button className='btn1'><Link to="/Search" className='data'><FcSearch/> Search </Link></button>
          </div>
          </div>
      </div>
   
           </>
        )
    }
} 