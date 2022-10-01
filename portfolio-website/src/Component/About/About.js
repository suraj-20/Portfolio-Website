import React from "react";
import './About.css';
import my_image from '../../Assets/Snapchat-1634323230.jpg';

function About() {

    return (
        <>
            <section className="about" id="about">
                <h1><i class="fa-solid fa-user"></i> About <span>Me</span></h1>

                <div className="about-container">
                    <div className="my-image">
                        <img src={my_image} />
                    </div>

                    <div className="bio">
                        <h3>I'm Suraj</h3>
                        <span>Web Developer</span>
                        <p>I am a frontend developer based in Gurgaon, India. I am persuing my undergraduation in information technology from Starex University. I am very passionate about improving my coding skills & developing applications & websites. I build WebApps and Websites. Working for myself to improve my skills. Love to build Full-Stack clones.</p>

                        <div className="contect-details">
                            <p><span>Age : </span> 19</p>
                            <p><span>Phone : </span> +91 828-714-6841 </p>
                            <p><span>Email : </span> kumarsuraj54057@gmail.com</p>
                            <p><span>Place : </span> Gurgaon, Haryana - 122001</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;