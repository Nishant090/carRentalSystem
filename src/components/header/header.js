import Fragment from 'render-fragment';
import {AiOutlineLogin} from "react-icons/ai"
import {VscSignIn} from "react-icons/vsc"
import logo from "../../images/logo.png"
import "./header.css"


function header() {
  return (
    <Fragment>
      <div className='upbar'></div>
    <div className="navbar">
    <img src={logo}  height={150} width={150}  alt="logo"></img>
      <div className="right-navbar">
      <div>Home</div>
        <div>Contact</div>
        <div>About</div>
        <div>Cars</div>
        <div className='right-navbar-1'>
      <div> Login <AiOutlineLogin/> </div>
      <div> Sign In <VscSignIn/></div>
      </div>
      </div>
    </div>
    
    </Fragment>
  );
}

export default header;