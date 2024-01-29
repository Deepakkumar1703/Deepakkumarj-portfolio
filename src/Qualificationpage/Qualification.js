import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react';
import Footer from '../Footer/Footer'
import Navbar from '../Nav/Navbar'
import './qualification.css';

export class Qualification extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="main-accordian">
                    <div className="accordion" id="accordionExample">
                    <h1>Qualification details</h1>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    <Icon name="suitcase" />EXPERIENCE</button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <strong>2+ years experienced in Project Management PMO and client Onboarding.</strong><br /><br />
                                    <p><b>Company Name: Infosys</b></p>
                                    <p><b>Degination:</b>&nbsp;&nbsp; Senior Systems Associate. Project Management PMO, Data Integration, ETL, SQL.</p>
                                    <p>09/12/2021 - Currently Working</p>
                                </div>
                            </div>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <strong>1 year experience in E-Publishing sector.</strong><br /><br />
                                    <p><b>Company Name: TNQ Technologies</b></p>
                                    <p><b>Degination:</b>&nbsp;&nbsp; Associate 3B2 Operator. XML Editor and Articles pagination editor in E-Publishing sector.</p>
                                    <p>17/02/2020 - 20/03/2021</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    <Icon name="graduation cap" />GRADUATION
      </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <strong>Degree: &nbsp;&nbsp;Bachelor of Science Computer Technology</strong> <br /><br />
                                    <p><b>College:</b>&nbsp;&nbsp;Sri Krishna Adithya College of Arts and Science</p>
                                    <label>CGPA</label>&nbsp;&nbsp;<progress className="Qprogress" value="67" min="0" max="100" ></progress>&nbsp;&nbsp;<label>67%</label><br /><br />
                                    <p><b>Year of Passing:</b>&nbsp;&nbsp;2019</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    <Icon name="user" /> HIGHER SECONDARY
      </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <strong>HSC</strong> <br /><br />
                                    <p><b>School:</b>&nbsp;&nbsp;CSI Boys Higher Secondary School</p>
                                    <label>CGPA</label>&nbsp;&nbsp;<progress className="Qprogress" value="61" min="0" max="100" ></progress>&nbsp;&nbsp;<label>61%</label><br /><br />
                                    <p><b>Year of Passing:</b>&nbsp;&nbsp;2016</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingfour">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
                                    <Icon name="user" />SECONDARY SCHOOL LEAVING CERTIFICATE
      </button>
                            </h2>
                            <div id="collapsefour" className="accordion-collapse collapse" aria-labelledby="headingfour" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <strong>SSLC</strong><br /><br />
                                    <p><b>School:</b>&nbsp;&nbsp;CSI Boys Higher Secondary School</p>
                                    <label>CGPA</label>&nbsp;&nbsp;<progress className="Qprogress" value="78.4" min="0" max="100" ></progress>&nbsp;&nbsp;<label>78.4%</label><br /><br />
                                    <p><b>Year of Passing:</b>&nbsp;&nbsp;2014</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="project-main">
                        <h1>My Projects</h1><hr />
                        <img className="project-img" src="https://images.unsplash.com/photo-1572177812156-58036aae439c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="no"></img>
                        <div className="project-cardMain">
                            <div className="part1">
                                <div className="project-card1">
                                    <h3>Current Covid-19 Status in india</h3><hr />
                                    <img className="pro-img" src="covid-19.png" alt="No" /><br /><br />
                                    <p><strong>Decription:</strong>&nbsp; Covid-19 current status in india. Like Active case , death case, Recovered case in covid-19. Displaying state wise covid information.</p>
                                    <p><strong>Developed with React</strong></p>
                                    <button className="project-btn"><a target="_blank" rel='noreferrer' href="https://covid19info-india-dpk.netlify.app/" >View</a></button>
                                </div>
                                <div className="project-card2">
                                    <h3>Tables for Children's</h3><hr />
                                    <img className="pro-img" src="tables.png" alt="No"  /><br /><br />
                                    <p><strong>Decription:</strong>&nbsp; Dynamically Get any numbers in Multiplication Tables </p>
                                    <p><strong>Developed with React</strong></p>
                                    <button className="project-btn"><a target="_blank"  rel='noreferrer'href="https://deepak4-tables.netlify.app/" >View</a></button>
                                </div>

                            </div>
                            <div className="part2">
                                <div className="project-card3">
                                    <h3>EMI Calculator</h3><hr />
                                    <img className="pro-img" src="emi.png" alt="No"  /><br /><br />
                                    <p><strong>Decription:</strong>&nbsp; Calculating EMI interest , Eligibility of Amount, Duration time of months, Use for monthly payments based on Eligiblity and interest.</p>
                                    <p><strong>Developed with React</strong></p>
                                    <button className="project-btn"><a target="_blank" rel='noreferrer' href="https://deepak-emicalculator.netlify.app/" >View</a></button>
                                </div>

                                <div className="project-card4">
                                    <h3>My Acedamic Project</h3><hr />
                                    <h3>ICT Department Android app</h3>
                                    <img className="pro-img" src="ict.jpg" alt="No"  /><br /><br />
                                    <p><strong>Decription:</strong>&nbsp; Department students, staffs details. Department Event Management updates and Students Achievements to be displayed, all infomations available to take pdf printouts. </p>
                                    <p><b>Developed:</b> &nbsp;Frontend &nbsp;<strong>ASP.net</strong>&nbsp; and &nbsp;Backend &nbsp;<strong>MYSQL</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div><Footer /></div>
            </div>
        )
    }
}

export default Qualification

