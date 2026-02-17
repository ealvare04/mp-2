/*
filename: src/components/DisneyListContent.tsx
author: ealvare@bu.edu 2/16/2026
description: Retrieves data and passes it to the DisneyPreview component to build
 */

import {useEffect, useState} from 'react';
import type {Character} from '../interfaces/Characters.ts';
import DisneyPreview from './DisneyPreview';
import styled from 'styled-components';

const PageWrapperDiv = styled.div`
    
    font-family: fantasy;
    
    h1 {
        padding: 1%;
        text-align: center;
        background-color: plum;
        border: 2px solid purple;
        
        font-size: calc(10px + 2vw);
    }
    
    h3 {
        font-size: calc(5px + 2vw);
    }
    
    p {
        font-size: calc(5px + 1vw);
    }
`;

const AllCharsDiv = styled.div`
    padding: 2%;
    margin: auto;

    background-color: lightblue;


    display: grid;
    grid-template-columns: auto auto auto;
`;


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

        /* needs to return a single div */
        return(
            <PageWrapperDiv>
                <h1>Disney Characters :-)</h1>
                <AllCharsDiv>
                    {data.map((char) => {
                        return <DisneyPreview char={char} />;
                    })}
                </AllCharsDiv>
            </PageWrapperDiv>
        )
}