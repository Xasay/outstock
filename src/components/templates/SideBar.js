import React,{useState,useLayoutEffect,useRef,useEffect} from 'react';
import { getMenus } from '../../utilts/Models';

export default function SideBar(){

    const [menus, setMenus] = useState([]);

    useLayoutEffect(() => {
       
        getMenus(3).then( (res)=>{

            // const res_data=res.data;
           
            setMenus([res.data]);
            // console.log(menus);
        } )

       

    }, [])



    return(

        <div className="side_bar" >
            
                
        <div className="aside_bottom">
            <div className="all_categories  "  >
                <h5>All Categories</h5>
                <ul className=" category_list  flex direction_column" >

                    {
                        menus.map(item=>{

                            return(
                                <>
                                    <li>
                                        <div className="flex justify-content-between " >
                                            <a  href={item[0].link} className="my_active" >{item[0].title}</a>
                                            <button type="button" className="category_btn" ><i className="fas fa-angle-right"></i></button>
                                        </div>
                                        <div className="sub_category" >
                                        <ul className="sub_category_big_list"  >
                                            <li>
                                                <div  className="flex justify-content-between "   > 
                                                    <a href="#">Acapulca Chair</a> 
                                                    <button type="button" className="category_btn" ><i className="fas fa-angle-right"></i></button>
                                                </div>
                                                <div className="sub_category">
                                                    <ul className="sub_category_litle_list  flex flex-column " >
                                                        <li><a href="#">Atom Ottoman</a></li>
                                                        <li><a href="#">Copper Base</a></li>
                                                        <li><a href="#">In Love Seat</a></li>
                                                        <li><a href="#">Pamaleta Luggage</a></li>
                                                        <li><a href="#">Suba Luggage</a></li>
                                                    </ul>
                                                </div>
            
                                            </li>
                                            <li>
            
                                                <div  className="flex justify-content-between "   > 
                                                    <a href="#">Adirondack Chair</a> 
                                                    <button type="button" className="category_btn" ><i className="fas fa-angle-right"></i></button>
                                                </div>
                                                <div className="sub_category">
                                                    <ul className="sub_category_litle_list  flex flex-column " >
                                                        <li><a href="#">Cedar Wood</a></li>
                                                        <li><a href="#">Outdoor Patio</a></li>
                                                        <li><a href="#">Pine Wood</a></li>
                                                        <li><a href="#">Poly Wood</a></li>
                                                        <li><a href="#">Teak Wood</a></li>
                                                    </ul>
                                                </div>
            
                                            </li>
                                            <li>
            
                                                <div  className="flex justify-content-between "   > 
                                                    <a href="#">Balans Chair</a> 
                                                    <button type="button" className="category_btn" ><i className="fas fa-angle-right"></i></button>
                                                </div>
                                                <div className="sub_category">
                                                    <ul className="sub_category_litle_list  flex flex-column " >
                                                        <li><a href="#">Balans Varier Peel</a></li>
                                                        <li><a href="#">Multi Balans</a></li>
                                                        <li><a href="#">Thatseat Balans</a></li>
                                                        <li><a href="#">Varier Club</a></li>
                                                        <li><a href="#">Varier Gravity</a></li>
                                                    </ul>
                                                </div>
            
                                            </li>
                                        </ul>
                                    </div>
                                    </li>

                                    <li>
                                        <div  className="flex justify-content-between "  >
                                            <a href={item[1].link}>{item[1].title}</a>
                                            <button type="button" className="category_btn" ><i className="fas fa-angle-right"></i></button>
                                        </div>
                                        <div  className="sub_category" >
                                            <ul className="sub_category_big_list" >
                                            <li><a href="#">Muffler Type</a></li>
                                            <li><a href="#">Pareo Sarong Scarves</a></li>
                                            <li><a href="#">Pashmina Scarves</a></li>
                                            <li><a href="#">Silk Scarves</a></li>
                                            </ul>
                                        </div>
                                    </li>


                                    <li>
                                        <div  className="flex justify-content-between "  >
                                            <a href={item[2].link}>{item[2].title}</a>
                                            <button type="button" className="category_btn" ><i className="fas fa-angle-right"></i></button>
                                        </div>
                                        <div  className="sub_category" >
                                            <ul className="sub_category_big_list" >
                                            <li><a href="#">Crape Myrtle</a></li>
                                            <li><a href="#">Flowering Dogwood</a></li>
                                            <li><a href="#">Kousa Dogwood </a></li>
                                            <li><a href="#">Redbud</a></li>
                                            <li><a href="#">Saucer Magnolia</a></li>
                                            </ul>
                                        </div>

                                    </li>

                                    <li><a href={item[3].link}>{item[3].title}</a></li>

                                </>
                                

                            );


                        })
                    }



                   

                </ul>

            </div>

            <div className="shop_by_price" >
                <h5>Shop By Price</h5>
                <ul className=" shop_by_price_list  flex flex-column"  >
                    <li><a href="#">$0.00 - $51.00</a></li>
                    <li><a href="#">$51.00 - $94.00</a></li>
                    <li><a href="#">$94.00 - $138.00</a></li>
                    <li><a href="#">$138.00 - $181.00</a></li>
                    <li><a href="#">$181.00 - $225.00</a></li>
                </ul>
            </div>

            <div className="best_sellers" >
                <div className="flex justify-content-between " >
                    <h5 className="best_sel_heading" >Best Sellers</h5>
                    <div>
                        <button type="button"  className="first_button" ><i className="fas fa-angle-left"></i></button>
                        <button type="button"  className="second_button" ><i className="fas fa-angle-right"></i></button>
                    </div>
                </div>
                <div className="two_block" >
                    
                    <div className="first_block">

                        <div className="first_block_child  flex " >
                            <div className="child_left_side" >
                                <a href="#">
                                    <img src="assets/images/best_sellers1.jpg" alt="" />
                                </a>
                            </div>
                            <div className="child_right_side" >
                                <a href="#">[Sample] Able Brewing System</a>
                                <div className="mb-1" >
                                    <span><i className="fas fa-star"></i></span>
                                    <span><i className="fas fa-star"></i></span>
                                    <span><i className="fas fa-star"></i></span>
                                    <span><i className="fas fa-star"></i></span>
                                    <span><i className="fas fa-star"></i></span>
                                </div>
                                <span className="price" >$225.00</span>
                            </div>

                        </div>

                                                                
                        <div className="first_block_child  flex " >
                            <div className="child_left_side" >
                                <a href="#">
                                    <img src="./assets/images/best_sellers2.jpg" alt="" />
                                </a>
                            </div>
                            <div className="child_right_side" >
                                <a href="#">[Sample] Tiered Wire Basket</a>
                                <div className="mb-1" >
                                    <span><i className="fas fa-star"></i></span>
                                    <span><i className="fas fa-star"></i></span>
                                    <span><i className="fas fa-star"></i></span>
                                    <span><i className="fas fa-star"></i></span>
                                    <span><i className="fas fa-star"></i></span>
                                </div>
                                <span className="price" >$225.00</span>
                            </div>

                        </div>


                                                                
                        <div className="first_block_child  flex " >
                            <div className="child_left_side" >
                                <a href="#">
                                    <img src="assets/images/best_sellers3.jpg" alt="" />
                                </a>
                            </div>
                            <div className="child_right_side" >
                                <a href="#">[Sample] Canvas Laundr Cart </a>
                                <div className="mb-1" >
                                    <span><i className="fas fa-star"></i></span>
                                    <span><i className="fas fa-star"></i></span>
                                    <span><i className="fas fa-star"></i></span>
                                    <span><i className="fas fa-star"></i></span>
                                    <span><i className="fas fa-star"></i></span>
                                </div>
                                <span className="price" >$225.00</span>
                            </div>

                        </div>

                                                                
                        <div className="first_block_child  flex " >
                            <div className="child_left_side" >
                                <a href="#">
                                    <img src="assets/images/best_sellers4.jpg" alt="" />
                                </a>
                            </div>
                            <div className="child_right_side" >
                                <a href="#">[Sample] Chemex Cofemaker 3 Cup </a>
                                <div className="mb-1" >
                                    <span><i className="fas fa-star"></i></span>
                                    <span><i className="fas fa-star"></i></span>
                                    <span><i className="fas fa-star"></i></span>
                                    <span><i className="fas fa-star"></i></span>
                                    <span><i className="fas fa-star"></i></span>
                                </div>
                                <span className="price" >$225.00</span>
                            </div>

                        </div>

                                                                
                        <div className="first_block_child  flex " >
                            <div className="child_left_side" >
                                <a href="#">
                                    <img src="assets/images/best_sellers5.jpg" alt="" />
                                </a>
                            </div>
                            <div className="child_right_side" >
                                <a href="#">[Sample] Fog Linen Cambray Towel</a>
                                <div className="mb-1" >
                                    <span><i className="fas fa-star"></i></span>
                                    <span><i className="fas fa-star"></i></span>
                                    <span><i className="fas fa-star"></i></span>
                                    <span><i className="fas fa-star"></i></span>
                                    <span><i className="fas fa-star"></i></span>
                                </div>
                                <span className="price" >$225.00</span>
                            </div>

                        </div>


                    </div>

                    <div className="second_block">

                        
                        <div className="first_block_child  flex " >
                            <div className="child_left_side" >
                                <a href="#">
                                    <img src="assets/images/best_sellers6.jpg" alt="" />
                                </a>
                            </div>
                            <div className="child_right_side" >
                                <a href="#">[Sample] Able Brewing System</a>
                                <div className="mb-1" >
                                    <span><i className="fas fa-star"></i></span>
                                    <span><i className="fas fa-star"></i></span>
                                    <span><i className="fas fa-star"></i></span>
                                    <span><i className="fas fa-star"></i></span>
                                    <span><i className="fas fa-star"></i></span>
                                </div>
                                <span className="price" >$225.00</span>
                            </div>

                        </div>

                                                                
                        <div className="first_block_child  flex " >
                            <div className="child_left_side" >
                                <a href="#">
                                    <img src="assets/images/best_sellers7.jpg" alt="" />
                                </a>
                            </div>
                            <div className="child_right_side" >
                                <a href="#">[Sample] Tiered Wire Basket</a>
                                <div className="mb-1" >
                                    <span><i className="fas fa-star"></i></span>
                                    <span><i className="fas fa-star"></i></span>
                                    <span><i className="fas fa-star"></i></span>
                                    <span><i className="fas fa-star"></i></span>
                                    <span><i className="fas fa-star"></i></span>
                                </div>
                                <span className="price" >$225.00</span>
                            </div>

                        </div>


                                                                
                        <div className="first_block_child  flex " >
                            <div className="child_left_side" >
                                <a href="#">
                                    <img src="assets/images/best_sellers8.jpg" alt="" />
                                </a>
                            </div>
                            <div className="child_right_side" >
                                <a href="#">[Sample] Canvas Laundr Cart </a>
                                <div className="mb-1" >
                                    <span><i className="fas fa-star"></i></span>
                                    <span><i className="fas fa-star"></i></span>
                                    <span><i className="fas fa-star"></i></span>
                                    <span><i className="fas fa-star"></i></span>
                                    <span><i className="fas fa-star"></i></span>
                                </div>
                                <span className="price" >$225.00</span>
                            </div>

                        </div>

                        


                    </div>

                </div>
            </div>

            
            <div className="custom_cms_block" >
                <h5>Custom CMS Block</h5>

                <div className="cms_container" >
                    <div className="cms_img_container" >
                        <img src="assets/images/cmsblock.jpg" alt="" className="w-100 h-100" />
                    </div>
                    <div className="cms_cart" >
                       <a href="#"> <h5>Custom Title</h5></a>
                        <p>Custom CMS Block displayed at the left sidebar on the catalog Page.
                            Put your own content here :text,html,images , media...whatever you like
                        </p>
                        <button type="button" className="cms_button w-100" ><a href="#">READ MORE</a></button>
                    </div>
                </div>

                <div className="cms_bottom" >
                    <img src="assets/images/sidebar-banner.jpg" alt="" />
                </div>
            </div>
            

        </div>
    
</div>

    );



}