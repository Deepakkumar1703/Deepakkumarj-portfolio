import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'
import "./Nav.css";

class Navbar extends Component {
    constructor(){
    super();
    this.state={
        showlinks:false,
        
    }
}
HandleClick=()=>{
    this.setState({
        showlinks:!this.state.showlinks,
        
        
    })
}
    render() {
        const {showlinks}=this.state;
        return (
                
                <nav className="navbar">
                    <div className="main-left">
                    <div className="nav-Left">
                        <Link className="ml" to="/"><Icon name='handshake outline' /> Deepak Kumar J</Link>
                    </div>
                    </div>
                    <div className="nav-right">
                    <div className="Links" id={showlinks ? "Hidden":""}>
                        <Link className="l" to="/home">Home</Link>
                        <Link className="l" to="/qualification">Qualification</Link>
                        <Link className="l" to="/skills">Skills</Link>
                        <Link className="l" to="/about">About</Link>
                        <Link className="l" to="/contact">Contact</Link>
                    </div>
                    {/*<button onClick={()=>this.HandleClick()}><Icon name='angle double down' /></button>*/}
                    {
                        showlinks ? 
                        <div>
                        <Icon name="close" size="large" style={{color:"white"}} onClick={()=>this.HandleClick()} />
                        </div>
                        :
                        <div>
                        <img width={40} height={40} onClick={()=>this.HandleClick()} className="navimg" src="https://icon-library.net/images/white-menu-icon-png/white-menu-icon-png-18.jpg" alt="no"/>
                        </div>
                    }
                    </div>
                </nav>  
                
        )
    }
}

export default Navbar;
