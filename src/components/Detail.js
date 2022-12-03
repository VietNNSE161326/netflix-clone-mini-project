import React, { Component } from 'react'
import { useParams } from 'react-router-dom'
import { Films } from '../shared/ListOfFilms'
import { Button, Grid } from '@mui/material';
import { useState } from 'react';
import ModalCase from './ModalCase';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
export default function Detail() {
    const [isOpen, setIsOpen] = useState(false);
    const parameter = useParams();
    let film = Films.find(obj => {
        return obj.id == parameter.id;
    });
    let listFilm = Films.filter(obj => {
        return obj.category == film.category && obj.id != film.id;
    });
    return (
        <>
            <div className='detail-container'>
                <div className='detail-info'>
                    <h2 className='detail-info-title'>{film.name}</h2>
                    <div className='detail-info-metadata'>
                        <span className='detail-info-metadata-item'>{film.year}</span>
                        <span className='detail-info-metadata-spacer'> | </span>
                        <span className='detail-info-metadata-item maturity-number'>{film.maturity}</span>
                        <span className='detail-info-metadata-spacer'> | </span>
                        <span className='detail-info-metadata-item'>{film.time}</span>
                        <span className='detail-info-metadata-spacer'> | </span>
                        <Button variant="text">
                            <a onClick={() => setIsOpen(true)} className="btn-floating halfway-fab waves-effect waves-light red">
                                Trailer
                            </a>
                        </Button>
                    </div>
                    <div className='detail-info-content'>
                        {film.detail}
                    </div>
                </div>
                <div className='detail-image' style={{ backgroundImage: `url(${film.detailImg})` }}></div>
                {isOpen && <ModalCase setIsOpen={setIsOpen} film={film} />}

            </div>
            <div className='detail-value-prop'>
                <div className='detail-value-prop-logo'></div>
                <div className='detail-value-prop-info'>Watch all you want</div>
                <Button className='detail-button'>JOIN NOW</Button>
            </div>
            <div className='more-like-this-detail'>
                <div className='more-like-this-title'>More Like This</div>
                <ImageList className='detail-image-list' cols={3} rowHeight={165}>
                    {listFilm.map((eachFilm) => (
                        <ImageListItem sx={{ alignItems: "center", marginBottom: "20px" }} key={eachFilm.img}>
                            <img
                                src={`${eachFilm.img}`}
                                srcSet={`${eachFilm.img}`}
                                alt={eachFilm.name}
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </div>

        </>
    )
}
