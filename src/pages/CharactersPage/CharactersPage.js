import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";

import css from './CharactersPage.module.css'
import {characterService} from "../../services/character.service";
import Character from "../../components/Character/Character";

const CharactersPage = () => {

    const {state} = useLocation();

    const [arrForApi, setArrForApi] = useState([]);

    const [characters, setCharacters] = useState([]);

    const [lengthStyle, setLengthStyle] = useState('');


    const mappedArr = [];


    state.characters.filter((val) => {
        mappedArr.push(val.replace(/[^0-9]/g, ''));
    });


    useEffect(() => {
        setArrForApi([...mappedArr]);
    }, [mappedArr.length])


    useEffect(() => {
        if (arrForApi.length) {
            characterService.getByEpisodeArr(arrForApi).then(characters => {
                setCharacters(characters)
            });
        }
    }, [arrForApi])

    useEffect(() => {
        if (characters.length >= 15) {
            setLengthStyle(css.height_auto)
        }
    }, [characters.length])


    return (
        <div className={`${css.background} ${lengthStyle}`}>
            <div className={css.state_name}>{state.name}</div>
            <div className={css.characters_wrap}>
                {characters.length &&
                    characters.map(val => <Character character={val} key={val.id}/>)
                }
            </div>
        </div>
    );
};

export default CharactersPage;