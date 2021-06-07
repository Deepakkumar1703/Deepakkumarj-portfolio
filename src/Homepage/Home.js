import React, { Component } from 'react'
import Footer from '../Footer/Footer';
import Navbar from '../Nav/Navbar'
import Hire from './Hire';
import './home.css'
import Language from './Language';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            showdata: false,
        }
    }
    HireClick = () => {
        this.setState({
            showdata: true
        })
    }
    hide=()=>{
        this.setState({
            showdata:false,
        })
    }

    render() {
        const { showdata } = this.state
        return (

            <div className="home-main">
                <Navbar />
                <div>
                    <div className="main-head">
                    
                        <img className="profile" src="deepak.jpg"  alt="no"/>
                    
                        <h1 id="name"><b>Hi!  I'm DEEPAK KUMAR J</b></h1>
                        <h2 id="designation"><i>Web Developer in React</i></h2>
                        <button onClick={this.HireClick}>Hire Me</button>
                        {showdata ?
                            <div>
                                <Hire close={this.hide} />
                            </div>
                            :
                            ""
                        }
                    </div>
                </div>
                <Language />
                <div className="qutos">
                <h2>My Inspirational Quotes</h2><hr /><br/>
                <img className="abd" src="https://www.theeducationmagazine.com/wp-content/uploads/2020/03/19.jpg" alt="no"/>
                </div>
                <div><Footer /></div>
            </div>


        )
    }
}

export default Home;
