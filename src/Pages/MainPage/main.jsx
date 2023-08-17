import React from 'react';
import { Container } from './styled';
import Typed from 'typed.js';
const Main = () => {
    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Frontend developer', 'Junior Stage', 'Master of UI'],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true,
        });

    }, []);
    return (
        <Container>
            <div className='Body'>
                <div className="content">
                    <h1>Hi , I`m Ibragimov Hikmatullo</h1>
                    <h1 className='h1'><span ref={el}></span></h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nam pariatur quaerat eligendi eum cupiditate recusandae
                        reprehenderit exercitationem vitae. Laboriosam,
                        blanditiis.</p>
                    <div className='Btns'>
                        <button>Hire me</button>
                        <button>Let`s Talk</button>
                    </div>
                </div>
                <div className='Icons'>
                    <button><a href="https://t.me/NauseousI" target='_blank'><i class="bi bi-telegram"></i></a></button>
                    <button><i class="bi bi-instagram"></i></button>
                    <button><i class="bi bi-github"></i></button>
                </div>
            </div>
        </Container>
    );
}

export default Main;
