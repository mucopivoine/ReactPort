import React from 'react'
import './Heroimg1.css'
import { Component } from "react";

class Heroimg1 extends Component{
    render(){
        return (
            <div className="hero-img bg-[url('/comps.webp')] ">
             <div className='heading text-white absolute'>
             <h1 className=''>{this.props.heading}</h1>
             <p className=''>{this.props.text}</p>
             </div>
            </div>
          ) 
    }   
}

export default Heroimg1