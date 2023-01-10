import React from "react";
import './styles/Campus.css'
import ncc from './images/gallery10.jpeg'
import ncc1 from './images/ncc1.jpg'
import ncc2 from './images/ncc2.jpg'
import ncc3 from './images/ncc3.jpg'
import ncc4 from './images/ncc4.jpg'
import ncc5 from './images/ncc5.jpg'

const Ncc = ()=>{

    const photos = [
        {
            src:ncc,
            width:300,
            height:300
        },
        {
            src:ncc1,
            width:300,
            height:300
        },
        {
            src:ncc2,
            width:300,
            height:300
        },
        {
            src:ncc3,
            width:300,
            height:300
        },
        {
            src:ncc4,
            width:300,
            height:300
        },
        {
            src:ncc5,
            width:300,
            height:300
        },
        
  
    ]

    return(
        <div className="ncc">
           <br></br><br></br><center><h1>N.C.C</h1></center><br></br><br></br>
           <b>NCC Unit Starting Date: September, 1984.  139 Coy 25(A) Bn N.C.C</b><br></br><br></br>
            <b>NCC Officer: Captain D Vijaya Kumar</b><br></br><br></br>

            <b>Sanctioned Strength:</b> 50<br></br><br></br>
              <b>Achievements:</b><br></br><br></br>

                Army/ Navy Officers – 05.<br></br><br></br>

                Republic Day Parade – 01.<br></br><br></br>

              <b>Cadets attending  the Camps:</b><br></br><br></br>

                National Integration Camp<br></br>
                Trekking camp<br></br>
                Army Attachment Camp<br></br>
                Combined Annual Training Camp<br></br><br></br>
 

                <b>Programs Taken Up:</b><br></br><br></br>

                Various activities conducted by our cadets in the academic year.<br></br>
                Anti-Drug abuse and illicit trafficking campaign<br></br>
                Tree plantation<br></br>
                World Aids Day<br></br>
                Pulse Polio Activities<br></br>
                International Day of Yoga<br></br>
                Swachh Pakwada<br></br><br></br><br></br>
              <div className="gallery">
              <center><h1>Gallery</h1></center>
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
export default Ncc