import React from 'react';
import '../css/contactus.css';
import '../css/bootstrap.min.css';

function Contactus(){
    return(
        <div className = "tes">
<div id="contact" className="contact-us section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="section-heading wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
                <h6>Contact Us</h6>
                <h4>Get In Touch With Us <em>Now</em></h4>
                <div className="line-dec" />
              </div>  
            </div>
            <div className="col-lg-12 wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.25s">
              {/*Changes in Form attributes please check it... Vrixen*/}
              <form id="contact" onsubmit="sendEmail(); reset(); return false;">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="contact-dec">
                      <img src="assets/images/contact-us.png" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div id="map">
                      <iframe src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height="636px" frameBorder={0} style={{border: 0}} allowFullScreen />
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="fill-form">
                      <div className="row">
                        <div className="col-lg-4">
                          <div className="info-post">
                            <div className="icon">
                              <img src="assets/images/phone.png" alt="" />
                              <a href="#">010-020-0340</a>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="info-post">
                            <div className="icon">
                              <img src="assets/images/mail.png" alt="" />
                              <a href="#">hi@algofilipino.com</a>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="info-post">
                            <div className="icon">
                              <img src="assets/images/location.png" alt="" />
                              <a href="#">Quezon City</a>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <fieldset>
                            <input type="name" name="name" id="name" placeholder="Name" autoComplete="on" required />
                          </fieldset>
                          <fieldset>
                            <input type="text" name="email" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your Email" required />
                          </fieldset>
                          <fieldset>
                            <input type="subject" name="subject" id="subject" placeholder="Subject" autoComplete="on" />
                          </fieldset>
                        </div>
                        <div className="col-lg-6">
                          <fieldset>
                            <textarea name="message" type="text" className="form-control" id="message" placeholder="Message" required defaultValue={""} />  
                          </fieldset>
                        </div>
                        <div className="col-lg-12">
                          <fieldset>
                            {/*Changes in Button check if there are changes... Vrixen*/}
                            <button type="submit" className="main-button ">SUMALI SA ALGOFILIPINO</button>
                          </fieldset>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
        </div>
    )
}

export default Contactus;