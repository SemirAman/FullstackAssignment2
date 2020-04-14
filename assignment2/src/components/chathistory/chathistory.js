import React from 'react';
import Chat from '../chathistory/chathistory';
import Event from '../eventhistory/eventhistory';
import Room from '../rooms/room';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Home from '../home/homepage';



const chatHistory = (props) => {
    return (
        <Router>
            <Home/>
            <p>Welcome to chat</p>
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

export default chatHistory;