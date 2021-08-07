import React,{useEffect,createElement} from "react";

export default function Register(){



    return(

        <>
        
           <div className="center" >
                <div className="full_width" >
                    <div className="register_container full_width " >
                        <div className="register_head full_width " >
                            <ul>
                                <li className="flex align-content-center justify-content-center " >
                                    <i className="fas fa-home mx-1 "></i>
                                    <a  href="./index.html" target="_self"  >Home</a>
                                </li>
                                <li className="flex   " >
                                    <i className="fas fa-angle-right mx-1 "></i>
                                    <a href="./register.html" target="_self" className="mx-1" >Create Account</a>
                                </li>
                            </ul>
                        </div>
                        <div className="new_acount" >
                            <h1>New Account</h1>
                        </div>
                        <div className="register_body  flex full_width " >
                            
                                <form className="row g-3 needs-validation  w-100 " novalidate>
                                <div className="register_left " >
                                     
                                    <div className="mb-3">
                                        <label for="validationCustom01" className="form-label">Email Address</label>
                                        <input type="email" className="form-control" id="validationCustom01"  required />
                                        <div className="invalid-feedback">
                                          Please enter email!
                                        </div>
                                    </div>
  
                                    <div  className="mb-3">
                                        <label for="validationCustom02" className="form-label">Confirm Password</label>
                                        <input type="password" className="form-control" id="validationCustom02"  required />
                                        <div className="invalid-feedback">
                                          Incorrect password!
                                        </div>
                                    </div>
  
                                    <div  className="mb-3">
                                          <label for="validationCustom03" className="form-label">Last Name</label>
                                          <input type="text" className="form-control" id="validationCustom03"  required />
                                          <div className="invalid-feedback">
                                            Incorrect password!
                                          </div>
                                    </div>
  
                                    <div  className="mb-3">
                                          <label for="validationCustom04" className="form-label">Phone Number</label>
                                          <input type="tel" className="form-control" id="validationCustom04"  required />
                                          <div className="invalid-feedback">
                                            Enter phone Number!
                                          </div>
                                    </div>
  
                                    <div  className="mb-3">
                                          <label for="validationCustom05" className="form-label">Adress Line 2</label>
                                          <input type="text" className="form-control" id="validationCustom05"  required />
                                          <div className="invalid-feedback">
                                            Enter Adress!
                                          </div>
                                    </div>
                                     
                                     
                                     
                                    <div  className="mb-3">
                                        <label for="validationCustom06" className="form-label">Country</label>
                                        <select className="form-select" id="validationCustom06" required >
                                          <option selected disabled value="">Choose a Country</option>
                                          <option>...</option>
                                        </select>
                                        <div className="invalid-feedback">
                                          Please select a valid state.
                                        </div>
                                    </div>

                                    <div  className="mb-3">
                                        <label for="validationCustom07" className="form-label">Zip / Postcode</label>
                                        <input type="text" className="form-control" id="validationCustom07" required />
                                        <div className="invalid-feedback">
                                          Please provide a valid zip.
                                        </div>
                                    </div>
                                   
                                   
                                 
                                </div>

                                <div className="register_right" >
                                   <div className="mb-3">
                                        <label for="validationCustom08" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="validationCustom08"  required />
                                        <div className="invalid-feedback">
                                          Please enter password!
                                        </div>
                                    </div>
  
                                    <div  className="mb-3">
                                        <label for="validationCustom09" className="form-label">First Name</label>
                                        <input type="password" className="form-control" id="validationCustom09"  required />
                                        <div className="invalid-feedback">
                                            Please enter Name!
                                        </div>
                                    </div>
  
                                  
                                    <div  className="mb-3">
                                          <label for="validationCustom10" className="form-label">Company Name</label>
                                          <input type="text" className="form-control" id="validationCustom10"  required />
                                          <div className="invalid-feedback">
                                            Enter Company Name!
                                          </div>
                                    </div>
  
                                    <div  className="mb-3">
                                          <label for="validationCustom11" className="form-label">Adress Line 1</label>
                                          <input type="text" className="form-control" id="validationCustom11"  required />
                                          <div className="invalid-feedback">
                                            Enter Adress!
                                          </div>
                                    </div>
                                     
                                     
                                    <div  className="mb-3">
                                        <label for="validationCustom12" className="form-label">Suburb / City</label>
                                        <input type="text" className="form-control" id="validationCustom12"  required />
                                        <div className="invalid-feedback">
                                          Enter City!
                                        </div>
                                  </div>
                                   
                                    
                                    <div  className="mb-3">
                                        <label for="validationCustom13" className="form-label">State / Province</label>
                                        <input type="text" className="form-control" id="validationCustom13" required  />
                                        <div className="invalid-feedback">
                                          Please enter Province.
                                        </div>
                                    </div>
                                   
                                </div>

                                <div className="mb-3" >
                                    <div  className="mb-3  flex justify-content-center align-content-center ">
                                        <button className="btn  create_btn " type="submit">Create Account</button>
                                    </div>
                                    
                                </div>

                                </form>
                           
                            
                        </div>
                    </div>
                </div>
            </div> 
        
        </>

    );



}