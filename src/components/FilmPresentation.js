import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container } from '@mui/material';
import { Films } from '../shared/ListOfFilms';
import { ThemeContext } from '../shared/ThemeContext'
import { useContext } from 'react';
import { layer } from '@fortawesome/fontawesome-svg-core';
export default function FilmPresentation(props) {
    let listFilm = Films.filter((film) => film.category == "film");
    let listTvShow = Films.filter((film) => film.category == "tvshow");
    let listSeries = Films.filter((film) => film.category == "tvseries");
    return (
        <Container>
            <h1 id="film">Films</h1>
            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlay={true}
                autoPlaySpeed={3000}
                centerMode={false}
                focusOnSelect={true}
                infinite
                pauseOnHover
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024
                        },
                        items: 3,
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 1,
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 2,
                    }
                }}
                slidesToSlide={3}
            >
                {listFilm.map(film => (
                    <Link to={`/detail/${film.id}`}>
                        <img src={film.img} alt={film.name} />
                    </Link>))}
            </Carousel>
            <h1 id="tvshow">TVShows</h1>
            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlay={true}
                autoPlaySpeed={3000}
                centerMode={false}
                focusOnSelect={true}
                infinite
                pauseOnHover
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024
                        },
                        items: 3,
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 1,
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 2,
                    }
                }}
                slidesToSlide={3}
            >
                {listTvShow.map(film => (
                    <Link to={`detail/${film.id}`}>
                        <img src={film.img} alt={film.name} />
                    </Link>))}
            </Carousel>
            <h1 id="tvseries">Tvseries</h1>
            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlay={true}
                autoPlaySpeed={3000}
                centerMode={false}
                focusOnSelect={true}
                infinite
                pauseOnHover
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024
                        },
                        items: 3,
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 1,
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 2,
                    }
                }}
                slidesToSlide={3}
            >
                {listSeries.map(film => (
                    <Link to={`detail/${film.id}`}>
                        <img src={film.img} alt={film.name} />
                    </Link>))}
            </Carousel>
        </Container>
    )
}
