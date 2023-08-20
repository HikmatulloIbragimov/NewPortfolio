import React from 'react';
import { Container } from './styles';
import { NavLink } from 'react-router-dom'


const Main = () => {
    return (
        <Container>
            <div className='Body'>
                <div className="cardBar">
                    <div className="img">
                        <img src={require('../../Components/images/html.png')} alt="" />
                    </div>
                    <div className="content">
                        JavaScript is a client-side programming language
                         used to create dynamic interactions in app,
                          game and web development. Commonly represented as JS,
                           this language is considered one of the core 
                           technologies of the web in conjunction with HTML and CSS.
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Main;
