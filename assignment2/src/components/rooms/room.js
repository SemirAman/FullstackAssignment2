import React from 'react';
import Chat from '../chathistory/chathistory';
import Event from '../eventhistory/eventhistory';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from '../home/homepage';



const Room = (props) =>  {
    
    return (
        <Router>
            <Home></Home>
            Wlcome to rooms nav
            <div>
                <table>
                    <tr>
                        <th>Company</th>
                        <th>Contact</th>
                        <th>Country</th>
                    </tr>
                    <tr></tr>
                    <tr></tr>
                </table>
            </div>
        </Router>
    );
}

export default Room;