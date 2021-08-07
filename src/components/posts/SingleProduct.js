import React,{useState,useLayoutEffect,useRef,useEffect} from 'react';
import { getPostBySlug } from '../../utilts/Models';

export default function SingleProduct(props){



    const news_link = props.match.params.news_link;
    const [single, setSingle] = useState([]);
    const [postMetas, setPostMetas] = useState("");
    const [postGallery, setPostGallery] = useState([]);


    useLayoutEffect(() => {
        getPostBySlug(news_link).then(res=>{
            let data = res.data;
            setSingle(data);
            setPostMetas(data.metas);
            
            const images = [...postGallery];
      
            for (let key in data.metas.gallery) {
              let row = data.metas.gallery[key];
      
              images.push(row);
            }
      
            setPostGallery(images);



        })


    }, [])

        return(

            <>
              <div className="center" >
                <div className="full_width" >
                    <div className="register_container full_width " >
                        <div className="register_head full_width " >
                            <ul>
                                <li className="flex align-content-center justify-content-center " >
                                    <i className="fas fa-home mx-1 "></i>
                                    <a  href="./index.html" target="_self"  >Home</a>
                                </li>
                                <li className="flex   " >
                                    <i className="fas fa-angle-right mx-1 "></i>
                                    <a href="./register.html" target="_self" className="mx-1" >Shop All</a>
                                </li>
                            </ul>
                        </div>
                      
                    </div>


                    <div className="sinngle_product_container flex  full_width " >


                        <div className="single_img_container w-50 p-2 " >
                            <img src={single.featured}  className="w-100 h-100 " alt="" />
                        </div>

                        <div className="single_img_about w-50 p-2" >
                            <div className="single_head mb-3 " ><h1>{single.title}</h1></div>
                            <div className="single_rate flex mb-3   " >
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <div className="single_price mb-3  " >  ${postMetas.price}</div>
                            <div  className="single_quantity mb-3  "  >
                                <form>
                                    <div className="mb-3">
                                      <label for="exampleInputEmail1" className="form-label">Quantity</label>
                                      <input type="number" className="form-control w-25" value='1' />
                                     
                                    </div>
                                    <div  className="single_btns" >
                                        <button type="button" className="btn btn-dark mx-1 " >ADD TO CART</button>
                                        <button type="button" className=" btn btn-warning  mx-1 "  > BUY NOW</button>
                                        <button type="button" className="btn  mx-1"  ><i className="fas fa-heart"></i></button>
                                    </div>
                                </form>
                            </div>
                           
                        </div>
                    </div>


                </div>
            </div>
            </>

            
        );


}