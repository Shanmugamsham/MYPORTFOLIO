import React from 'react';
import { Link } from 'react-router-dom';
const Componentprojects = () => {

 
 
    return (
        
            <div className='homebg2'>
         <nav className="navbar navbar-expand-lg navbar-dark navbarstyle fixed-top">
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
    <Link className="nav-link" to={"/contect"}><span className='spanelement'>|</span>Contact<span className='spanelement'>|</span></Link>
    </li>
  </ul>
  </div>
</div>
</div>
</nav> 
<div className='container'>
<div className='row'>
<div className='col-12'>
  <h4 className='subheading'> Browse My Recent</h4>
  <h1 className='mainheading'>Projects</h1>
</div>
<div className='col-12 col-lg-5 cardtask'>
<img src='https://res.cloudinary.com/ddjjx7t57/image/upload/v1714725490/Screenshot_2024-05-03_153041_uvj27m.png' className='imagesizefor'/>
<h4 className='taskheading'>TASK MANAGEMENT APPLICATION</h4>
<button className='githubbtn' id='gitbtn'> <a href='	https://github.com/Shanmugamsham/taskapplication_frontend.git' className='aaa'>Github</a></button>
<button className='demobtn'> <a href='https://taskmanagement-app-1.netlify.app' target='_blank' className='aaa'>Live Demo</a></button>
</div>
<div className='col-12 col-lg-5 cardtask'>
<img src='https://res.cloudinary.com/ddjjx7t57/image/upload/v1714725509/weather_sxc6dm.png' className='imagesizefor'/>

<h4 className='taskheading'>WEATHER APPLICATION</h4>
<button className='githubbtn'  id='idelemts'> <a href='https://github.com/Shanmugamsham/DAY-20-2.git' className='aaa'> Github</a></button>
<button  className='demobtn'> <a href='https://weather-app-1a4d5e.netlify.app/' target='_blank' className='aaa'> Live Demo</a></button>

</div>
<div className='col-12 col-lg-5 cardtask'>
<img src='https://res.cloudinary.com/ddjjx7t57/image/upload/v1714725508/currency_app_xuy7dj.png' className='imagesizefor'/>
<h4 className='taskheading'>CURRENCY CONVER APPLICATION</h4>
<button className='githubbtn'> <a href=' https://github.com/Shanmugamsham/DAY-20-3.git' className='aaa'> Github</a></button>
<button  className='demobtn'> <a href='https://currency-convert-0e42c9.netlify.app/' target='_blank' className='aaa'>Live Demo</a></button>
</div>
<div className='col-12 col-lg-5 cardtask'>
<img src='qr2.png' className='imagesizefor'/>
<h4 className='taskheading'>QR GENERATOR APPLICATION</h4>
<button className='githubbtn'> <a href=' https://github.com/Shanmugamsham/QRAPP.git' className='aaa'> Github</a></button>
<button  className='demobtn'> <a href='https://qrgenerator-app-1.netlify.app/' target='_blank' className='aaa'>Live Demo</a></button>
</div>
</div>
    </div>
    </div>
    );
};

export default Componentprojects;