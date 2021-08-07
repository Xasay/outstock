import BestSelling from "./sections/BestSelling";
import Blog from "./sections/Blog";
import NewestProduct from "./sections/NewestProduct";
import Slider from "./sections/Slider";
import ThreeBoks from "./sections/ThreeBoks";

export default function Index(){
    return(
        <>
             <Slider/>
            <div className="main_body full_width">
               
                <div className="my_container" >

                    <ThreeBoks />
                    <NewestProduct/>
                    <BestSelling/>
                    <Blog/>

                </div>

            </div>
        </>
    );
}