import React, { Component } from 'react';
import './App.css';
import InfoButtons from './info/InfoButtons.json';


//NO HACER CASO
//import {useSelector, useDispatch} from 'react-redux';
// en despues de declarar clase: const counter = useSelector(state => state.counter); 
//o para un booleano {isLogged ? <h1>hola</h1> : ''}
//import {increment} from './actions/index.js'
//const dispatch = useDispatch();
//onClick{() => dispatch(increment())}

//Components
import Button from './components/Button.js';
import NavBar from './components/NavBar.js';

class App extends Component {
  constructor() {
      super();
      this.state = {
          counters: InfoButtons,
          time: 0,
          isOn: false,
          start: 0
      };
  }



//Metodos botones contador  
  handleIncrement = counter => {
      const counters = [...this.state.counters];
      const i = counters.indexOf(counter);
      counters[i] = { ...counter };
      if(counters[i].contador < counters[i].max) {
        counters[i].value = counters[i].value + counters[i].points;
        counters[i].contador = counters[i].contador + 1;
      };
      this.setState({ counters });
  }

  handleDecrement = counter => {
      const counters = [...this.state.counters];
      const i = counters.indexOf(counter);
      counters[i] = { ...counter };
      counters[i].value = counters[i].value - counters[i].points;
      counters[i].contador = counters[i].contador - 1;
      this.setState({ counters });
  }

  handleReset = () => {
      const counters = this.state.counters.map(c => {
          c.value = 0;
          c.contador = 0;
          return c;
      });
      this.setState({ counters });
  }

  addPoints = () => {
    let totalPoints = 0;
      for (let i = 0; i < this.state.counters.length; i++) {
          totalPoints = totalPoints + this.state.counters[i].value;
      }
      return totalPoints;
  }
  
  render() {
      return (
          <div className="App">
            <NavBar/>
            <br/>
            <div>
              <h1>Puntos Totales</h1>
              <h2>{this.addPoints()}</h2>
            </div>
            <div>
              <button className="btn btn-warning btn-lg" onClick={this.handleReset}>Reset Contador</button>
              <br/>
              <div className="container">
                <div className="row mt-3">
                    <Button
                      onIncrement={this.handleIncrement}
                      onDecrement={this.handleDecrement}
                      counters={this.state.counters}
                      />
                  </div>
                </div>
            </div>
          </div>
      );
  }
}


export default App;