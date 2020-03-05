import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {Container} from './../../App.js';

class Footer extends Component{
    render(){
        return (
            <Container name="footer" background="#E5E5E5">
                <div className="footer">
                    <nav>
                        <ul>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </nav>
                </div>
            </Container>
        )
    }
}

export default Footer;
