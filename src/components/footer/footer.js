import Fragment from 'render-fragment';
import "./footer.css"


function footer() {
  return (
    <Fragment>
      
    <div className="footer">
        <div className='left-footer'>
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>

        </div>
        <div className='middle-footer'>
        <h1>Car Rental</h1>
        <p>Fast Service  is our first priority</p>

        <p>Copyrights 2023 &copy; sagarBhattarai</p>


        </div>
      <div className="right-footer">
      <h4>Follow Us</h4>
        <a href="http://instagram.com">Instagram</a>
        <a href="http://facebook.com">Facebook</a>
     
      </div>
    </div>
    
    
    </Fragment>
  );
}

export default footer;