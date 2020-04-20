import React, {Component} from 'react';
import '../css/film.css';

class Film extends Component{
    render(){
        return(
            <div className="film">
                <h4>{this.props.name}</h4>
                <a href={this.props.url} target="none" >More info..</a>
            </div>
        )
    }
}

export default Film;