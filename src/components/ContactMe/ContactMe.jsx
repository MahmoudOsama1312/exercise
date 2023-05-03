import React from 'react'
import './contactMe.css'
export default function ContactMe() {
    return (
        <>
            <div className='container text-center contact-me py-5'>
                <h1 className='text-uppercase'>contact me</h1>
                <div className='divider1'>
                    <div className="divider-line1"></div>
                    <li className='fa-solid fa-star fa-2x'></li>
                    <div className='divider-line1'></div>
                </div>

                <div className='row'>
                    <div className='col-lg-8 col-md-8 col-sm-8 mx-auto'>
                        <form action="" id='contactForm'>
                            <div className='control-group'>
                                <div className="form-group floating-label-form-group controls">
                                    <label></label>
                                    <input className="form-control" id="name" type="text" placeholder="Name" required="required" data-validation-required-message="Please enter your name." aria-invalid="false"/>
                                    <p className="help-block text-danger"></p>
                                </div>

                            </div>
                            <div className='control-group'>
                                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label></label>
                                    <input className="form-control" id="email" type="email" placeholder="E-mail" required="required" data-validation-required-message="Please enter your Email." aria-invalid="false"/>
                                    <p className="help-block text-danger"></p>
                                </div>

                            </div>
                             <div className='control-group'>
                                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label></label>
                                    <input className="form-control" id="phone" type="tel" placeholder="Phone" required="required" data-validation-required-message="Please enter your Phone." aria-invalid="false"/>
                                    <p className="help-block text-danger"></p>
                                </div>

                            </div>
                             <div className='control-group'>
                                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label></label>
                                    <textarea className="form-control" id="message" rows="text" placeholder="Message" required="required" data-validation-required-message="Please enter your Message." aria-invalid="false"/>
                                    <p className="help-block text-danger"></p>
                                </div>

                            </div>
                            <br />
                            <div className='form-group d-flex '>
                                <button type='submit' className='btn btn-success btn-lg submitButton' id="sendButton"> Send</button>
                            </div>
                        </form>
                    </div>
                </div>    

        </div>
        </>
  )
}
