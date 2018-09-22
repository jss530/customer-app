import React, { Component } from 'react';
import './App.css';

class App extends Component {

  importFromFile = csv => {
    let csv =require('./files/data.csv');
    let output = csv.map(record => {
    let arr = record.split(',')

  	return {
      "name": arr[0],
      "emails": [
          {
            "type": "home",
            "email": arr[1],
          }
        ],
      "phones": [
          {
            "type": "home",
            "phone": parseInt(arr[2])
          },
          {
            "type": "work",
            "phone": parseInt(arr[3])
          }
        ],
       "birthdayAt": arr[4],
       "tags": arr[5]
      };
  	});
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to the Kustomer Guest Import Page!</h1>
        </header>

        <p className="App-intro">
        </p>

        <div className="upload">
          <input type='file' id='file' className='input-file' accept='.csv'
          onChange={this.importFromFile} />
        </div>
      </div>
    );
  };
}

export default App;
