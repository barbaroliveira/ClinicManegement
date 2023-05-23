import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      clinics: [
        {
          name: 'Clinica Canidelo'
        },
        {
          name: 'Clinica Valadares'
        },
        {
          name: 'Clinica Coimbrões'
        }
      ]
    }
  }
  render() {
    return <div className='App'>
      {
        this.state.clinics.map((clinic) => {
          return <h1>{clinic.name}</h1>;
        })
      }
    </div>
  }
}

export default App;
