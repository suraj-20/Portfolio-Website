import React from "react";
import './Project.css';

function Project() {

    return (
        <>
            <section className="projects" id="projects">
                <h1><i class="fa-solid fa-tarp"></i> Projects</h1>

                <div className="projects-container">
                    <div className="project-container">
                        <a href="https://github.com/suraj-20/Zomato_Clone" target='_blank'>
                            <div className="project-1">
                                <div className="project-name">Zomato_Clone</div>
                            </div>
                        </a>
                    </div>
                    <div className="project-container">
                        <a href="https://github.com/suraj-20/News-Website" target='_blank'>
                            <div className="project-2">
                                <div className="project-name">News_Website</div>
                            </div>
                        </a>
                    </div>
                    <div className="project-container">
                        <a href="https://github.com/suraj-20/Digital-Clock" target='_blank'>
                            <div className="project-3">
                                <div className="project-name">Digital_Clock</div>
                            </div>
                        </a>
                    </div>
                    <div className="project-container">
                        <a href="https://github.com/suraj-20/Quiz_Website" target='_blank'>
                            <div className="project-4">
                                <div className="project-name">Quiz_Website</div>
                            </div>
                        </a>
                    </div>
                    <div className="project-container">
                        <a href="https://github.com/suraj-20/Todo_App" target='_blank'>
                            <div className="project-5">
                                <div className="project-name">ToDo_Website</div>
                            </div>
                        </a>
                    </div>
                    <div className="project-container">
                        <a href="https://github.com/suraj-20/News-Website" target='_blank'>
                            <div className="project-6">
                                <div className="project-name">Notes_Website</div>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Project;