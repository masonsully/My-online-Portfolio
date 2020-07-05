import React, { Component} from 'react';
alert("Hello! I am an alert box!!");

ReactDOM.render(
    <h1>Mason and Sams Wedding</h1>
    <h2>Date<br>Xamount of days to go </h2>
)

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);