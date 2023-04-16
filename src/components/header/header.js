import Fragment from 'render-fragment';
import {AiOutlineLogin} from "react-icons/ai"
import {VscSignIn} from "react-icons/vsc"
import logo from "../../images/car.png"
import "./header.css"
import {FiFacebook} from "react-icons/fi"
import {FiInstagram} from "react-icons/fi"
import {Link} from "react-router-dom"


function header() {
  return (
    <Fragment>
    <div className="navbar">
    <img src={logo}  height={150} width={150}  alt="logo"></img>
      <div className="right-navbar">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/cars">Cars</Link>
      </div>
      <div className='right-navbar-1'>
      <Link to="/login">Login <AiOutlineLogin/></Link>
      <Link to="/signup">Sign Up <VscSignIn/></Link>
      </div>
    </div>
    
    </Fragment>
  );
}

export default header;