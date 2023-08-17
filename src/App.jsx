import React from 'react';
import Navbar from './Components/navbar/navbar';
import Particles from './Components/Particels/particles'
import './main.css'
import Routing from './Routing/routing';
function App(props) {
    return (
        <div>
            <Particles/>
            <Navbar/>
            <Routing/>
        </div>
    );
}

export default App;