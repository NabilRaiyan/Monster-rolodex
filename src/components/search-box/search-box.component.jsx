import { Component } from "react";
import './search-box.style.css';

// when we import a css file then it is applicable to the whole website

class SearchBox extends Component {

    render(){
        const { searchChangeHandler, placeholder, className, type } = this.props;
        return (
            <div>
                <input className = {`search-box ${className}`} type = {type}
                 placeholder= { placeholder } 
                 onChange={searchChangeHandler}/>
            </div>
        )
    }
}

export default SearchBox;