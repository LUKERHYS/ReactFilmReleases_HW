import React, {Component} from 'react';
import Film from './Film';
import '../css/filmlist.css';

class FilmList extends Component{
    render(){

        const filmNodes = this.props.films.map(film => {
            return <Film key={film.id} name={film.name} url={film.url} />
        })

        return(
            <div className="film-list">
               {filmNodes}
            </div>
        );
    }
}

export default FilmList;