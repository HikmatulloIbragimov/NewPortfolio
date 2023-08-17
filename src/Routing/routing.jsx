import React from 'react';
import {Routes , Route} from 'react-router-dom'
import Main from '../Pages/MainPage/main';
import Portfolio from '../Pages/Portfolio/portfolio';
import Services from '../Pages/Services/services';
const Routing = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path='/portfolio' element={<Portfolio/>}/>
                <Route path='/services' element={<Services/>}/>
            </Routes>
        </div>
    );
}

export default Routing;
