import React from "react";
import './skills.css';

function Skills() {

    return (
        <>
            <div className="skills" id="skills">
                <h1><i class="fa-solid fa-laptop-code"></i> Skills & <span>Abilites </span></h1>

                <div className="main-container">
                    <div className="item-container">
                        <div className="img">
                            <div className="img-1"></div>
                        </div>
                        <span>React JS</span>
                    </div>
                    <div className="item-container">
                        <div className="img">
                            <div className="img-2"></div>
                        </div>
                        <span>HTML 5</span>
                    </div>
                    <div className="item-container">
                        <div className="img">
                            <div className="img-3"></div>
                        </div>
                        <span>CSS 3</span>
                    </div>
                    <div className="item-container">
                        <div className="img">
                            <div className="img-4"></div>
                        </div>
                        <span>JavaScript</span>
                    </div>
                    <div className="item-container">
                        <div className="img">
                            <div className="img-5"></div>
                        </div>
                        <span>BootStrap</span>
                    </div>
                    <div className="item-container">
                        <div className="img">
                            <div className="img-6"></div>
                        </div>
                        <span>GitHub</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills;