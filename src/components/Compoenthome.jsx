import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Componentprojects from './Componentprojects';
import Componentprojects2 from '../components2/Componentprojects2';
import Componentcertification2 from '../components2/Componentcertification2';
import Componentabout2 from '../components2/Componentabout2';
import Componentcontect2 from '../components2/Componentcontect2';
const Compoenthome = () => {
  const [img,setimage]=useState("shan.pdf")

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
  setInterval(() => {
    console.log("123");
  },5000);



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
  <h5>Hello,I'm</h5>
  <h1>SHANMUGA SUNDARAM</h1>
  <h3>MERN STACK DEVELOPER</h3>
  <div className='buttondiv'>
  <button className='demobtns' onClick={dowloading}> Download CV</button>
  <button className='demobtns'> <Link to={"/contect"} className='demobtnslink' >Contect Info</Link></button>
  </div>
  <div className='linkdiv'>
  <a href='https://linkedin.com/in/shan369'  target='_blank' className=' sizefont1'><i className="fa-brands fa-linkedin"></i></a>
  <a href='https://github.com/Shanmugamsham'  target='_blank' className=' sizefont'><i className="fa-brands fa-github "></i></a>
  
  
    
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