import React, { Component } from 'react';
import './App.css';

const csv='./files/Data-2.csv';


class App extends Component {

  activateJson = () => {
    let output = csv.map(record => {

    let arr = record.split(',')

    return {
      "name": arr[0],
      "emails": [
          {
            "email": arr[1]
          }
        ],
      "phones": [
          {
            "type": "home",
            "phone": arr[2]
          },
          {
            "type": "work",
            "phone": arr[3]
          }
        ],
       "birthdayAt": arr[4],
       "tags": arr[5]
      };
    });
    console.log(output);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to the Kustomer Guest Import Page!</h1>
        </header>

        <button onClick={this.activateJson}>
          Show J S O N
        </button>
      </div>
    );
  };
}

export default App;
