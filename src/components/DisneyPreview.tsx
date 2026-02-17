/*
filename: src/components/DisneyPreview.tsx
author: ealvare@bu.edu 2/16/2026
description: Uses the received data to build the UI
*/

import type {Character} from '../interfaces/Characters.ts';

export default function DisneyPreview({ char }: { char: Character }) {
    let appearance = "No appearances listed";

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
        <div key={char.id}>
            <h3>{char.name}</h3>
            <img src={char.imageUrl} alt={char.name} />
            <p>{appearance}</p>
        </div>
    )
}