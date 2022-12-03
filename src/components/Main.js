import React from 'react'
import FilmPresentation from './FilmPresentation';
import Breadcrumbs from '../components/Breadcrumbs'
import { Outlet } from 'react-router-dom';
export default function Main(props) {
    return (
        <>
            <Breadcrumbs />
            <FilmPresentation listOfFilm={props.listOfFilm}></FilmPresentation>
        </>


    );
}

// export default class Main extends Component {

//     constructor() {
//         super();
//         this.state = {
//             film: PopularFilms
//         };
//     }
//     render() {
//         return (
//             <FilmPresentation film={this.state.film}></FilmPresentation>
//         )
//     }
// }
