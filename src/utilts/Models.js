import axios from 'axios';
import FormData from 'form-data';


export const getPostsByType = async (post_type,post_limit=100) =>{

    const form_data = new FormData();
    form_data.append('get_posts', 'true');
    form_data.append('post_type', post_type);
    form_data.append('post_limit',post_limit);
 
        
    return await axios( { 
         method: 'post',
         url: 'http://localhost/outstock/',
         data : form_data
      
    })
    
};


export const getMenus = async (menu_type) =>{

    const data = new FormData();
    data.append('get_menus', 'true');
    data.append('menu_type', menu_type);

 
    return await axios({
        method: 'post',
        url: 'http://localhost/outstock/',
        data : data
    }) 


}


export const getPostsById = async (post_id) =>{

    const form_data = new FormData();
    form_data.append('get_post', 'true');
    form_data.append('post_id', post_id);
 
        
    return await axios( { 
         method: 'post',
         url: 'http://localhost/outstock/',
         data : form_data
      
    })
    
};


export const getPostBySlug=async(slug)=>{
    
    
    const  form_data = new FormData();
    form_data.append('get_post_by_slug', 'true');
    form_data.append('slug', slug);
  
    return await axios({
      method: 'post',
      url: 'http://localhost/outstock/',
      data :  form_data
    })
  }