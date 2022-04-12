import React from 'react';
import { useState } from "react";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/*1
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);*/



/*2
function Football() {
  const shoot = () => {
    alert("Great Shot!");
  }

  return (
    <button onClick={shoot}>Take the shot!</button>
  );
}

ReactDOM.render(<Football />, document.getElementById('root'));*/

/*3
const myelement = (
  <table>
    <tr>
      <th>Firstname</th>
      <th>Lastname</th>
      <th>Email</th>
    </tr>
    <tr>
      <td>John</td>
      <td>Doe</td>
      <td>john@example.com</td>
    </tr>
    <tr>
      <td>Mary</td>
      <td>Moe</td>
      <td>mary@example.com</td>
    </tr>
    <tr>
      <td>July</td>
      <td>Dooley</td>
      <td>july@example.com</td>
    </tr>
  </table>
);

ReactDOM.render(myelement, document.getElementById('root'));*/

/*4
function MissedGoal() {
  return <h1>MISSED!</h1>;
}

function MadeGoal() {
  return <h1>GOAL!</h1>;
}

function Goal(props) {
  const isGoal = props.isGoal;
  if (isGoal) {
    return <MadeGoal/>;
  }
  return <MissedGoal/>;
}

ReactDOM.render(
  <Goal isGoal={true} />,
  document.getElementById('root')
);*/

/*5
function Car(props) {
  return <li>I am a { props.brand }</li>;
}

function Garage() {
  const cars = ['Ford', 'BMW', 'Audi'];
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <ul>
        {cars.map((car) => <Car brand={car} />)}
      </ul>
    </>
  );
}

ReactDOM.render(<Garage />, document.getElementById('root'));*/

/*6
function MyForm() {
  return (
    <form>
      <label>Enter your name:
        <input type="text" />
      </label>
    </form>
  )
}

ReactDOM.render(<MyForm />, document.getElementById('root'));*/

/*7
function MyForm() {
  const [myFruit, setMyFruit] = useState("Banana");

  const handleChange = (event) => {
    setMyFruit(event.target.value)
  }

  return (
    <form>
      <select value={myFruit} onChange={handleChange}>
        <option value="Banana">Banana</option>
        <option value="Mango">Mango</option>
        <option value="Apple">Apple</option>
      </select>
    </form>
  )
}

ReactDOM.render(<MyForm />, document.getElementById('root'));*/

const Header = () => {
  return (
    <>
      <h1>Hello Style!</h1>
    </>
  );
}

ReactDOM.render(<Header />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
