import React,{useState,useLayoutEffect,useRef,useEffect} from 'react';
import { getPostsByType } from '../../../utilts/Models';



export default function Blog(){


  const [posts, setPosts] = useState([])

    useLayoutEffect(() => {

       getPostsByType(8,100).then( res =>{
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
      
       

    } )

    }, [])



    return(

    <section  className="blog_posts  full_width" >

        <h5 className="newest_title flex direction_column" >
          <span>Our Blog Posts</span>
          <span>Mirum Est Qotare Quam Littera Gothica Quam Nunc Putamus Parum
            Claram!
          </span>
        </h5>

        <div className="blog_container  flex  full_width  "  >

          {
            posts.map( item=>{
               return(
                 <>

                      <div className="blog_item  " >
                              <div className="blog_image full_width " >
                                <img src={item.featured} alt={item.title}  className=" imgblog w-100 h-100" />
                              </div>

                              <div className="blog_cart full_width "  >
                                <h5 className="blog_title" >
                                <a href={'/blog_in/'+item.link}> {item.title}</a>
                                </h5>

                                <div className="blog_date full_width " >
                                  Posted by <span> {item.author} </span><span> / {item.date}</span>
                                </div>

                                <div className="blog_article full_width " >
                                  <p>{item.excerpt}</p>

                                </div>

                                <button type="button" className="blog_button" >
                                  <a href={'/blog_in/'+item.link}> READ MORE </a>
                                </button>
 
                              </div>
                      </div>


                 </>
               ); 
            })
          }


           
         

        </div>
    </section>


    );
}