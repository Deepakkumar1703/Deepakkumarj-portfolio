import React, { Component } from 'react'
import {  Icon } from 'semantic-ui-react'
import './hire.css'

class Hire extends Component {


    render() {
        const { close } = this.props;
        return (
            <div className="Hire">
                <div className="Main-hire">
                    <div className="welcome-card">
                        <h1>Welcome Sir/Ma'am</h1><hr />
                    </div>
                    <div className="hire-card">
                        <h1>React Developer</h1>
                        <p>My Skill is to design more interactive User interface (UI) and User experience (UX) Web Applications.</p>
                        <p>If you are searching for a reputable web developer with proven hands-on skills.
                then, you're in the right place. <br /><b>Get in touch to discuss your needs now!</b></p>
                        <p><Icon name="mail" color="blue" />deepak257754@gmail.com</p>
                        <p><Icon name="phone" color="blue" />9944822475 - 9894329382</p>
                        <button  className="okeybtn" onClick={close}>Okay</button>
                        
                    </div>
                </div>
            </div>
        )
    }
}
export default Hire;
