import React, { Component } from 'react';
import './App.css';

const Papa = require('papaparse');
const API_URL = process.env.REACT_APP_API_URL;
const TOKEN = process.env.MY_BEARER_TOKEN;

class App extends Component {


  parseFile(file) {

    Papa.parse(file, {
     header: true,
     complete: this.activateJson
    })
  }

  activateJson(results) {
    let customer;

    let records = results.data.map(record => {

    let customer = {
      name: record.name,
      emails: [
        {
          email: record.email
        }
      ],
      phones: [
        {
          type: "home",
          phone: record.homePhone
        },
        {
          type: "work",
          phone: record.workPhone
        }
      ],
      tags: [record.customerType],
      // birthdayAt: Date.toISOString(record.birthday)
      };

      console.log(customer);

      fetch(`${API_URL}`, {
       method: "POST",
       headers: {
         'Content-Type': 'application/json',
         Authorization: `Bearer ${TOKEN}`
        },
       body: JSON.stringify(customer)
       })
       .then(function(response) {
          response.json();
       })
       .catch(error => console.log(error));
    });

  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to the Kustomer Guest Import Page!</h1>
        </header>

        <input type="file" id="csv-file" accept='.csv'
        onChange={e => this.parseFile(e.target.files[0])}/>

      </div>
    );
  };
}

export default App;
