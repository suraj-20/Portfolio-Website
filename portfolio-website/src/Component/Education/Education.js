import React from "react";
import './Education.css';

function Education() {

    return (
        <>
        <div className="education" id="education">
            <h1><i class="fa-solid fa-graduation-cap"></i> My <span>Education</span></h1>

            <div className="main-container">
                <div className="cllg-image"></div>

                <div className="details">
                    <h2>Bachelor of Computer Application</h2>
                    <h4>Starex University</h4>
                    <h3>2021 - 2024 | Pursuing</h3>
                </div>
            </div>
            <div className="main-container">
                <div className="school-image"></div>

                <div className="details">
                    <h2>Commerce with Maths</h2>
                    <h4>Govt. Model Sr. Sec. School Sector-4/7 | BSEH</h4>
                    <h3>2019 - 2021 | Completed</h3>
                </div>
            </div>
        </div>
        </>
    )
}

export default Education;