import React, { Component } from 'react';
import './App.css';
// import { postCustomers } from './actions/PostCustomers';
// import { connect } from 'react-redux';

const Papa = require('papaparse');
const API_URL = process.env.REACT_APP_API_URL
const MY_API_TOKEN = process.env.MY_BEARER_TOKEN;

//NEXT: figure out how to make the function a promise, and see if you can put right from here! Otherwise, look into
// just printing the result to the website so you can copy into Postman.

class App extends Component {


  parseFile(file) {

    Papa.parse(file, {
     header: true,
     complete: this.activateJson
    })
  }

  activateJson(results) {

    let output = results.data.map(record => {

    return {
      "name": record.name,
      "emails": [
        {
          "email": record.email
        }
      ],
      "phones": [
        {
          "type": "home",
          "phone": record.homePhone
        },
        {
          "type": "work",
          "phone": record.workPhone
        }
      ],
      "tags": record.customerType,
      "birthdayAt": record.birthday
      };
    });

       fetch(`${API_URL}`, {
        method: "POST",
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${MY_API_TOKEN}`
         },
        body: JSON.stringify(output)
      })
        .catch(function(error) {
        console.log('There has been a problem with your fetch operation: ', error.message);
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

// export default connect({ postCustomers })(App);
export default App;
