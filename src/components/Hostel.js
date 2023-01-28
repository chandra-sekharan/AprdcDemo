import React from "react";
import './styles/Facilities.css'
import Hostel1 from './images/college1.jpeg'
import Hostel2 from './images/college3.jpeg'
import Hostel3 from './images/college22.jpeg'

const Hostel = ()=>{

    const photos = [
        {
            src:Hostel1,
            width:300,
            height:300
        },
        {
            src:Hostel2,
            width:300,
            height:300
        },
        {
            src:Hostel3,
            width:300,
            height:300
        },
        
    ]

    return(
        <div className="hostel">
     <p><b>Hostel:</b> Under the residential system of the society , the hostel and the mess are owned and managed by the APREI Society unlike the social welfare department.<br></br><br></br>

Principal is the warden and a lecturer is nominated by the Principal as the Deputy Warden. The student bodies namely the hostel committee and the mess committee are meant to assist the Deputy warden for the smooth functioning of the mess and hostel.<br></br><br></br>

<b>Hostel Committee Members:</b><br></br><br></br>

Principal<br></br><br></br>

Deputy Warden<br></br><br></br>

Two Staff Members<br></br><br></br>

Mess Secretary<br></br><br></br>

Deputy Mess Secretary<br></br><br></br>

Our Institution provides mess to staff members also. There is a special provision for the staff to take the meals in the hostel along with the students.</p>

        <div className="gallery">
              <center><h1>Hostel</h1></center>
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
export default Hostel