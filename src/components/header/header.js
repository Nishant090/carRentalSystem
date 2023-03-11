import Fragment from 'render-fragment';
import {AiOutlineLogin} from "react-icons/ai"
import {VscSignIn} from "react-icons/vsc"
import logo from "../../images/logo.png"
import "./header.css"
import {FiFacebook} from "react-icons/fi"
import {FiInstagram} from "react-icons/fi"
import {Link} from "react-router-dom"


function header() {
  return (
    <Fragment>
      <div className='upbar'>
        <div className='upbar-1'>
          <p> +9800000000 <FiFacebook/>   <FiInstagram/></p>
         
        </div>
      </div>
    <div className="navbar">
    <img src={logo}  height={150} width={150}  alt="logo"></img>
      <div className="right-navbar">
      <div><Link to="/">Home</Link></div>
        <div><Link to="/contact">Contact</Link></div>
        <div><Link to="/about">About</Link></div>
        <div><Link to="/cars">Cars</Link></div>
        <span className='right-navbar-1'>
      <div><Link to="/login">Login <AiOutlineLogin/></Link></div>
      <div><Link to="/signup">Sign Up<VscSignIn/></Link></div>
      </span>
      </div>
    </div>
    
    </Fragment>
  );
}

export default header;