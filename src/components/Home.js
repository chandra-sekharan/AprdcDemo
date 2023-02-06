import React from "react";
import './styles/Home.css';
import Carousel from 'better-react-carousel'
import ncc from './images/ncc.jpg'
import sports from './images/sports.jpg'
import nss from './images/nss4.jpeg'
import college from './images/gallery19.jpeg'
import logo from './images/logo1.jpg'
import swayam from './images/swayam.png'
import nlist from './images/nlist.png'
import Anu from './images/Anu.png'
import Apssdc from './images/apsdc.png'
import innovation from './images/innovation.png'
import edx from './images/edx.png'
import double from './images/double.png'
import gallery1 from './images/gallery18.jpg';
import gallery2 from './images/gallery2.jpg';
import gallery11 from './images/gallery11.jpeg';
import gallery3 from './images/gallery3.jpg';
import gallery4 from './images/gallery4.jpg';
import gallery5 from './images/gallery5.jpeg';
import gallery6 from './images/gallery6.jpeg';
import gallery7 from './images/gallery20.jpeg';
import gallery8 from './images/gallery17.jpg';
import gallery9 from './images/gallery9.jpeg';
import gallery10 from './images/gallery10.jpeg';
import gallery12 from './images/college14.jpeg';
import gallery13 from './images/gallery15.jpeg';
import gallery14 from './images/gallery16.jpeg';
import gallery15 from './images/gallery13.jpeg';
import gallery16 from './images/gallery14.jpeg';
import sample from './images/sample.jpg'
import ShankarNarayana from './images/shankarNarayana.jpg'
import RamManohar from './images/RamManohar.png'
import PeriMahesh from './images/PeriMahesh.jpg'
import HariKrishna from './images/HariKrishna.jpg'
import MHNaik from './images/MHNaik.jpg'





const Home = ()=>{

    const photos = [
        {
            src:ncc,
            
        },
        {
            src:gallery11,
            
        },
        {
            src:college,
            
        },
        {
            src:gallery1,
            
        },
        {
            src:gallery2,
            
        },
        {
            src:gallery3,
            
        },
        {
            src:gallery4,
            
        },
        {
            src:gallery5,
            
        },
        {
            src:gallery6,
            
        },
        {
            src:gallery7,
            
        },
        {
            src:gallery8,
            
        },
        {
            src:gallery9,
            
        },
        {
            src:gallery14,
            
        },
        {
            src:nss,
            
        },
        {
            src:gallery12,
            
        },
        {
            src:gallery13,
            
        },
        {
            src:gallery15,
            
        },
        {
            src:gallery16,
            
        },
    ];
 


    const Moments = [
        {
            id:1,
            src:gallery10,
            title:"National Cadet Corps",
            desc:"The National Cadet Corps is the Indian military cadet corps with its head Quarters at New Delhi.",

        },
        {
            id:2,
            src:sports,
            title:"Sports",
            desc:"The college is equipped with a Gym. Sports facilities such as Table-Tennis, shuttle etc.",
        },
        {
            id:3,
            src:nss,
            title:"National Service Scheme",
            desc:"The National Service Scheme (NSS) is a Central Sector Scheme of Government of India.",
        },
        
    ]




  
    const Events=[
        {
           date:"26 APR",
           event:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
              
        },
        {
            date:"15 AUG",
            event:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
               
         },
         {
            date:"02 OCT",
            event:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
               
         },
         {
            date:"26 OCT",
            event:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
               
         },
         {
            date:"25 DEC",
            event:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
               
         },
         {
            date:"26 JAN",
            event:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
               
         },
         {
            date:"14 NOV",
            event:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
               
         },
    ]



    const alumini = [
        {
            image:ShankarNarayana,
            name:"Sri M.Shankar Narayana",
            designation:"Hon’ble Minister for Road and Buildings",
        },
        {
            image:RamManohar,
            name:"Sri V.Ram Manohar",
            designation:"Special Secretary to Govt. of A.P.,Municipal Administration and Urban Development",
        },
        {
            image:HariKrishna,
            name:"Sri Hari Krishna",
            designation:"Vice-Chairman, TUDA",
        },
        {
            image:PeriMahesh,
            name:"Sri Peri Mahesh",
            designation:"Editor, Career 360",
        },
        {
            image:MHNaik,
            name:"Sri M.H.Naik",
            designation:"Commissioner, Income Tax, IRS",
        },
    ]

    const fresher = [
        {
            image:sample,
            name:"Mark Zukenberg",
            designation:"Chief Executive Officer",
        },
        {
            image:sample,
            name:"Sunder Pichai",
            designation:"Chief Executive Officer",
        },
        {
            image:sample,
            name:"Satya Nadella",
            designation:"Chief Executive Officer",
        },
        {
            image:sample,
            name:"Elon Musk",
            designation:"Chief Executive Officer",
        },
        {
            image:sample,
            name:"Bill Gates",
            designation:"Chief Executive Officer",
        },
    ]

    const eventUpdate = [
        {
            src:gallery1,
            
        },
        {
            src:gallery10,
            
        },
        {
            src:gallery8,
            
        },
    ]
    

 const Brands = [Anu,swayam,Apssdc,nlist,innovation,edx];
 
 //card animation 
 window.addEventListener('scroll', effects ,);
 function effects(){
     
    var x = document.querySelectorAll('.event');
    var windowheight = window.innerHeight;   
    for(let i=0 ; i<x.length;i++)
    {
       
       var revealTop = x[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if(revealTop < windowheight - revealPoint)
        {
            x[i].classList.add('active');
        }
        else{
            x[i].classList.remove('active');
        }
    }

} 
 
console.log(photos)
    return(
        <>
        <div className="Home">
            
            <div className="homepage">
            
                <center><h1>All the Riches in the world cannot <br></br>match the wealth of education</h1></center>
            
                 <button><a href="#homesection">Explore</a></button>
                 <img src={double} alt="" />
            </div>
            
        </div>
        <div className="homesection" id="homesection" >
        <h1>Happenings in APRDC</h1>
        <div className="events" >
        {Moments.map(data =>
            <div className="event">
              <div className="image">
                <img src={data.src} alt="ncc" />
              </div>
              <h2>{data.title}</h2><br></br>
              <h6>{data.desc}</h6>             
              <footer></footer>
            </div>
            )}
            <footer></footer>
            </div> 
            <br></br><br></br>
          <div className="secondContainer">
               <div className="eventsection">
                  <div className="eventupdate">
                     <Carousel cols={1} rows={1} gap={5} loop >
                     {eventUpdate.map(data=>
                     <Carousel.Item>
                       <div className="events_up">
                        <img src={data.src} alt=""/>
                       </div>
                       </Carousel.Item>
                       )}
                       </Carousel>
                     </div>
                 <div className="event_notifier">
                    <h4>EVENTS</h4>
                      <div className="event_manager">
                        {Events.map(data=>
                        <div className="events_box">
                            <div className="events_date">
                                <p>{data.date}</p>
                            </div>
                            <span>{data.event}</span>
                        </div>
                        )}
                      </div>
                    </div>
                </div>
                <div className="alumini">
                <h2 className="title">Our Alumini</h2>
                   <div className="alumini_section1">
                        <div className="alumini_sec1">
                     <Carousel cols={1} rows={1} gap={5} loop >
                     {alumini.map(data=>
                     <Carousel.Item>
                       <div className="al_card">
                            <div className="al_img">
                                <div className="al_image">
                                 <img src={data.image} alt=""/>
                                </div>                        
                            </div>
                            <div className="al_about">
                                <center><h2>{data.name}</h2></center>
                                <center><p>{data.designation}</p></center>
                            </div>
                       </div>
                       </Carousel.Item>
                       )}
                       </Carousel>
                       </div>
                       <div className="alumini_sec1">
                     <Carousel cols={1} rows={1} gap={1} loop >
                     {fresher.map(data=>
                     <Carousel.Item>
                       <div className="al_card">
                            <div className="al_img">
                                <div className="al_image">
                                 <img src={data.image} alt=""/>
                                </div>                        
                            </div>
                            <div className="al_about">
                                <center><h2>{data.name}</h2></center>
                                <center><p>{data.designation}</p></center>
                            </div>
                       </div>
                       </Carousel.Item>
                       )}
                       </Carousel>
                       </div>
                    </div>
                    
                </div>
            </div>

            <div className="gallery">
              <center><h1>Gallery</h1></center><br></br><br></br>
              <div className="frame">
             <Carousel cols={3} rows={2} gap={10} loop >
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
            <div className="footer_end">
               <br></br><center><img className="end" src={logo} alt="" /></center>
               <div className="end_credits">
                <ul>
               <li>Privacy Policy</li>
               <li>Terms And Conditions</li>
               <li>Contact us</li>
               <li>Email us</li>
               </ul>
               <div className="svgs">
               <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="33" height="35" viewBox="0 0 50 50" >    <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path></svg>
               <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 64 64" ><path d="M 31.820312 12 C 13.439312 12 12 13.439312 12 31.820312 L 12 32.179688 C 12 50.560688 13.439312 52 31.820312 52 L 32.179688 52 C 50.560688 52 52 50.560688 52 32.179688 L 52 32 C 52 13.452 50.548 12 32 12 L 31.820312 12 z M 28 16 L 36 16 C 47.129 16 48 16.871 48 28 L 48 36 C 48 47.129 47.129 48 36 48 L 28 48 C 16.871 48 16 47.129 16 36 L 16 28 C 16 16.871 16.871 16 28 16 z M 41.994141 20 C 40.889141 20.003 39.997 20.900859 40 22.005859 C 40.003 23.110859 40.900859 24.003 42.005859 24 C 43.110859 23.997 44.003 23.099141 44 21.994141 C 43.997 20.889141 43.099141 19.997 41.994141 20 z M 31.976562 22 C 26.454563 22.013 21.987 26.501437 22 32.023438 C 22.013 37.545437 26.501437 42.013 32.023438 42 C 37.545437 41.987 42.013 37.498562 42 31.976562 C 41.987 26.454563 37.498562 21.987 31.976562 22 z M 31.986328 26 C 35.299328 25.992 37.992 28.673328 38 31.986328 C 38.007 35.299328 35.326672 37.992 32.013672 38 C 28.700672 38.008 26.008 35.327672 26 32.013672 C 25.992 28.700672 28.673328 26.008 31.986328 26 z"></path></svg>
               <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 30 30" >    <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z"></path></svg>
               <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"width="35" height="35" viewBox="0 0 72 72"><path d="M61.115,18.856C63.666,21.503,64,25.709,64,36s-0.334,14.497-2.885,17.144C58.563,55.791,55.906,56,36,56	s-22.563-0.209-25.115-2.856C8.334,50.497,8,46.291,8,36s0.334-14.497,2.885-17.144S16.094,16,36,16S58.563,16.209,61.115,18.856z M31.464,44.476l13.603-8.044l-13.603-7.918V44.476z"></path></svg>
               </div>
               </div>
              <div className="branding">
              <div className="brands" id="brands">
               {Brands.map(data =>
                <div className="brand">
                 <img src={data} alt="" />
                 </div>
               )}
               </div>
              </div>
               <footer>
                  <center><p>Copyright © 2023 APRDC Nagarjuna Sagar - All Rights Reserved.</p></center>
               </footer>
            </div>
            </div>
        </>
    );
}

export default Home;