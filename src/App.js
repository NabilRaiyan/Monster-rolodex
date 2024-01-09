import { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';


// functional component
const App = () => 
{
  return(
    <h1 className='app-title'>Monster Rolodex</h1>
    //<SearchBox searchChangeHandler = {onSearchChange} placeholder = {"Search Monster"} className = {'monster-search-box'} type = {'search'}/>
    //<CardList monsters = {filteredMonsters}/>
  )
}
 
// // class component
// class App extends Component{
//   // run 1st
//   constructor(){
//     super();
//     this.state = {
//       // name: {firstName: "Raiyan", lastName: "Al Sultan"},
//       // company: 'ZTM'
//       monsters: [],
//       searchField: ''
//     }
//   }

  // // mounting is the first time the component placed on the display, that means first time when we render
  // // It happens only one time in the life of a component
  // // run 3rd then it will run again 2nd part
  // componentDidMount(){
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then((response) => response.json())
  //     .then((users) => this.setState(()=>{
  //       return {monsters: users}
  //     }
  //     ))
  // }

  // onSearchChange = (event)=>{
  //   const searchField = event.target.value.toLowerCase();  
  //   this.setState(()=>{
  //     return {searchField};
  //   })
  //  }

  // // run 2nd
  // render(){

  //   const { monsters, searchField } = this.state;
  //   const { onSearchChange } = this;
  //   const filteredMonsters = monsters.filter((monster)=>{
  //     return monster.name.toLowerCase().includes(searchField);
  //   });

//     return (
//       <div className="App">
        
//           {/* {filteredMonsters.map((monster)=>{
//             return (
//             <div  key={monster.id}>
//               <h1>{monster.name}</h1>
//             </div>
//           );
//           })} */}
//           <h1 className='app-title'>Monster Rolodex</h1>
//           <SearchBox searchChangeHandler = {onSearchChange} placeholder = {"Search Monster"} className = {'monster-search-box'} type = {'search'}/>
//           <CardList monsters = {filteredMonsters}/>
        
//       </div>
//     );
//     }
// }

export default App;
