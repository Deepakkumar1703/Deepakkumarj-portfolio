import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'
import Footer from '../Footer/Footer'
import Navbar from '../Nav/Navbar'
import './contact.css'

export class Contact extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="main-contact">
                <h1>Contact details</h1>
                <h3><Icon name="phone" color="blue"/>Mobile Number: 9944822475</h3>
                <h3><Icon name="phone" color="blue" />Alternate Number: 9894329382</h3>
                <h3><Icon name="mail" color="blue" />Email: deepak257754@gmail.com</h3>
                <h3><Icon name="address book" color="blue" />Addrees: 105/133 kempatty colony, Palaiyen thottam, Coimbatore-641001</h3><hr />
                <div className="contact-form">
                <iframe
                    id="JotFormIFrame-211543776572461"
                    title="Responsive Envelope Contact Form"
                    onload="window.parent.scrollTo(0,0)"
                    allowtransparency="true"
                    allowfullscreen="true"
                    allow="geolocation; microphone; camera"
                    src="https://form.jotform.com/211543776572461"
                    frameborder="0"
                    style={{minWidth:"100%",height:"539px",border:"none"}}
                    
                    scrolling="no"
                >
                </iframe>
                </div>
                
                </div>
                <div><Footer /></div>
            </div>
        )
    }
}

export default Contact
