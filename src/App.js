import React from 'react';

import {Route,BrowserRouter as Router} from 'react-router-dom';

import Footer from "./components/templates/Footer.js";
import Header from "./components/templates/Header.js";
import Index from "./components/home/Index.js";
import MobilMenuBox from './components/templates/MobilMenuBox.js';
import SideBar from './components/templates/SideBar.js';

//pages

import Shop from './components/pages/Shop.js';
import Chair from './components/pages/Chair.js';
import ScarfMos from './components/pages/ScarfMos.js';
import Litter from './components/pages/Litter.js';
import Blog from './components/pages/Blog.js';
import SignIn from './components/pages/SignIn.js';
import Register from './components/pages/Register.js';


//posts

import SingleBlog from './components/posts/SingleBlog.js';
import SingleProduct from './components/posts/SingleProduct.js';

function App() {
  return (
      <>

        <Header/>


        <main  className="main" >

        <Router>
            <Route path='/' exact component={Index} />
            <Route path='/shop' exact component={Shop} />
            <Route path='/chair' exact component={Chair} />
            <Route path='/scarf' exact component={ScarfMos} />
            <Route path='/litter' exact component={Litter} />
            <Route path='/blog'  component={Blog} />
            <Route path='/signin' exact component={SignIn} />
            <Route path='/register' exact component={Register} />
            <Route path='/shopall' exact component={SingleProduct} />


            <Route path='/blog_in/:news_link' exact component={SingleBlog} />
            <Route path='/shop_item/:news_link' exact component={SingleProduct} />

        </Router>   
          
        </main>

        <Footer/>
        <MobilMenuBox/>
        <SideBar/>

      </>
  );
}

export default App;
