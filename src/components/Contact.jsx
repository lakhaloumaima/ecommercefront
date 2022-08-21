import React, { useState } from 'react';
import { message } from 'antd';
import emailjs from 'emailjs-com';

const Contact = () => {
  const success = () => {
    message.success('message successfuly sent');
  }; 
  const [resultat, setresultat] = useState(false);
 /* const Resultat = () => {
    success()
   window.location.href = '/sendsuccess'
  }
*/
const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_azalvf3', 'template_v8iv5fs', e.target, 'user_c18mROsP6hhSIlubZqFTI')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset() ;
      setresultat(true) ;
      success();
  }
  
    const layout = {
        labelCol: {
          span: 8,
        },
        wrapperCol: {
          span: 10,
        },
      };

    return ( 
<div  className="container">
  <div className="bg">
    <div className="row">    		
      <div className="col-sm-8">    			   			
        <h2 className="title text-center">Contact <strong>Us</strong></h2>    			    				    				
        
      </div>			 		
    </div>    	
    <div className="row">  	
      <div className="col-sm-8">
        <div className="contact-form">
         
        <div className="status alert alert-success" style={{display: 'none'}} />
          <form action="" onSubmit={sendEmail} >
            <div className="form-group col-md-6">
              <input type="text" name="name" className="form-control"  placeholder="Name" required />
            </div>
            <div className="form-group col-md-6">
              <input type="email" name="email" className="form-control"  placeholder="Email" required/>
            </div>
           
            <div className="form-group col-md-12">
              <textarea name="message" className="form-control" rows={8} placeholder="Your Message Here" defaultValue={""} required/>
            </div>                        
            <div className="form-group col-md-12">
              <input type="submit" value="Send" name="submit" className="btn btn-primary pull-right" />   
            </div>
           
          </form>
         
          </div>
        </div>
      </div>
      
      <div className="col-sm-8">
        <div className="contact-info">
           
          <h2 className="title text-center">Contact Info</h2>
          <address>
            <p>E-Shopper </p>
            <p>Tunisie , Monastir</p>
            
            <p>Mobile: +216 24 540 686</p>
           
            <p>Email: lakhaloum6@gmail.com</p>
          </address>
          <div className="social-networks">
            <h2 className="title text-center">Social Networking</h2>
            <ul>
              <li>
                <a href="#"><i className="fa fa-facebook" /></a>
              </li>
              <li>
                <a href="#"><i className="fa fa-twitter" /></a>
              </li>
              <li>
                <a href="#"><i className="fa fa-google-plus" /></a>
              </li>
              <li>
                <a href="#"><i className="fa fa-youtube" /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>    			
    </div>  
  </div>	
     );
}
 
export default Contact;