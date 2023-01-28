import React from "react";
import './styles/Facilities.css'
import gym1 from './images/GYM1.jpeg'
import gym2 from './images/GYM2.jpeg'
import gym3 from './images/GYM3.jpeg'



const Gym = ()=>{

    const photos = [
        {
            src:gym1,
            width:300,
            height:300
        },
        {
            src:gym2,
            width:300,
            height:300
        },
        {
            src:gym3,
            width:300,
            height:300
        },
    ]

    return(
        <div className="gym">
            <br></br><center><h1>GYM</h1></center><br></br><br></br>
            <center><i><b>“Physical fitness is not only one of the most important keys to a healthy body, it is the basis of dynamic and creative intellectual activity”, - John F.Kennedy</b></i></center><br></br><br></br>
            <center><p>Physical fitness is not only a habit, it is a matter of self-respect. In view of this we provide a multipurpose gym to the students. Every student can access the multipurpose gym. It is extremely helpful for the students who are appearing for Physical fitness exams in state level and central level.</p></center><br></br>
            <div className="gallery">
              <center><h1>GYM</h1></center>
              <div className="frame">
               {photos.map(photo =>
              <div className="gallery_image">
                <img src={photo.src} width={photo.width} height={photo.height} alt="" />
              </div>
              )} 
              </div>
              <footer></footer>
            </div>
        </div>
    )
}

export default Gym