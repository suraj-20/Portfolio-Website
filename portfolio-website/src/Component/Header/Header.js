import React, { useState } from 'react';
import '../Header/Header.css'

function Header() {

    const [ showLinks, setShowLinks ] = useState(false);

    return (
        <>
            <div className='header'>
                <a href='#' className='name'><i class="fa-brands fa-react"></i>Suraj</a>

                <div className={showLinks ? 'navbar mobile-navbar' : 'navbar'}>
                    <ul>
                        <li>
                            <a className='active' href='#home' >Home</a>
                        </li>
                        <li>
                            <a href='#about'>About</a>
                        </li>
                        <li>
                            <a href='#skills'>Skills</a>
                        </li>
                        <li>
                            <a href='#education'>Education</a>
                        </li>
                        <li>
                            <a href='#projects'>Projects</a>
                        </li>
                        <li>
                            <a href='#contact'>Contact</a>
                        </li>
                    </ul>

                    <div className='bars'>
                        <i class="fa-solid fa-bars" onClick={() => setShowLinks(!showLinks)}></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;