import React from 'react';
import '../Header/Header.css'
import Home from '../Home/Home';

function Header() {

    return (
        <>
            <div className='header'>
                <a href='#' className='name'><i class="fa-brands fa-react"></i>Suraj</a>

                <div className='navbar'>
                    <ul>
                        <li>
                            <a href='#home' >Home</a>
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
                </div>
            </div>
            <Home />
        </>
    )
}

export default Header;