import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'
import Footer from '../Footer/Footer'
import Navbar from '../Nav/Navbar'
import './about.css'

class About extends Component {
    constructor() {
        super()
        this.state = {
            name: false,
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                name: !this.state.name,
            })
        }, 3000);
    }
    render() {
        const { name } = this.state;
        return (
            <div>
                <Navbar />
                <div className="Main-about">
                    <h1>About Myself</h1>
                    {name ?
                        <div>
                            <h2 className="about-namehead"> <Icon name="handshake outline" color="blue"/>&nbsp;I'm a Web Devloper in React </h2>
                        </div>
                        :
                        <div>
                            <h2 className="about-namehead"><Icon name="handshake outline" color="blue"/> &nbsp;I'm Deepak kumar J </h2>
                        </div>
                    }<br />
                    <p>A computer science majored individual with practical hands-on-approach in HTML, CSS , Javascript and React taught in Web Develoment technologies.
                    I'm willing to learn and develop new skills. My passion is all about creating real elegant looking websites with reaponsive screen. </p>
                    <h4><Icon name="hand point right outline" color="blue"/>Name: Deepak Kumar. J</h4>
                    <h4><Icon name="hand point right outline" color="blue" />Degree: Bachelor of Science Computer Technology</h4>
                    <h4><Icon name="hand point right outline" color="blue" />Technology: HTML,&nbsp; CSS, &nbsp;JavaScript, &nbsp;Bootstrap, &nbsp;JQuerry, &nbsp;React.JS</h4>
                    <h4><Icon name="hand point right outline" color="blue" />Date of Birth: 17/30/1999 </h4>
                    <h1>Activities</h1><hr />
                    <h4><Icon name="hand point right outline" color="blue" />My Paper Published in (IJCRCST) international Journals in Jan-2018  (A Study On Internet Things: A Furture Inovation)</h4>
                    <h4><Icon name="hand point right outline" color="blue" />I'm attended International workshop on "SMART CITIES: Sustainable Urban Development" in 2018</h4> 
                    <h4><Icon name="hand point right outline" color="blue" />Python Developing and mangoDB worshop in 2018</h4>
                    <h1>Hobbies</h1><hr />
                    <h4><Icon name="hand point right outline" color="blue" />Playing Cricket</h4>
                    <h4><Icon name="hand point right outline" color="blue" />Updating information about current mobile phones Technology</h4>
                    <h4><Icon name="hand point right outline" color="blue" />Hearing Motivational Music</h4>
                    <h4><Icon name="hand point right outline" color="blue"/>Photos, Musics Editing</h4>
                    <h1>Personal Info</h1><hr />
                    <h4><Icon name="hand point right outline" color="blue"/>Father's Name: Jaya Kumar. M</h4>
                    <h4><Icon name="hand point right outline" color="blue" />Father's Occupation: Daily Wages</h4>
                    <h4><Icon name="hand point right outline" color="blue" />Mother's Name: Nagalakshmi. J</h4>
                    <h4><Icon name="hand point right outline" color="blue" />Nationality: Indian</h4>
                    <h1>Language Known</h1><hr />
                    <h4><Icon name="hand point right outline" color="blue"/>Tamil</h4>
                    <h4><Icon name="hand point right outline" color="blue"/>English</h4>
                    <h4><Icon name="hand point right outline" color="blue"/>Kannada - Speak</h4>
                </div>
                <div><Footer /></div>
            </div>
        )
    }
}

export default About;
