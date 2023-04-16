import Fragment from 'render-fragment';
import "./home.css"
import signin from "../../images/signin.png" 
import pickup from "../../images/pickup.png" 
import drive from "../../images/drive.png" 
import drop from "../../images/return.png" 
import {CgArrowRight} from "react-icons/cg"
import {LoremIpsum} from "react-lorem-ipsum"
import phone from "../../images/phone.png"
import{IoLogoGooglePlaystore} from "react-icons/io5"
import{IoIosAppstore} from "react-icons/io"
import Product from "./cars.js"
import { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import {GoCalendar} from "react-icons/go"
import Button from 'react-bootstrap/Button';


  const Home = () => {
    const product={
      img:true,
    }
    const [pick, onPick] = useState(new Date());
    const [dropof, onDrop] = useState(new Date());
    
    
    return (
      <Fragment>
     <DateTimePicker onChange={onPick} value={pick} className='datetime-p' calendarIcon={<GoCalendar/>} required/>
     <DateTimePicker onChange={onDrop} value={dropof} className='datetime-d'calendarIcon={<GoCalendar/>}  required/>
        <div className="banner">
        <div className='date-box'>
       <h1>Search For Cars</h1>
       <p className='p1'> Pick up</p>
       <p className='p2'> Drop Off</p>
       <Button variant="light">Search</Button>
          </div>
        <p>Welcome to Car Rental</p>
        <h1>FIND AMAZING Cars BELOW </h1>
        
       
      </div>
      <h1 className="homeHeading">Top Booking Cars</h1>
      <div className="container" id="container">
            
              <Product product={product}/>
              <Product product={product}/>
              <Product product={product}/>
              <Product product={product}/>
          
          
          
            
      </div>
      <div className='works'>
        <h1>How It works</h1>
        <div>  <img src={signin}  height={150} width={150}  alt="logo"></img><CgArrowRight size={70}/><figcaption>Login</figcaption></div> 
        <div>  <img src={pickup}  height={150} width={150}  alt="logo"></img><CgArrowRight size={70}/><figcaption>PickUp</figcaption></div>
        <div>  <img src={drive}  height={150} width={150}  alt="logo"></img><CgArrowRight size={70}/><figcaption>Drive Around</figcaption></div>
        <div>  <img src={drop}   height={150} width={150}  alt="logo"></img><figcaption> Drop off</figcaption></div>
      </div>
      <div className='download'>
<div className='left-download'>
    <h1>Download our app</h1>
    <p> 
    <LoremIpsum p={1} />
    <IoLogoGooglePlaystore  size={70}/>
    <IoIosAppstore size={70} />
    </p>

</div>
<div className='right-download'>
    <img src={phone} alt='phone'></img>

</div>
      </div>
      <div className='about'>
        <h1> About Us</h1>
        <p><LoremIpsum p={4} /> </p>
      </div>
 
      <h1 className="homeHeading">Affordable Cars</h1>
      <div className="container" id="container">
            
              <Product product={product}/>
              <Product product={product}/>
              <Product product={product}/>
              <Product product={product}/>    
              <Product product={product}/>
              <Product product={product}/>
              <Product product={product}/>
              <Product product={product}/>  
      </div>
      
      </Fragment>
    );
  }
  
  export default Home;
