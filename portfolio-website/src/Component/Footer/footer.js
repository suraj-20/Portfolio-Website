import React from "react";
import './footer.css';

function Footer() {

    return (
        <>
            <footer>
                <div class="footer-container">
                    <div class="footer-content">
                        <div class="sub-content">
                            <h1>Suraj Portfolio</h1>
                            <p>Thank you for visiting my personal portfolio website. Connect with me over socials.
                            </p>
                        </div>
                        <div class="sub-content">
                            <h1>Quick links</h1>
                            <div class="links">
                                <ul>
                                    <li><a href="#home"><i class="fa-solid fa-circle-chevron-right"></i> Home</a></li>
                                    <li><a href="#about"><i class="fa-solid fa-circle-chevron-right"></i> About</a></li>
                                    <li><a href="#skills"><i class="fa-solid fa-circle-chevron-right"></i> Skills</a></li>
                                    <li><a href="#education"><i class="fa-solid fa-circle-chevron-right"></i> Education</a></li>
                                    <li><a href="#project"><i class="fa-solid fa-circle-chevron-right"></i> Projects</a></li>
                                    <li><a href="#contact"><i class="fa-solid fa-circle-chevron-right"></i> Contact</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="sub-content">
                            <h1>Contact Info</h1>
                            <p><i class="fa-solid fa-phone"></i> +91 828-714-6841</p>
                            <p><i class="fa-solid fa-envelope"></i> kumarsuraj54057@gmail.com</p>
                            <p><i class="fa-solid fa-map-location-dot"></i> Gurgaon, Haryana-122001</p>
                        </div>

                    </div>
                </div>
                <div class="line"></div>
                <h1 class="credit">Designed with <i class="fa fa-heart pulse"></i> by <a
                    href="https://www.linkedin.com/in/suraj-47333521b/"> suraj</a></h1>
            </footer>
        </>
    )
}

export default Footer;