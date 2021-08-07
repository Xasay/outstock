import React,{useEffect,createElement} from "react";


export default function SignIn(){

  

    return(

        <>

        <div className="center" >
                        <div className="full_width" >
                            <div className="signin_container full_width " >
                                <div className="signin_head full_width " >
                                    <ul>
                                        <li className="flex align-content-center justify-content-center " >
                                            <i className="fas fa-home mx-1 "></i>
                                            <a  href="./index.html" target="_self"  >Home</a>
                                        </li>
                                        <li className="flex   " >
                                            <i className="fas fa-angle-right mx-1 "></i>
                                            <a href="./signin.html" target="_self" className="mx-1" >Login</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="signin_body  flex full_width " >
                                    <div className="signin_left" >
                                        <form action="#" method="post" enctype="multipart/form-data" id="outstock_signin" >
                                            <div className="form_head mb-4 " >
                                                <h2>Sign in</h2>
                                            </div>
                                            <div className="mb-4">
                                                <label for="formGroupExampleInput" className="form-label">Email Address:</label>
                                                <input type="email" className="form-control" id="formGroupExampleInput" />
                                            </div>
                                            <div className="mb-4">
                                                <label for="formGroupExampleInput2" className="form-label">Password:</label>
                                                <input type="password" className="form-control" id="formGroupExampleInput2" />
                                            </div>
                                            <div className="mb-4" >
                                                <button className="signin_button" for='outstock_signin'  type="submit" >SIGN IN</button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="signin_right" >
                                        <div className="right_in" >
                                            <div className="mb-4" >
                                                <h2>New Customer?</h2>
                                            </div>
                                            <div className="mb-5" >
                                                <p className="right_text mb-2 " >Create an account with us and you'll be able to :  </p>
                                                <ul className="right_list flex flex-column  " >
                                                    <li>Check out faster</li>
                                                    <li>Save multiple sfipping addresses</li>
                                                    <li>Accses your order history</li>
                                                    <li>Track new orders</li>
                                                    <li>Save items to your Wish List</li>
                                                </ul>
                                            </div>
                                            <div className="mb-4" >
                                                <button className=" create_btn  btn " type="button"> <a href="./register.html"  target="_self" >Create Account</a> </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>        
                
        </>

    );
}