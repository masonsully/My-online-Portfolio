import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Toolbar from './Toolbar/Toolbar'; 
import Picture from './Images/IMG_8847.jpg';
import Picture2 from './Images/Picture2.jpg';
import OurStory from './OurStory/OurStory';


const ColoredLine = ({ color }) => (
  <hr
      style={{
          color: '#ffc0cb',
          backgroundColor: '#ffc0cb',
          height: 1
       }}
  />
);

class Title extends React.Component {
 render(){
  return (
    <div className ="container-fluid">
      <Toolbar />
    <div className="Title">
    <h1>Mason & Sams Big Day</h1>
    <h2>Friday 3rd June 2022</h2> 
    <h2> days to go </h2>
    </div>
    <div className="pictureFrame">
    <img src ={Picture} className="Picture1"/>
    </div>
    <div className="divider">
    <ColoredLine />
    </div>
    <div className ="celebration">
      Come and celebrate our wedding day on Friday 3rd June 2022
      <br /> at Braxted Park  <br />
      <img src={Picture2} className="Picture2"/>
    </div>
    <div className="divider">
    <ColoredLine />
    </div>
    <div className="RSVP">
      <h1>RSVP</h1>
        <p>We welcome you to RSVP with us, we would appreciate it if you could let us know whether or not you can attend.</p><br/>
          Please contact us on 
          Placeholder@gmail.com <br />
    </div>
    <div className="divider">
    <ColoredLine />
    </div>
    </div>
  );
};
}


export default Title;

