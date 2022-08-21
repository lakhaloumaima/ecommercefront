import React from 'react';

const Footer = () => {
    return ( 
        <div>
  <footer id="footer">{/*Footer*/}
    <div className="footer-top">
     
    </div>
    <div className="footer-widget">
      <div className="container">
        <div className="row">
          <div className="col-sm-2">
            <div className="single-widget">
              <h2>Service</h2>
              <ul className="nav nav-pills nav-stacked">
              <li><a href="/conatct">Contact Us</a></li>
                <li><a href="#">Online Help</a></li>
                
                <li><a href="#">Order Status</a></li>
                
              </ul>
            </div>
          </div>
          <div className="col-sm-2">
            <div className="single-widget">
              <h2>Quock Shop</h2>
              <ul className="nav nav-pills nav-stacked">
                <li><a href="#">Superette</a></li>
                <li><a href="#">Mode</a></li>
                <li><a href="#">Informatique</a></li>
                <li><a href="#">Article de sport</a></li>
                
              </ul>
            </div>
          </div>
      
          <div className="col-sm-2">
            <div className="single-widget">
              <h2>About Shopper</h2>
              <ul className="nav nav-pills nav-stacked">
                <li><a href="#">Company Information</a></li>
              
                <li><a href="#">Store Location</a></li>
              
                <li><a href="#">Copyright</a></li>
              </ul>
            </div>
          </div>
          <div className="col-sm-3 col-sm-offset-1">
            <div className="single-widget">
              <h2>About Shopper</h2>
              <form action="#" className="searchform">
                <input type="text" placeholder="Your email address" />
                <button type="submit" className="btn btn-default"><i className="fa fa-arrow-circle-o-right" /></button>
                <p>Subscribe to the e-shopper newsletter</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </footer>{/*/Footer*/}
</div>

     );
}
 
export default Footer;