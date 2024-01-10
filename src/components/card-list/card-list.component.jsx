//import { Component }from "react";
import './card-list.style.css';
import Card from "../card/card.component";

// class CardList extends Component {
//     render(){
//         const { monsters } = this.props;
//         return (
//             <div className="card-list">
//                 { monsters.map((monster) =>{
//                     {/* const { name, email, id } = monster; */}
//                     return (
//                     <div className="card-container" key={monster.id}>
//                         {/* <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
//                         <h2>{name}</h2>
//                         <p>{email}</p> */}
//                         <Card monster={monster}/>
//                     </div>
//                 )})}
//             </div>
//         )
//     }
// }


// functional component
const CardList  = ({monsters}) => (
    <div className="card-list">
        { monsters.map((monster) =>{
            return (
            <div className="card-container" key={monster.id}>
                <Card monster={monster}/>
            </div>
        )})}
    </div>
);

export default CardList;