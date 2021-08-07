import React,{useState,useLayoutEffect,useRef,useEffect} from 'react';
import { getPostsById } from '../../utilts/Models';

export default function PageTop(props){

    const [title, setTitle] = useState('');
    const [link, setLink] = useState('');

    useLayoutEffect(() => {
       
        getPostsById(props.id).then((res)=>{

            setTitle(res.data.title);
            setLink(res.data.metas.link);
            
           

        })
           
    }, [])


    return(
        <>

           <section className="heading full_width" >
                <div className="center" >
                    <div className="shop_heading flex  justify-content-center align-content-center full_width" >
                        <div className="heading_in flex  flex-column  justify-content-center align-content-center">
                            
                           <h3>{title}</h3>
                           
                           <ul className="flex align-content-center justify-content-center" >
                               
                              <li>
                                  <a href="/"> Home </a>
                              </li>
                              <li>
                                <a href={link}> {title} </a>
                              </li>
                             
                           </ul>
                        </div>
                    </div>
                </div>
            </section>
        
        </>

    );

}