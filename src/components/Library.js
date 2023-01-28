import React from "react";
import './styles/Campus.css'
import library1 from './images/college11.jpeg'
import library2 from './images/college14.jpeg'
const Library = ()=>{

    const photos = [
        {
            src:library1,
            width:300,
            height:300
        },
        {
            src:library2,
            width:300,
            height:300
        },
    ]

    return(
        <div className="library">
        <center><h1>Library</h1></center>
        <br></br><br></br><center><i><b>“I don’t have to look far to find treasures. I discover them every time I visit a Library” – Michael Embry</b></i><br></br><br></br></center>

        <p>Libraries open up the windows to the world and inspire students to explore, achieve and contribute in improving the quality of life.<br></br><br></br>

        They can acquire knowledge from the views of different authors. Every student can take 3 books each. We also provide  separate text books and reference books for students in the hostel. The students can prepare for higher studies from the books available in the reference room.</p><br></br>

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

export default Library