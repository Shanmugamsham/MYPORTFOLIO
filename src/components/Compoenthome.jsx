import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Compoenthome = () => {
  const [img,setimage]=useState("https://res.cloudinary.com/ddjjx7t57/image/upload/v1715051885/Sham_Resume_shvige.png")

  function dowloading() {
    fetch(img).then((res)=>res.blob()).then((blobs)=>{

      const link =document.createElement("a")
      link.href=URL.createObjectURL(blobs)
      link.download="shamresume.png"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    })
  }


    return (
        <div className='homebg'>

  <nav className="navbar navbar-expand-lg navbar-dark navbarstyle">
  <div className="container-fluid">
    <a className="navbar-brand" id='namebar' > <span className='spanelement'>|</span>Shanmugasundaram<span className='spanelement'>|</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse  " id="navbarNav">
      <div className='navbarsize'>
      <ul className="navbar-nav">
        <li className="nav-item m-2">
          <Link className="nav-link active" aria-current="page" to={"/"}><span className='spanelement'>|</span>Start <span className='spanelement'>|</span></Link>
        </li>
        <li className="nav-item  m-2">
        <Link className="nav-link"to={"/project"}> <span className='spanelement'>|</span> Project<span className='spanelement'>|</span></Link>
        </li>
        <li className="nav-item  m-2">
        <Link className="nav-link"to={"/certificate"}> <span className='spanelement'>|</span> Certificates<span className='spanelement'>|</span></Link>
        </li>
      
        <li className="nav-item  m-2">
        <Link className="nav-link"to={"/about"}><span className='spanelement'>|</span>About<span className='spanelement'>|</span></Link>
        </li>
        <li className="nav-item  m-2">
        <Link className="nav-link" to={"/contect"}><span className='spanelement'>|</span>Contect<span className='spanelement'>|</span></Link>
        </li>
      </ul>
      </div>
    </div>
  </div>
</nav> 

<div className='container'>
<div className='row'>
<div className='col-12 col-lg-6'>
    <div className='imagesize1'>

 <img src='https://res.cloudinary.com/ddjjx7t57/image/upload/v1714708626/WhatsApp_Image_2023-09-16_at_14.46.32-removebg-preview_1_xfhp1d.png' className='imagesize'/>
 </div>
</div>
<div className=' infodvi col-lg-6'>
  <h5>Hello,I'm</h5>
  <h1>Shanmugasundaram</h1>
  <h3>Full stack Developer</h3>
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
        </div>
    );
};

export default Compoenthome;