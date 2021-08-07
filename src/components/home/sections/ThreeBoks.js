import React,{useState,useLayoutEffect,useRef,useEffect} from 'react';
import { getPostsByType } from '../../../utilts/Models';


export default function ThreeBoks(){

  const [posts, setPosts] = useState([]);
  useLayoutEffect(async () => {
 

   getPostsByType(13).then(function (res) {
     const res_data=res.data;
    

     const posts=[];

     for(let index in res_data.data){
       let row = res_data.data[index];

       posts.push({
         title:row.title,
         featured:row.featured,
         metas:row.metas
        
       })

     }
   

     setPosts(posts)
   
   })


 }, [])

    return(

    <section className=" three_boks_container full_width flex justify-content-center align-content-center ">

        <div className="three_boks full_width flex align_center justify-content-between ">

          {
            posts.map(item=>{
              return(
                
              <div className="boks">
                  <a href={item.metas.link}>
                    <img src={item.featured} alt={item.title} />
                  </a>
              </div>

              );
            })
          }


       
        </div>

    </section>




    );


}