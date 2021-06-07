import React, { Component } from 'react'
import {  Icon } from 'semantic-ui-react'
import './foot.css'

class Footer extends Component {
    render() {
        return (
            <div>
                <div className='main-footer'>
                    <h2>Web Developer in React</h2>
                    <p>A computer science majored individual with practical hands-on-approach in HTML,&nbsp; CSS ,&nbsp; Javascript and &nbsp;React taught in Web Develoment technologies.
              &nbsp;I'm willing to learn and develop new skills. &nbsp;My passion is all about creating real elegant looking websites with reaponsive screen.</p>
                    <h3><Icon name="mail" /> deepak257754@gmail.com</h3>
                    <h3><Icon name="call" /> 9944822475 - 9894329382</h3>
                    <a target="_blank" rel='noreferrer' href="https://github.com/Deepakkumar1703"><Icon name="github" size="large"  color="blue"/></a>
                    <a  target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/deepak-kumar-j-539a2619b/"><Icon name="linkedin" size="large" color="blue" /></a>
                    <div className="copyright">
                        <h4>&copy;Copyright@2021</h4>
                        <h4>Designed by Deepak kumar. J</h4>
                    </div>
                </div>

            </div>
        )
    }
}

export default Footer
