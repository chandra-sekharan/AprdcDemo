import React from "react";
import Carousel from 'better-react-carousel'
import college1 from './images/college1.jpeg'
import college2 from './images/college2.jpeg'
import college3 from './images/college3.jpeg'
import college4 from './images/college4.jpeg'
import college5 from './images/college5.jpeg'
import college6 from './images/college6.jpeg'
import college7 from './images/college7.jpeg'
import college8 from './images/college8.jpeg'
import college9 from './images/college9.jpeg'
import college10 from './images/college10.jpeg'
import college11 from './images/college11.jpeg'
import college12 from './images/college12.jpeg'
import college13 from './images/college13.jpeg'
import college14 from './images/college14.jpeg'
import college15 from './images/college15.jpeg'
import college16 from './images/college16.jpeg'
import college17 from './images/college17.jpeg'
import college18 from './images/college18.jpeg'
import college19 from './images/college19.jpeg'
import college20 from './images/college20.jpeg'
import college21 from './images/college21.jpeg'
import college22 from './images/college22.jpeg'




const Infrastructure = ()=>{

    const photos = [
        {
            src:college1,
            
        },
        {
            src:college2,
            
        },
        {
            src:college3,
            
        },
        {
            src:college4,
            
        },
        {
            src:college5,
            
        },{
            src:college6,
            
        },{
            src:college7,
            
        },{
            src:college8,
            
        },{
            src:college9,
            
        },{
            src:college10,
            
        },{
            src:college11,
            
        },{
            src:college12,
            
        },{
            src:college13,
            
        },{
            src:college14,
            
        },{
            src:college15,
            
        },{
            src:college16,
            
        },{
            src:college17,
            
        },{
            src:college18,
            
        },{
            src:college19,
            
        },{
            src:college20,
            
        },{
            src:college21,
            
        },{
            src:college22,
            
        },
    ]
    return(
        <div className="infra">
         <div className="gallery">
              <center><h1>Infrastructure</h1></center><br></br><br></br>
              <div className="frame">
             <Carousel cols={3} rows={3} gap={10} loop >
             {photos.map(data=>
             <Carousel.Item>
             <div className="gallery_image">
             <img width="100%" height="100%" src={data.src} alt="" />
             </div>
             </Carousel.Item>
             )}
             </Carousel>
             </div>
              <footer></footer>
            </div>
        </div>
    )
}

export default Infrastructure