import { Component } from 'react';
import './App.css';

class App extends Component{
  // run 1st
  constructor(){
    super();
    this.state = {
      // name: {firstName: "Raiyan", lastName: "Al Sultan"},
      // company: 'ZTM'
      monsters: [],
      searchField: ''
    }
  }

  // mounting is the first time the component placed on the display, that means first time when we render
  // It happens only one time in the life of a component
  // run 3rd then it will run again 2nd part
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(()=>{
        return {monsters: users}
      }
      ))
  }

  // run 2nd
  render(){

    const filteredMonsters = this.state.monsters.filter((monster)=>{
      return monster.name.toLowerCase().includes(this.state.searchField);
    });

    return (
      <div className="App">
          <input className='search-box' type='search'
                 placeholder='search monsters' 
                 onChange={(event)=>{
                  const searchField = event.target.value.toLowerCase();  
                  this.setState(()=>{
                    return {searchField};
                  })
                 }}/>
          {filteredMonsters.map((monster)=>{
            return (
            <div  key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
          })}
        
      </div>
    );
    }
}

export default App;
