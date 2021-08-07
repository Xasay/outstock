export default function MobilMenuBox(){
    return(


          
        <div className="mobile_menu_box full_width" >
            <div className="mobile_menu_in" >  
                <div className="mobile_menu_in_logo  full_width flex align-content-center justify-content-evenly " >
                <a href="/"> <img src="assets/css/bg-images/mobile_logo.png"  /></a>
                <button type="button" id="close_mobile" ><i className="fas fa-times"></i></button>
                </div>


            <div className="mobile_menu_in_bottom" >
                <div className="mobile_menu_in_list" >
                <ul className=" full_width flex flex-column">
                    <li className=" mobile_menu_in_list_item  ">
                    <div className=" mobile_menu_in_list_item_main  full_width flex justify-content-between " >
                        <a href="#">SHOP ALL</a>
                        <div><i className="fas fa-angle-down"></i></div>
                    </div>
                    <div className=" mobile_menu_in_list_item_dropbox" >
                    <a href="#"> Acapulco Chair</a>
                        <ul className="flex flex-column ">
                        <li>
                            <a href="#">
                            <p>Atom Ottoman</p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                            <p>Copper Base</p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                            <p>InLoveSeat</p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                            <p>Pamaleta Luggage</p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                            <p>Suba Luggage</p>
                            </a>
                        </li>
                        </ul>

                        <a href="#"> Airdonic Chair</a>
                        <ul className="flex flex-column ">
                        <li><a href="#">Cedar Wood</a></li>
                        <li><a href="#">Outdoor Patio</a></li>
                        <li><a href="#">Pine Wood</a></li>
                        <li><a href="#">Poly Wood</a></li>
                        <li><a href="#">Teak Wood</a></li>
                        </ul>

                        <a href="#"> Balans Chair</a>
                        <ul className="flex flex-column ">
                        <li><a href="#">Balans Varier Peel</a></li>
                        <li><a href="#">Multi Balans</a></li>
                        <li><a href="#">Thatseat Balans</a></li>
                        <li><a href="#">Varier Club</a></li>
                        <li><a href="#">Varier Gravity</a></li>
                        </ul>

                    </div>
                    </li>
                    <li>
                        <div className=" mobile_menu_in_list_item_main  full_width flex justify-content-between " >
                        <a href="#">CHAIR KIMI</a>
                        <div><i className="fas fa-angle-down"></i></div>
                        </div>
                        <div className=" mobile_menu_in_list_item_dropbox" >
                        
                        <ul className="flex flex-column ">
                            <li>
                            <a href="#">Muffler Type</a>
                            </li>
                            <li>
                            <a href="#">Pareo Sarong Scarves</a>
                            </li>
                            <li>
                            <a href="#">Pashmina Scarves</a>
                            </li>
                            <li>
                            <a href="#">Silk Scarves</a>
                            </li>
                            
                        </ul>
                        </div>
                    </li>
                    <li>
                    <div className=" mobile_menu_in_list_item_main  full_width flex justify-content-between " >
                        <a href="#">SCARF MOSS</a>
                        <div><i className="fas fa-angle-down"></i></div>
                    </div>
                    <div className=" mobile_menu_in_list_item_dropbox" >
                        
                        <ul className="flex flex-column ">
                        <li><a href="#">Crape Myrtle</a></li>
                        <li><a href="#">Flowering Dogwood</a></li>
                        <li><a href="#">Kousa Dogwood </a></li>
                        <li><a href="#">Redbud</a></li>
                        <li><a href="#">Saucer Magnolia</a></li>
                        </ul>
                    </div>
                    </li>
                    <li>
                    <div className=" mobile_menu_in_list_item_main  full_width flex justify-content-between " >
                        <a href="#">LITTER TRES</a>
                        
                    </div>
                    </li>
                    <li>
                    <hr/>  
                    </li>

                    <li className=" mobile_menu_in_list_item" >
                    <a href="./blog.html">BLOG</a>
                    </li>

                    <li>
                    <hr/>
                    </li>

                    <li className=" mobile_menu_in_list_item"  >
                    <a href="./signin.html" target="_self" > <i className="fas fa-user"></i> SIGN IN </a>
                    </li>

                    <li className=" mobile_menu_in_list_item"  >
                    <a href="./register.html" target="_self" ><i className="fas fa-key"></i> REGISTER</a>
                    </li>

                    <li>
                    <img src="assets/css/icons/ausflag.webp"  />Australian Dolar <img src="assets/css/icons/usFlag.gif"  /> USD
                    </li>


                </ul>
                
                </div>
            </div>
            
            </div>
        </div>



    );
}