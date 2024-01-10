//import { Component } from "react";
import './card.style.css';

// class component
// class Card extends Component {
//     render(){
//         const { name, email, id } = this.props.monster;
//         return (
//             <div>
//                  <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
//                 <h2>{name}</h2>
//                 <p>{email}</p>
//             </div>
//         )
//     }
// }



// functional component
const Card = ({monster}) => {
    const { id, name, email} = monster;
    return(
    <div>
        <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
        <h2>{name}</h2>
        <p>{email}</p>
    </div>
    );    
}

export default Card;