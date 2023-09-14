const promise = new Promise((resolve, reject)=>{
    if(true){
    setTimeout(()=>{
        resolve('I am a programmer');
    }, 100);
    }
    else{
        reject('I am not a programmer');
    }
});

promise
    .then(value => value + '!!!')
    .then(value => value + " No i am not")
    .then(newValue => console.log(newValue))
    .catch(rejectValue => console.log(rejectValue));



// react code for App.js
//  {/* <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             HI {this.state.name.firstName} {this.state.name.lastName} and I work at {this.state.company}
//           </p>
//           <button onClick={()=>{
//             // this.setState({name: {firstName: "Nabil", lastName:"Raiyan"}}); (Asynchronous call)
//             // in this method we set the state and console.log the updated state and the 2nd method is optional
//             this.setState(()=>{
//               return {
//                 name: {firstName: "Nabil", lastName:"Raiyan"},
//               }
//             }, ()=>{
//               console.log(this.state);
//             });
//           }} style={{'margin':'10px','padding':'10px', 'fontFamily':'oswald'}}>Change Name</button>
//             Learn React
//         </header> */}