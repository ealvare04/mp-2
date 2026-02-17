/*
filename: src/components/DisneyListContent.tsx
author: ealvare@bu.edu 2/16/2026
description: Retrieves data and passes it to the DisneyPreview component to build
 */

import {useEffect, useState} from 'react';
import type {Character} from '../interfaces/Characters.ts';
import DisneyPreview from './DisneyPreview';

export default function DisneyListContent() {
        const [data, setData] = useState<Character[]>([]);

        useEffect(() => {
            async function fetchData() {
                const res = await fetch(
                    `https://api.disneyapi.dev/character`
                );
                const jsonRes = await res.json();
                setData(jsonRes.data);
            }
            fetchData()
                .then(() => console.log("OK"))
                .catch((e) => console.error("This error occurred: " + e));
        }, [data]);

        return(
            <div>
                <h1>Disney Characters :-)</h1>
                <div>
                    {data.map((char) => {
                        return <DisneyPreview char={char} />;
                    })}
                </div>
            </div>
        )
}