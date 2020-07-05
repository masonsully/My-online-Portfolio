import React from 'react'
import '../OurStory/OurStory'
import './Toolbar.css'

const Toolbar = props => (
    <header className ="toolbar">
        <nav className="toolbar_navigation">
            <div className="icon">
            </div>
            <div className="toolbar_navigation-items">
                <ul>
                    <li><a href ="App.js">Home</a></li>
                    <li><a href ="./Ourstory/OurStory.js">Our Story</a></li>
                    <li><a href ="#">The Day</a></li>
                    <li><a href ="#">Hospitality</a></li>
                    <li><a href ="#">Honeymoon</a></li>
                    <li><a href ="#">Gallery</a></li>
                </ul>
            </div>
        </nav>
    </header>
);
export default Toolbar;