import React from 'react';
import Chat from '../chathistory/chathistory';
import Event from '../eventhistory/eventhistory';
import Room from '../rooms/room';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './homepage.css';



class Home extends React.Component {
    render() {
        return (
            <Router>
                <nav className="navbar navbar-expand-sm bg-light">
                    <ul className="navbar-nav">
                        <li classNme="nav-item" defaultChecked>
                            <Link to={Chat}/>Chat History
                        </li>
                        <li className="nav-item">
                            <Link to={Event}/>Event History
                        </li>
                        <li className="nav-item">
                            <Link to={Room}/>Room
                        </li>
                    </ul>
                </nav>
            </Router>
        );
    }
}

export default Home;
