import React,{useState,useLayoutEffect,useRef,useEffect} from 'react'
import { getPostsById, getPostsByType } from '../../utilts/Models';

import PageTop from "../templates/PageTop";

export default function Litter(){


    const [posts, setPosts] = useState([]);

    useLayoutEffect(() => {

      getPostsByType(10,4).then(res=>{
        const res_data = res.data;

        const posts = [];

        for (let index in res_data.data){
            let row = res_data.data[index];

            let discount = row.metas.discount;
           let  price = row.metas.price,
            discount_start_date = new Date(row.metas.discount_start_date),
            discount_end_date = new Date(row.metas.discount_end_date),
            now_date = new Date();
           let calc_discount = (price * (100 - discount)) / 100;

            let has_discount = (discount_start_date <= now_date && discount_end_date >= now_date) ? true : false;

            posts.push({
                id:row.id,
                title: row.title,
                featured: row.featured,
                excerpt : row.excerpt,
                metas: row.metas,
                link: row.slug,
                date: row.date,
                author: row.author,
                author_image: row.author_image,
                has_discount: has_discount,
                price: price,
                discount_price: calc_discount,
                stok:row.stock
              });

        }
        setPosts(posts);

      })
    }, [])








  

    return(

        

        <>
            <PageTop id='17'  />
           

            <section className=" full_width ">
                <div className="center" >
                    <div className=" full_width  flex mt-5 " >
                        <div className="aside">
                            <div className="all_categories  "  >
                                <h5>All Categories</h5>
                                <ul className=" category_list  flex direction_column" >
                                    <li>
                                       <div className="flex justify-content-between " >
                                            <a  href="./shop.html" target="_self" >Shop All</a>
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
                                            <a href="./chair.html" target="_self" >Chair Kimi</a>
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
                                            <a href="./scarf.html" target="_self"   >Scarf Moss</a>
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
                                    <li><a href="./litter.html" className="my_active" >Litter Trees</a></li>
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
                                                    <img src="assets/images/best_sellers1.jpg" alt=""/>
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
                                                    <img src="assets/images/best_sellers2.jpg" alt="" />
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
                                        <img src="assets/images/cmsblock.jpg" alt="" className="w-100 h-100"  />
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


                        <div className="main_product_container" >
                            <div className=" main_product_container_child_1  full_width   " >  
                                <h3>Litter Trees</h3>
                            </div>

                              
                            <div className="sidebar_button_block mb-5  full_width " >
                                <button  className=" sidebar_open btn btn-primary " >  <i className="fas fa-sliders-h"></i> SIDEBAR </button>
                            </div>



                            <div className="main_product_container_child_3 flex  justify-content-between  full_width " >



                                      
                            {
                                    
                                    posts.map(item=>{

                                        return(

                                            <>
                                            
                                                                      
                                            <div className="little_product flex direction_column mx-2 ">

                                                <div className="little_image_container" id="little_image_container">
                                                    <div className="sold">
                                                        {
                                                            (item.stok==0)?(
                                                                <>
                                                                    <div className="new_flag">NEW</div>
                                                                    <div className="second_new_flag">SALE</div>
                                                                </>
                                                            ) : (
                                                                <>
                                                                    <div className="new_flag">NEW</div>
                                                                    
                                                                </>
                                                            )
                                                        }
                                                    </div>

                                                <a href={'/shop_item/'+item.link} className="little_img_link">
                                                    <img src={item.featured}  className="little_img" />

                                                    <div className="little_hover_img">
                                                    <img src={"assets/images/little_hover_img"+item.excerpt+".jpg"}  />
                                                    </div>
                                                </a>

                                                <div className="card_button_info flex  justify-content-center  align-content-center ">
                                                    <ul className="flex direction_column p-0">
                                                    <li>
                                                        <a href="#">
                                                        <i className="fas fa-search"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <input type="checkbox" id="small_size" />
                                                        <label for="small_size" className="small_size_icon">
                                                        <i className="fas fa-compress-alt"></i>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <i className="far fa-heart"></i>
                                                    </li>
                                                    </ul>
                                                </div>
                                                </div>

                                                <div className="little_card">

                                                    <div>{item.title} </div>
                                                    <div>
                                                        <span><i className="fas fa-star"></i></span>
                                                        <span><i className="fas fa-star"></i></span>
                                                        <span><i className="fas fa-star"></i></span>
                                                        <span><i className="fas fa-star"></i></span>
                                                        <span><i className="fas fa-star"></i></span>
                                                    </div>
                                                    <div>
                                                       {item.has_discount ?(
                                                        <>
                                                             <span>{item.discount_price}</span>
                                                             <span className="old_price"> 
                                                             <del>${item.price}</del>
                                                             </span>
                                                        </>) : ( <span>${item.price}</span>)
                                                    }
                                                    </div>
                                                <div><a href="#"><i className="fas fa-plus"></i> Add to cart </a></div>


                                                </div>


                                            </div>

                                            

                                            
                                            
                                            
                                            </>

                                        );



                                    })


                                }





                              {/*                   
                                           
                                <div className="little_product flex direction_column">

                                    <div className="little_image_container" id="little_image_container">
                                    <div className="new_flag">New</div>

                                    <a href="#" className="little_img_link">
                                        <img src="assets/images/best_product_img5.jpg" alt="" className="little_img" />

                                        <div className="little_hover_img">
                                        <img src="assets/images/best_product_hoverimg5.jpg" alt="" />
                                        </div>
                                    </a>

                                    <div className="card_button_info flex  justify-content-center  align-content-center ">
                                        <ul className="flex direction_column p-0">
                                        <li>
                                            <a href="#">
                                            <i className="fas fa-search"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="small_size" />
                                            <label for="small_size" className="small_size_icon">
                                            <i className="fas fa-compress-alt"></i>
                                            </label>
                                        </li>
                                        <li>
                                            <i className="far fa-heart"></i>
                                        </li>
                                        </ul>
                                    </div>
                                    </div>

                                    <div className="little_card">

                                    <div>[Sample] Tiered Wire Basket </div>
                                    <div>
                                        <span><i className="fas fa-star"></i></span>
                                        <span><i className="fas fa-star"></i></span>
                                        <span><i className="fas fa-star"></i></span>
                                        <span><i className="fas fa-star"></i></span>
                                        <span><i className="fas fa-star"></i></span>
                                    </div>
                                    <div>$119.95</div>
                                    <div><a href="#"><i className="fas fa-plus"></i> Add to cart </a></div>


                                    </div>


                                </div>

                                                
                                <div className="little_product flex direction_column">

                                    <div className="little_image_container" id="little_image_container">
                                    <div className="new_flag">New</div>

                                    <a href="#" className="little_img_link">
                                        <img src="assets/images/best_product_img4.jpg" alt="" className="little_img" />

                                        <div className="little_hover_img">
                                        <img src="assets/images/best_product_hoverimg4.jpg" alt="" />
                                        </div>
                                    </a>

                                    <div className="card_button_info flex  justify-content-center  align-content-center ">
                                        <ul className="flex direction_column p-0">
                                        <li>
                                            <a href="#">
                                            <i className="fas fa-search"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="small_size" />
                                            <label for="small_size" className="small_size_icon">
                                            <i className="fas fa-compress-alt"></i>
                                            </label>
                                        </li>
                                        <li>
                                            <i className="far fa-heart"></i>
                                        </li>
                                        </ul>
                                    </div>
                                    </div>

                                    <div className="little_card">

                                    <div>[Sample] Oak Cheese Grater </div>
                                    <div>
                                        <span><i className="fas fa-star"></i></span>
                                        <span><i className="fas fa-star"></i></span>
                                        <span><i className="fas fa-star"></i></span>
                                        <span><i className="fas fa-star"></i></span>
                                        <span><i className="fas fa-star"></i></span>
                                    </div>
                                    <div>$34.95</div>
                                    <div><a href="#"><i className="fas fa-plus"></i> Add to cart </a></div>


                                    </div>


                                </div>

                                                
                                <div className="little_product flex direction_column">

                                    <div className="little_image_container" id="little_image_container">
                                        <div className="second_new_flag top">SALE</div>

                                    <a href="#" className="little_img_link">
                                        <img src="assets/images/little_img_8.jpg" alt="" className="little_img" />

                                        <div className="little_hover_img">
                                        <img src="assets/images/little_hover_img8.jpg" alt="" />
                                        </div>
                                    </a>

                                    <div className="card_button_info flex  justify-content-center  align-content-center ">
                                        <ul className="flex direction_column p-0">
                                        <li>
                                            <a href="#">
                                            <i className="fas fa-search"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="small_size" />
                                            <label for="small_size" className="small_size_icon">
                                            <i className="fas fa-compress-alt"></i>
                                            </label>
                                        </li>
                                        <li>
                                            <i className="far fa-heart"></i>
                                        </li>
                                        </ul>
                                    </div>
                                    </div>

                                    <div className="little_card">

                                    <div>[Sample] 1 L Le Parfait Jar </div>
                                    <div>
                                        <span><i className="fas fa-star"></i></span>
                                        <span><i className="fas fa-star"></i></span>
                                        <span><i className="fas fa-star"></i></span>
                                        <span><i className="fas fa-star"></i></span>
                                        <span><i className="fas fa-star"></i></span>
                                    </div>
                                    <div>
                                        <span>$7.00</span>
                                        <span className="old_price" ><del>$10.00</del></span> 
                                        <span className="old_price" ><del>$9.95</del></span>
                                    </div>
                                    <div><a href="#"><i className="fas fa-plus"></i> Add to cart </a></div>


                                    </div>


                                </div>


                                                
                                <div className="little_product flex direction_column">

                                    <div className="little_image_container" id="little_image_container">
                                    <div className="new_flag">New</div>

                                    <a href="#" className="little_img_link">
                                        <img src="assets/images/best_product_img6.jpg" alt="" className="little_img" />

                                        <div className="little_hover_img">
                                        <img src="assets/images/best_product_hoverimg6.jpg" alt="" />
                                        </div>
                                    </a>

                                    <div className="card_button_info flex  justify-content-center  align-content-center ">
                                        <ul className="flex direction_column p-0">
                                        <li>
                                            <a href="#">
                                            <i className="fas fa-search"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="small_size" />
                                            <label for="small_size" className="small_size_icon">
                                            <i className="fas fa-compress-alt"></i>
                                            </label>
                                        </li>
                                        <li>
                                            <i className="far fa-heart"></i>
                                        </li>
                                        </ul>
                                    </div>
                                    </div>

                                    <div className="little_card">

                                    <div>[Sample] Chemex Coffeemaker </div>
                                    <div>
                                        <span><i className="fas fa-star"></i></span>
                                        <span><i className="fas fa-star"></i></span>
                                        <span><i className="fas fa-star"></i></span>
                                        <span><i className="fas fa-star"></i></span>
                                        <span><i className="fas fa-star"></i></span>
                                    </div>
                                    <div>$49.50</div>
                                    <div><a href="#"><i className="fas fa-plus"></i> Add to cart </a></div>


                                    </div>


                                </div>

 */}

                            </div>



                        </div>
                    </div>
                </div>
            </section>
  
        
        
        </>




    );

}