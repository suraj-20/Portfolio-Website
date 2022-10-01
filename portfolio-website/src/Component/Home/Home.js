import React from "react";
import './Home.css'

function Home() {
    return (
        <>
            <section className="home" id="home">
                <div className="bg-image"></div>

                <div className="content">
                    <h2>Hi There,
                        <br />
                        I'm <span>Suraj</span>
                    </h2>
                    <p>I am a <span>Web Developer.</span></p>
                    <a href="#about" className="about-btn"><span>About Me</span> <i class="fa-solid fa-circle-arrow-down"></i></a>
                </div>

                <div className="social-icons">
                    <div className="icons">
                        <ul className="linkedin-icon">
                            <li><a href="https://www.linkedin.com/in/suraj-47333521b/" target="_blank" className="linkedin"><i class="fa-brands fa-linkedin-in"></i></a></li>
                        </ul>
                        <ul className="github-icon">
                            <li><a href="https://github.com/suraj-20" target="_blank" className="github"><i class="fa-brands fa-github"></i></a></li>
                        </ul>
                        <ul className="twitter-icon">
                            <li><a href="" className="twitter"><i class="fa-brands fa-twitter"></i></a></li>
                        </ul>
                        <ul className="insta-icon">
                            <li><a href="https://www.instagram.com/sura_j1_5/" target="_blank" className="instagram"><i class="fa-brands fa-instagram"></i></a></li>
                        </ul>
                        <ul className="facebook-icon">
                            <li><a href="" className="facebook"><i class="fa-brands fa-facebook"></i></a></li>
                        </ul>
                    </div>
                </div>

                <div className="hero" >
                </div>
            </section>
        </>
    )
}

export default Home;