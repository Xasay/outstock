import React,{useState,useLayoutEffect,useRef,useEffect} from 'react';

import { getPostsByType } from '../../../utilts/Models';



export  default function Slider(){

 


   const [posts, setPosts] = useState([]);
   useLayoutEffect(async () => {

    
    getPostsByType(7).then(function (res) {
      const res_data=res.data;
      const posts=[];

      for(let index in res_data.data){
        let row = res_data.data[index];

        posts.push({
          title:row.title,
          featured:row.featured,
          excerpt : row.excerpt,
          metas:row.metas

        })

      }


     setPosts(posts)
      

    })


    console.log(posts);

  }, [])



    return(

    <section className="slider full_width full_height">

      <div className="full_width">

        <a href="#">

          <div className="slider_in full_width">

            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">


              <div className="carousel-indicators">

                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
                  aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                  aria-label="Slide 2"></button>
              </div>

              <div className="carousel-inner">

                {
                posts.map((item,key)=>{
                  let li_class=(key==0) ? "carousel-item active":"carousel-item"
                  return(
                    
                          <div className={li_class}>

                          <img src={item.featured} className="d-block w-100" alt= {item.title} />

                          <div className="slider_text_container">

                            <div className="slider_text">
                              <h2>
                              {item.title}
                              </h2>

                              <div className="slider_caption">
                                <h3>
                                {item.excerpt}
                                </h3>
                                { 
                                (item.metas.slider_link.length>0)
                                  
                                  ?<button type="button" className="slider_button">
                                   <a href={item.metas.slider_link} > DISCOVER NOW</a>
                                   </button>
                                  :null
                                }

                              </div>

                            </div>

                          </div>

                        </div>
                      
                        


                  );


                })
                
                
                
                
                }


              </div>

              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="#000">
                    <path
                      d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                  </svg>
                </span>
                <span className="visually-hidden">Previous</span>
              </button>

          
         
               <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="#000">
                    <path
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                  </svg>
                </span>
                <span className="visually-hidden">Next</span>
              </button>
  
            </div>

          </div>

        </a>
      </div>
    </section>

    );


}