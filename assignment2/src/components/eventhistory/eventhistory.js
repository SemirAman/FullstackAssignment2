import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from '../home/homepage';
import './eventhistory.css';



const eventhistory = (props) => {
    return (
        <Router>
            <Home/>
            <p>Welcome to events</p>
            <div>
                <table>
                    <tr>
                        <th>Company</th>
                        <th>Contact</th>
                        <th>Country</th>
                    </tr>
                </table>
            </div>
        </Router>
    );   
}

export default eventHistory;