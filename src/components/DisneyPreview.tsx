/*
filename: src/components/DisneyPreview.tsx
author: ealvare@bu.edu 2/16/2026
description: Uses the received data to build the UI
*/

import type {Character} from '../interfaces/Characters.ts';
import styled from 'styled-components';

const CharDiv = styled.div`
    padding: 5%;
    
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    
    border: 5px solid lightblue;

    background-color: lightcyan;
    

    img {
        max-width: 100%;
    }
`;


export default function DisneyPreview({ char }: { char: Character }) {
    let appearance = "No appearances listed";

    /* choose the first appearance of this character */
    if (char.films.length > 0) {
        appearance = 'Film: ' + char.films[0];
    } else if (char.shortFilms.length > 0) {
        appearance = 'Short Film: ' + char.shortFilms[0];
    } else if (char.tvShows.length > 0) {
        appearance = 'Tv Show: ' + char.tvShows[0];
    } else if (char.parkAttractions.length > 0) {
        appearance = 'Park Attractions: ' + char.parkAttractions[0];
    }

    return (
        <CharDiv key={char.id}>
            <h3>{char.name}</h3>
            <a href={char.url}>
                <img src={char.imageUrl} alt={char.name} />
            </a>
            <p>{appearance}</p>
        </CharDiv>
    )
}