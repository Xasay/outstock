import React,{useState,useLayoutEffect,useRef,useEffect} from 'react';

import { getMenus } from '../../utilts/Models';

export default function Header(){

  const [menus, setMenus] = useState([]);

  

    useLayoutEffect(() => {

    
      getMenus(1).then(function (res) {

        
        setMenus([res.data])

      })


      

    }, [])




    return(

       <header className="w-100 header">
        <div className="center full_width">
          <div className="header_top full_width full_height">
            <div className="full_width full_height flex justify_around align_center">
              <div className="logo_container full_height">
                <a href="/" ><img src="assets/css/icons/header_logo.png"  /></a>
              </div>
    
              <nav className="header_nav flex align_center">
                <ul className="header_menu flex">
                 { 
                 
                    menus.map(item=>{
                      return(
                        <>
                            <li><a href={item[0].content} target="_self" >{item[0].title}</a></li>

                            <li className="shop_all flex justifty_between align_center">
                              <a href={item[1].content}  target="_self"  className="flex">{item[1].title}</a>
                              <svg style={{ width: "12" , marginLeft: "5"}}   aria-hidden="true" focusable="false" data-prefix="fas"
                                data-icon="angle-down" className="svg-inline--fa fa-angle-down fa-w-10" role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                <path fill="currentColor"
                                  d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z">
                                </path>
                              </svg>
                              <div className="shop_all_dropdown">
                              <ul className="flex">
                                <li>
                                  <ul className="shop_all_dropdown_1">
                                    <li>
                                      <a href={item[1].subs[0].content} ><b>{item[1].subs[0].title}</b></a>
                                    </li>
                                    <li>
                                      <a href="#" >
                                        <p>Atom Ottoman</p>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#"   >
                                        <p>Copper Base</p>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#"  >
                                        <p>InLoveSeat</p>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#"   >
                                        <p>Pamaleta Luggage</p>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#"   >
                                        <p>Suba Luggage</p>
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                                <li>
                                  <ul className="shop_all_dropdown_2">
                                    <li><a href={item[1].subs[1].content} ><b>{item[1].subs[1].title}</b></a></li>
                                    <li><a href="#"   >Cedar Wood</a></li>
                                    <li><a href="#"   >Outdoor Patio</a></li>
                                    <li><a href="#"   >Pine Wood</a></li>
                                    <li><a href="#"   >Poly Wood</a></li>
                                    <li><a href="#"  >Teak Wood</a></li>
                                  </ul>
                                </li>
                                <li>
                                  <ul className="shop_all_dropdown_3">
                                    <li>
                                      <pre><a href={item[1].subs[2].content} ><b>{item[1].subs[2].title}</b></a></pre>
                                    </li>
                                    <li>
                                      <pre><a href="#"   >Balans varier peel</a></pre>
                                    </li>
                                    <li>
                                      <pre><a href="#"   >Multi Balans</a></pre>
                                    </li>
                                    <li>
                                      <pre><a href="#"   >Thatsit Balans</a></pre>
                                    </li>
                                    <li>
                                      <pre><a href="#"   >Varier Club</a></pre>
                                    </li>
                                    <li>
                                      <pre><a href="#"   >Varier Gravity</a></pre>
                                    </li>
                                  </ul>
                                </li>
                                <li>
                                  <div className="shop_all_dropdown_img">
                                    <a href="#"   >
                                      <img src="assets/images/dropmenu.jpg"  /></a>
                                  </div>
                                </li>
                              </ul>
                            </div>
                            </li>

                            <li className="chair_kimi flex justifty_between align_center">
                              <a href={item[2].content} target="_self" >{item[2].title}</a>
                              <svg style={{width: "12", marginLeft: "5"}} aria-hidden="true" focusable="false" data-prefix="fas"
                                data-icon="angle-down" className="svg-inline--fa fa-angle-down fa-w-10" role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                <path fill="currentColor"
                                  d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z">
                                </path>
                              </svg>
                              <div className="chair_kimi_submenu">
                                <div className="flex justifty_center">
                                  <ul className="chair_kimi_submenu_list full_width flex">
                                    <li>
                                      <div className="full_height">
                                        <a href="#"   className="chair_img"><img src="assets/images/dropmenu2.jpg" className="full_width" /></a>
                                      </div>
                                      <a href="#"   >Muffler Type</a>
                                    </li>
                                    <li>
                                      <div className="full_height">
                                        <a href="#"   className="chair_img"><img src="assets/images/dropmenu3.jpg"  className="full_width" /></a>
                                      </div>
                                      <a href="#"    >Pareo Sarong Scarves</a>
                                    </li>
                                    <li>
                                      <div className="full_height">
                                        <a href="#"   className="chair_img"><img src="assets/images/dropmenu4.jpg"  className="full_width" /></a>
                                      </div>
                                      <a href="#"   >Pashmina Scarves</a>
                                    </li>
                                    <li>
                                      <div className="full_height">
                                        <a href="#"   className="chair_img">
                                          <img src="assets/images/dropmenu5.jpg"  className="full_width" /></a>
                                      </div>
                                      <a href="#"   >Silk Scarves</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </li>


                            <li className="scarf_moss flex justifty_between align_center">
                              <a href={item[3].content} target="_self" >{item[3].title}</a>
                              <svg style={{width: "12", marginLeft: "5"}} aria-hidden="true" focusable="false" data-prefix="fas"
                                data-icon="angle-down" className="svg-inline--fa fa-angle-down fa-w-10" role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                <path fill="currentColor"
                                  d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z">
                                </path>
                              </svg>
                              <div className="scarf_moss_submenu">
                                <ul className="scraf_moss_submenu_list">
                                  <li><a href="#" >Crape Myrtle</a></li>
                                  <li><a href="#"   > Flowering Dogwood</a></li>
                                  <li><a href="#"   > Kousa Dogwood</a></li>
                                  <li><a href="#"   > Redbud</a></li>
                                  <li><a href="#"  > Saucer Magnolia</a></li>
                                </ul>
                              </div>
                            </li>

                              
                            <li><a href={item[4].content} target="_self" >{item[4].title}</a></li>
                            <li><a href={item[5].content} target="_self" >{item[5].title}</a></li>

                        </>
                      );
                    })
                 }
                </ul>
              </nav>
    
              <div className="search_area flex justifty_center align_center">
                <div className="search_btn_container">
                  <a href="#"   className="search_btn flex align_center">
                    <div className="flex">
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search"
                        className="svg-inline--fa fa-search fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512">
                        <path fill="currentColor"
                          d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z">
                        </path>
                      </svg>
                      <p style={{marginLeft: "3"}}>Search</p>
                    </div>
                  </a>
                </div>
    
                <div className="search_input  justify_center align_center">
                  <input type="text" placeholder="Enter keywords to search..." />
                  <button type="button">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search"
                      className="svg-inline--fa fa-search fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512">
                      <path fill="currentColor"
                        d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z">
                      </path>
                    </svg>
                  </button>
                </div>
    
                <div className="cart_btn_container">
                  <a href="#" className="cart_btn flex align_center" style={{margin: "0 15"}}>
                    <div className="flex">
                      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                       
                       
                          <path
                            d="M23.52,29h-15a5.48,5.48,0,0,1-5.31-6.83L6.25,9.76a1,1,0,0,1,1-.76H24a1,1,0,0,1,1,.7l3.78,12.16a5.49,5.49,0,0,1-.83,4.91A5.41,5.41,0,0,1,23.52,29ZM8,11,5.11,22.65A3.5,3.5,0,0,0,8.48,27h15a3.44,3.44,0,0,0,2.79-1.42,3.5,3.5,0,0,0,.53-3.13L23.28,11Z" />
                          <path
                            d="M20,17a1,1,0,0,1-1-1V8a3,3,0,0,0-6,0v8a1,1,0,0,1-2,0V8A5,5,0,0,1,21,8v8A1,1,0,0,1,20,17Z" />
                        
                      </svg>
    
                      <p style={{marginLeft: "3px"}}>Cart</p>
                    </div>
                  </a>
                </div>
                <div className="cart_info">
                  <div>
                    <p>Your Cart is emty</p>
                  </div>
                </div>
    
                <div className="menu_btn_container">
                  <a href="#"   className="menu_btn">
                    <div className="flex align_center justify_center">
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars"
                        className="svg-inline--fa fa-bars fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512">
                        <path fill="currentColor"
                          d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
                        </path>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="menu_btn_in">
                  <div>
                    <ul className="menu_in_list">
                      <li><b>My account</b></li>

                      {
                        menus.map( item =>{
                          return(

                              <>
                                  <li><a href={item[6].content} target="_self" > {item[6].title}</a></li>
                                  <li><a href={item[7].content}  target="_self" >{item[7].title}</a></li>

                              </>

                          );

                        })



                      }


                      
                      
                      <li><b>Currency</b></li>
                      <li>
                        <a href="#">
                          <img src="assets/css/icons/ausflag.webp"  />
                          Australian dollar</a>
                      </li>
                      <li>
                        <a href="#"><img src="assets/css/icons/usFlag.gif"  />
                          USD</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
    
          
          <div className="mobile_header full_width " >
            <div className="full_width flex justify-content-between align-content-center " >
              <div className="mobile_menu" >
                <button  className="mobile_menu_btn" id="open_mobile"  type="button" >
                  <i className="fas fa-bars"></i>
                </button>
              </div>
              <div className="mobile_logo" >
                <a href="./index.html">  
                  <img src="assets/css/bg-images/mobile_logo.png" alt="mobilelogo"  className="w-100 h-100 " />
                </a>
              </div>
              <div className="mobile_basket">
                <a href="#">
                  <i className="fas fa-shopping-cart"></i>
                </a>
              </div>
            </div>
            <div className="mobile_search full_width "   >
              <div className="input-group mt-1">
                
                <input type="text" className="form-control" placeholder="Enter keywords to search..." aria-label="Username" aria-describedby="basic-addon1" />
                <span className="input-group-text" id="basic-addon1"><i className="fas fa-search"></i></span>
              </div>
            </div>
          </div>
    
    
        </div>
      </header>

    );
}