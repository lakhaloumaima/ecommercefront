import React, { useState } from 'react'
import {message, Button } from 'antd';

const Payment = () => {
    const [name, setname] = useState('');
    const [telfn, settelfn] = useState();
    const [address,setaddress] = useState('') ;

    const success = () => {
        message.success({
          content: 'Command successfully sent ..',
          className: 'custom-class',
          style: {
            marginTop: '20vh',
          } ,
        });
        /*
        window.location.href = '/home' */
      };

    return ( 
        <div className="container">
           <form style={{ marginTop: "20px" }}>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Name :</label>
                    <input value={name} onChange={(e) => setname(e.target.value)} type="text" class="form-control"  placeholder="name" required/>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Phone :</label>
                    <input value={telfn} onChange={(e) => settelfn(e.target.value)} class="form-control" type="text"  placeholder="phone number" required/>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Address :</label>
                    <input value={address} onChange={(e) => setaddress(e.target.value)} type="text" class="form-control"  placeholder="address" required/>
                </div>
               <div className="container" style={{ marginTop: '15px' , display:'flex'}}>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" defaultValue="option1" />
                        <label className="form-check-label">
                             <img src="./images/cart/edinar.jpg"   ></img></label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions"  defaultValue="option2" />
                        <label className="form-check-label" >
                             <img src="./images/cart/paypal.jpg"   ></img></label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions"  defaultValue="option3"  />
                            <label className="form-check-label"> 
                                <img src="./images/cart/bancaire.jpg"   ></img>
                            </label>
                    </div>
                </div>

               <center>  <div className="text-center text-md-left">
                   
                  <a href="/clientorders" type="submit"  className="btn btn-primary" /*onClick={success}*/ >Payer </a>
                  </div></center> <br/><br/>
            </form>

            
        </div>
     );

}
 
export default Payment;