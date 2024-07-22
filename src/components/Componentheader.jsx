import React from 'react';
import{ Link} from 'react-router-dom';
const Componentheader = () => {
    return (
        <div>
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
        </div>
    );
};

export default Componentheader;