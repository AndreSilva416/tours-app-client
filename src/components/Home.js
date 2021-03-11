import React, { Component } from 'react'
import {Link} from  'react-router-dom'
import './Home.css';


class Home extends Component {
    render() {
        return (
            <div className="home">
                <h1><b>Hack Tours</b></h1>               
                <h2>Get to know your favorite cities</h2>
                <Link style={{marginLeft: '10px'}}  to="/tourlist"><button className="tours-btn" size="lg" >Tours</button></Link>
                
                
                
            </div>
        )
    }
}

export default Home