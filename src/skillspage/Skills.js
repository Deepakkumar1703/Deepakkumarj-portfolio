import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Nav/Navbar'
import './skills.css'

export class Skills extends Component {

    render() {
        
        return (
            <div>
                <Navbar />
                <div className="main-skills">
                    <h1>Web Technologies</h1>
                    <br />
                    <div className="html">
                        <img width="100" height="100" src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png' alt="no" />
                        <progress value="80" max="100" />&nbsp;<label>80%</label>
                    </div><br />
                    <div className="css">
                        <img width="80" height="90" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png" alt="no"/>
                        &nbsp;&nbsp;&nbsp;<progress value="70" max="100" />&nbsp;<label>70%</label>
                    </div><br />
                    <div className="js">
                        <img width="100" height="80" src="https://iconape.com/wp-content/files/ez/353342/svg/javascript-seeklogo.com.svg" alt="no" />
                        <progress value="55" max="100"  />&nbsp;<label>55%</label>
                    </div><br />
                    <div className="react-js">
                        <img width="100" height="100" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" alt="no" />
                        <progress value="60" max="100" />&nbsp;<label>60%</label>
                    </div>
                </div>
                <div><Footer /></div>
            </div>
        )
    }
}

export default Skills
