import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Compoenthome from './Compoenthome';
import Componentprojects from './Componentprojects';
import Componentabout from './Componentabout';
import Componentcontect from './Componentcontect';
import Componentcertification from './Componentcertification';
import Componentheader from './Componentheader';
const Componentnav = () => {
    return (
        <div>
          <BrowserRouter>
          <Componentheader/>
          <Routes>
            <Route path='/' element={<Compoenthome/>}/>
            <Route path='/project' element={<Componentprojects/>}/>
            <Route path='/certificate' element={<Componentcertification/>}/>
            <Route path='/about' element={<Componentabout/>}/>
            <Route path='/contect' element={<Componentcontect/>}/>
          </Routes>
          
          </BrowserRouter>
        </div>
    );
};

export default Componentnav;