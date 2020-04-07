import React, { Component } from 'react';
import './App.css';
import HomepageImage from './components/HomepageImage'
import Form from './components/Form'
// import axios from "axios"


  // function Submit() {
  //   onSubmit = (fields) => {
  //     console.log("Subscriber info: ", fields)
  //   };
  // }
  

class App extends Component {
  
    state = {
      fields: {}
    };


    // handleSendEmail = fields => {
    //   console.log(fields)
    // }

    onSubmit = fields => {
        this.setState({ fields });
        console.log(fields);
        // axios.post('https://cogna.herokuapp.com/message',  { crossdomain: true }, {fields})
        //   .then(res => {
        //     console.log(res);
        //     console.log(res.data);
        //   })  

        const headers = {
          Accept: "application/json, text/plain, */8",
          "Content-Type": "applicaiton/json",
        }; 

        const payload = {
          method: "POST",
          headers,
          body: JSON.stringify(fields)
        }

        const getURL = 'https://cogna.herokuapp.com/message';
        fetch(getURL, payload, {mode: 'no-cors'}).then(response => {
          if (response.ok) {
            console.log(response);
          } else {
            throw new Error(response.text());
          }
        }).catch(error => alert(error));

    }

    



    render () {
      return (
        <div className="App">
          
          <header className="App-header">
          <HomepageImage />
          </header>
          <Form onSubmit = {fields => this.onSubmit(fields)}/>
          <p>
            {JSON.stringify(this.state.fields, null, 2)}
          </p>
        </div>
      );
    }

}

  // function App() {

  //   onSubmit = (fields) => {
  //     console.log("Subscriber info: ", fields)
  //   };

  //   return (
  //     <div className="App">
        
  //       <header className="App-header">
  //       <HomepageImage />
  //       </header>
  //       <Form onSubmit = {fields => this.onSubmit(fields)}/>
  //     </div>
  //   );
  // }


export default App;
