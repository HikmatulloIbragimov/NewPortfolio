import React from 'react';
import { Container } from './styles';
import {NavLink} from 'react-router-dom'

const Main = () => {
    return (
        <Container>
            <div className='Body'>
                <div className="content">
                    <h1>Hi I`m Ibragimov Hikmatullo</h1>
                    <h3>Frontend developer</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nam pariatur quaerat eligendi eum cupiditate recusandae
                        reprehenderit exercitationem vitae. Laboriosam,
                        blanditiis.</p>
                    <div>
                        <button>Hire me</button>
                        <button>Let`s Talk</button>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Main;
