import React, { Component } from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../shared/ThemeContext'
import { Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect } from 'react';

export default function Navigation() {
    const { theme, dark, toggle } = useContext(ThemeContext);
    const scrollToTvShow = (e) => {
        const section = document.querySelector("#tvshow");
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        e.preventDefault();
    };
    const scrollToTvSeries = (e) => {
        const section = document.querySelector("#tvseries");
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        e.preventDefault();
    };
    const scrollToFilm = (e) => {
        const section = document.querySelector("#film");
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        e.preventDefault();
    };
    return (
        <Box sx={{ flexGrow: 1 }} >
            <AppBar position="static" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
                <Toolbar sx={{ flexGrow: 1 }}>
                    <IconButton>
                        <Link id="logo" to={`/`}><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/logo.PNG?raw=true" /></Link>
                    </IconButton>
                    <IconButton><Link to={`/`} style={{ color: theme.color }}>Home</Link></IconButton>
                    <IconButton onClick={scrollToTvShow}><Link to={`/`} style={{ color: theme.color }} >TV Shows</Link></IconButton>
                    <IconButton onClick={scrollToTvSeries}><Link to={`/`} style={{ color: theme.color }} >TV Series</Link></IconButton>
                    <IconButton onClick={scrollToFilm}><Link to={`/`} style={{ color: theme.color }}>Films</Link></IconButton>
                    <IconButton><Link to={`/contact`} style={{ color: theme.color }}>Contact</Link></IconButton>
                    <IconButton><Link to={`/about`} style={{ color: theme.color }}>About</Link></IconButton>
                    <IconButton onClick={toggle} style={{
                        backgroundColor: theme.backgroundColor,
                        color: theme.color,
                        outline: 'none'
                    }}>
                        {dark ? 'Dark' : 'Light'} mode
                    </IconButton>
                </Toolbar>

            </AppBar>
        </Box>
    )
}
