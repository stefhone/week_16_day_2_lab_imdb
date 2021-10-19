import React from 'react';

const FilmRelease = ({ film }) => {

    return (
        <li><a href={ film.url } target="_blank" rel="noreferrer">{ film.name }</a></li>
    );
}

export default FilmRelease;