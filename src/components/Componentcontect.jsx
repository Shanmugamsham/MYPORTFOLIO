import React from 'react';
import { Link } from 'react-router-dom';
const Componentcontect = () => {

    

    return (
        <div className='homebg4 container-fluid'>
        <div className='row'>
            <div className='col-12'>
         <nav className="navbar navbar-expand-lg navbar-dark navbarstyle  fixed-top">
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

</div>


<div className='col-12 card3'>
<h5 className='aboutmesubheading1'>Get in Touch</h5>
<h1 className='aboutmeheading1'>Contact Me</h1>
<a href='https://linkedin.com/in/shan369'  target='_blank' className=' sizefont2'><i className="fa-brands fa-linkedin"> </i></a>
<a href='https://github.com/Shanmugamsham'  target='_blank' className=' sizefont2'><i className="fa-brands fa-github "></i></a>
<a href='https://abdeshanmugam@gmail.com'  target='_blank' className=' sizefont2'><i class="fa-regular fa-envelope"></i></a>
<a href='https://www.instagram.com/mr.shan_3?igsh=ajMxenE1eHZoNGI1'  target='_blank' className=' sizefont2'><i class="fa-brands fa-instagram"></i></a>
</div>

</div>
    </div>
    );
};

export default Componentcontect;