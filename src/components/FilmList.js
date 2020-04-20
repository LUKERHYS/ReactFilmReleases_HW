import React, {Component} from 'react';
import Film from './Film';

class FilmList extends Component{
    render(){
        return(
            <div className="film-list">
                I am a Film List!
                <Film />
            </div>
        );
    }
}

export default FilmList;