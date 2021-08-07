import React,{useState,useLayoutEffect,useRef,useEffect} from 'react';
import { getPostsByType } from '../../utilts/Models';
import PageTop from "../templates/PageTop";
export default function Blog(){

    
      const [posts, setPosts] = useState([]);
      const [recentPosts, setRecentPosts] = useState([]);

      useLayoutEffect(() => {

        getPostsByType(8,3).then( res =>{
            const res_data = res.data;

            const posts = [];

            for(let index in res_data.data){
                let row = res_data.data[index];

                posts.push({
                    title:row.title,
                    featured:row.featured,
                    metas:row.metas,
                    link:row.slug,
                    date:row.date,
                    author:row.author,
                    excerpt : row.excerpt
                    
                   
                })

            }

            setPosts(posts);
            setRecentPosts(posts);
           

        } )

        
          
      }, [])


    return(
        <>

             <PageTop id='13' />     
             <section className=" full_width">
              <div className="center"  >
                <div className="sidebar_button_block mb-5   " >
                    <button  className=" sidebar_open btn btn-primary " >  <i className="fas fa-sliders-h"></i> SIDEBAR </button>
                </div>
                <div className="full_width flex px-3 " >
                    <div  className="left" >  
                        {
                            posts.map(item=>{
                                return (
                                    <div className="posts" >
                                        <div className="post_image" >
                                            <img src={item.featured} alt={item.title} className="w-100 h-100" />
                                        </div>
                                        <div className="post_card flex flex-column " >
                                            <a href={'/blog_in/'+item.link} className="post_heading" > {item.title} </a>
                                            <div className="date" >Posted by <span>{item.author}</span> /{item.date} </div>
                                            <p className="post_text" >{item.excerpt}</p>
                                            <a href={'/blog_in/'+item.link} className="post_button" >READ MORE </a>
                                        </div>
                                     </div>
                                );
                            })
                        }       
{/* 
                        <div className="my_pagination" >
                            <nav aria-label="...">
                                <ul className="pagination">
                                  <li className="page-item disabled">
                                    <a className="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                                  </li>
                                  <li className="page-item"><a className="page-link" href="#">1</a></li>
                                  <li className="page-item active" aria-current="page">
                                    <a className="page-link" href="#">2</a>
                                  </li>
                                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                                  <li className="page-item">
                                    <a className="page-link" href="#">Next</a>
                                  </li>
                                </ul>
                              </nav>
                        </div>
 */}
                    </div>
                      
                    <div className="aside  ">

                        <div className="all_categories w-100"  >
                            <h5>All Categories</h5>
                            <ul className=" category_list  flex direction_column " >
                                <li>
                                   <div className="flex justify-content-between " >
                                        <a  href="#" >Shop All</a>
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
                                        <a href="#">Chair Kimi</a>
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
                                        <a href="#">Scarf Moss</a>
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
                                <li><a href="#">Litter Trees</a></li>
                            </ul>

                        </div>
                        <div className="best_sellers" >
                            <div className="flex justify-content-between " >
                                <h5 className="best_sel_heading" >Recent Posts</h5>
                              
                            </div>
                            <div className="two_block" > 
                                <div className="first_block">

                                    {
                                        recentPosts.map(item=>{

                                            return(
             
                                                <div className="first_block_child  flex " >
                                                    <div className="child_left_side" >
                                                        <a href={'/blog_in/'+item.link}>
                                                            <img src={item.metas.gallery[0]} alt=""/>
                                                        </a>
                                                    </div>
                                                    <div className="child_right_side" >
                                                        <a href={'/blog_in/'+item.link}>{item.title} </a>
                                                        <div className="mb-1" >
                                                            <span className="date" >11 apr 2019</span>
                                                        </div>
                                                    
                                                    </div>

                                                  </div>



                                            );

                                        })
                                    }                                 

                                </div>
                            </div>
                        </div>

                        
                        <div className="custom_cms_block " >
                            <h5>Popular Tags</h5>
                       <div className="cms_bottom" >
                                <img src="assets/images/sidebar-banner.jpg" alt=""/>
                            </div>
                        </div>
                        

                    </div>
                </div>
              </div>
            </section>
  
        
        </>



    );


}