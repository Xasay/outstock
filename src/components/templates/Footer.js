import React,{useState,useLayoutEffect,useRef,useEffect} from 'react';
import { getMenus } from '../../utilts/Models';

export default function Footer(){

  const [menus, setMenus] = useState([]);
  const [headmenus, setHeadmenus] = useState([]);

  useLayoutEffect(() => {
    
    getMenus(2).then((res)=>{
      const res_data=res.data;
      const menus = [];

      for (let index in res_data){
         let row = res_data[index]
          menus.push({
            title : row.title,
            link : row.link
          })
      } 
       setMenus(menus);
      
    })
    
    getMenus(1).then((res)=>{
        const head_rest_data=res.data;
        const head_menus = [];

        for(let index in head_rest_data){
           
          let row = head_rest_data[index];

          head_menus.push({
            title : row.title,
            link : row.link
          })  
        }
        setHeadmenus(head_menus);
        

    })





  }, [])
  

    return(

  <footer className="footer  full_width"  >
  <div className="center  " >
    <div className="footer_container flex  full_width " >
      <div className="footer_in   flex   " >
        
        <div className="adres_block" >
          <div className="footer_logo">
            <img src="assets/css/bg-images/logo-footer.jpg" alt="footer_logo"/>
          </div>

          <div className="adres_list full_width  ">
            <address>
              <span><i className="fas fa-map-marker-alt"></i></span>
                 Address : Acme widgets 123 
                Widget Street Acmeville ,AC 12345 United States of America 
            </address>
            <address className="email" >
              <span><i className="far fa-envelope"></i></span>
              Email: <a href="mailto:contact@bigcommerce.com">contact@bigcommerce.com</a>
            </address>
            <address>
              <span><i className="fas fa-phone-alt"></i></span> Phone Number:(1800)-000-6890
            </address>

            <ul className=" footer_icon_list  flex full_width  align-content-center " >
              <li>
                <a href="#"><i className="fab fa-facebook-f"></i></a>
              </li>
              <li>
                <a href="#"><i className="fab fa-twitter"></i></a>
              </li>
              <li>
                <a href="#"> <i className="fab fa-youtube"></i> </a>
              </li>
              <li>
                <a href="#"> <i className="fab fa-instagram"></i> </a>
              </li>
            </ul>

          </div>
        </div>

        <div className="footer_left  flex justify-content-between align-content-center   " >




              
            <div className="information_block" >
              <h5>Information</h5>
              <ul className="flex direction_column" >

                {
                  menus.map(item=>{

                    return (
                      <li><a href={item.link}>{item.title}</a></li>
                    );

                  })
                }

              
              </ul>
            </div>

            <div className="information_block" >
              <h5>Brands</h5>
              <ul className="flex direction_column" >
                <li><a href="#">OFS</a></li>
                <li><a href="#">Common Good</a></li>
                <li><a href="#">Sagaform</a></li>
                <li><a href="#">View All</a></li>
                
              </ul>
            </div>

            <div className="information_block" >
              <h5>All Categories</h5>
              <ul className="flex direction_column" >
              {
                headmenus.map(item =>{
                  return(
                    <li><a href={item.link}>{item.title}</a></li>
                  );
                })
              }

              
              </ul>
            </div>
        </div>
        
      </div>
    </div>
  </div>
</footer>





    );


}