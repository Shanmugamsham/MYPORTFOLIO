import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Compoenthome from './Compoenthome';
import Componentprojects from './Componentprojects';
import Componentabout from './Componentabout';
import Componentcontect from './Componentcontect';
const Componentnav = () => {
    return (
        <div>
          <BrowserRouter>
          <Routes>
            <Route path='/' element={<Compoenthome/>}/>
            <Route path='/project' element={<Componentprojects/>}/>
            <Route path='/about' element={<Componentabout/>}/>
            <Route path='/contect' element={<Componentcontect/>}/>
          </Routes>
          
          </BrowserRouter>
        </div>
    );
};

export default Componentnav;