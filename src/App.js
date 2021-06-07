import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Homepage/Home'
import About from './Aboutpage/About'
import Qualification from './Qualificationpage/Qualification'
import Contact from './Contactpage/Contact';
import Skills from './skillspage/Skills';
import Error from './Error';


class App extends React.Component {
    render() {
        return (
            <>
                <Router>
                    <Switch>
                        <Route  exact path="/"  component={Home} />
                        <Route path="/home" component={Home} />
                        <Route path="/qualification" component={Qualification}/>
                        <Route path="/about" component={About} />
                        <Route path="/skills" component={Skills} />
                        <Route path="/contact" component={Contact} />
                        <Route path="*" component={Error} />
                    </Switch>
                </Router>
               
            </>
        )
    }
}
export default App;