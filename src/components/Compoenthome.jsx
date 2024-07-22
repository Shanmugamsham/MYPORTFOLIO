import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Componentprojects from './Componentprojects';
import Componentprojects2 from '../components2/Componentprojects2';
import Componentcertification2 from '../components2/Componentcertification2';
import Componentabout2 from '../components2/Componentabout2';
import Componentcontect2 from '../components2/Componentcontect2';
const Compoenthome = () => {
  const [img,setimage]=useState("shan.pdf")
  const [btndata,setdata]=useState("none")
  const [btndata2,setdata2]=useState("none")
  const [btndata3,setdata3]=useState("none")
  const [btndata4,setdata4]=useState("none")

  function dowloading() {
    fetch(img).then((res)=>res.blob()).then((blobs)=>{

      const link =document.createElement("a")
      link.href=URL.createObjectURL(blobs)
      link.download="sham.pdf"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    })
  }
useEffect(()=>{
  let MERN=document.getElementById("mern")
  let FRONTEND=document.getElementById("fronend")
  let REACT=document.getElementById("react")
  let FULLSTACK=document.getElementById("fullstack")
  setTimeout(() => {
    let first=document.getElementById("hello")
    first.innerText="Hello,I'm"
  },500);

  setTimeout(() => {
    let first=document.getElementById("firstname")
    first.innerText="S"
  },1000);
  setTimeout(() => {
    let first=document.getElementById("sname")
    first.innerText="H"
  },1100);
  setTimeout(() => {
    let first=document.getElementById("tname")
    first.innerText="A"
  },1200);
  setTimeout(() => {
    let first=document.getElementById("foname")
    first.innerText="N"
  },1300);
  setTimeout(() => {
    let first=document.getElementById("fivename")
    first.innerText="M"
  },1400);
  setTimeout(() => {
    let first=document.getElementById("sixname")
    first.innerText="U"
  },1500);
  setTimeout(() => {
    let first=document.getElementById("sevenname")
    first.innerText="G"
  },1600);
  setTimeout(() => {
    let first=document.getElementById("eightname")
    first.innerText="A"
  },1700);
  setTimeout(() => {
    let first=document.getElementById("ninename")
    first.innerText="S"
  },1800);
  setTimeout(() => {
    let first=document.getElementById("tenname")
    first.innerText="U"
  },1900);
  setTimeout(() => {
    let first=document.getElementById("lvname")
    first.innerText="D"
  },2000);
  setTimeout(() => {
    let first=document.getElementById("twname")
    first.innerText="A"
  },2100);
  setTimeout(() => {
    let first=document.getElementById("thirname")
    first.innerText="R"
  },2200);
  setTimeout(() => {
    let first=document.getElementById("fivetname")
    first.innerText="A"
  },2300);
  setTimeout(() => {
    let first=document.getElementById("sixtname")
    first.innerText="M"
  },2400);
  setTimeout(() => {
    FULLSTACK.innerText="FULL STACK DEVELOPER"
  },3000);
  setTimeout(() => {
    FULLSTACK.innerText=""
    FRONTEND.innerText="FRONEND DEVELOPER"
  },4500);
  setTimeout(() => {
    FRONTEND.innerText=""
    REACT.innerText="REACT DEVELOPER"
  },6000);
  setTimeout(() => {
   REACT.innerText=""
   MERN.innerText="MERN STACK DEVELOPER "
  },7500);
  setTimeout(() => {
   setdata("inline")
   },8000);
   setTimeout(() => {
    setdata2("inline")
   },8300);
   setTimeout(() => {
    setdata3("inline")
   },9000);
   setTimeout(() => {
    setdata4("inline")
   },9500);
},[])




    return (
        <div className='homebg'>

  

<div className='container'>
<div className='row'>
<div className='col-12 col-lg-6'>
    <div className='imagesize1'>

 <img src='https://res.cloudinary.com/ddjjx7t57/image/upload/v1714708626/WhatsApp_Image_2023-09-16_at_14.46.32-removebg-preview_1_xfhp1d.png' className='imagesize'/>
 </div>
</div>
<div className=' infodvi col-lg-6'>
  <h5>
  <span id='hello'></span>
 
   </h5>
  <h1><span id='firstname'></span>
  <span id='sname'></span>
  <span id='tname'></span>
  <span id='foname'></span>
  <span id='fivename'></span>
  <span id='sixname'></span>
  <span id='sevenname'></span>
  <span id='eightname'></span>
  <span id='ninename'></span>
  <span id='tenname'></span>
  <span id='lvname'></span>
  <span id='twname'></span>
  <span id='thirname'></span>
  <span id='fourname'></span>
  <span id='fivetname'></span>
  <span id='sixtname'></span>
  </h1>
  <h3>
    <span id='fullstack'></span> 
  <span id='fronend'></span>
  <span id='react'></span>
  <span id='mern'></span>
  
  
  </h3>
  <div className='buttondiv'>
  <button className={`demobtns d-${btndata}`} onClick={dowloading}> Download CV</button>
  <button className={`demobtns d-${btndata2}`}> <Link to={"/contect"} className='demobtnslink' >Contect Info</Link></button>
  </div>
  <div className='linkdiv'>
  <a href='https://linkedin.com/in/shan369'  target='_blank' className={` sizefont1 d-${btndata3}` }><i className="fa-brands fa-linkedin"></i></a>
  <a href='https://github.com/Shanmugamsham'  target='_blank' className={` sizefont1 d-${btndata4}` }><i className="fa-brands fa-github "></i></a>
  
  
    
  </div>

  </div>

</div>


</div>
<Componentprojects2/>
<Componentcertification2/>
<Componentabout2/>
<Componentcontect2/>
        </div>
    );
};

export default Compoenthome;