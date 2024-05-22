import React from 'react';
import {FilterButton} from '../App';


type ButtonForFilterType = {
    name: string
    callback: (nameButton: FilterButton) => void
}

export const ButtonForFilter = (props: ButtonForFilterType) => {

    const onClickHandler = (nameButton: FilterButton) => {
        props.callback(nameButton)
    }

    return (
        <div>
            <button onClick={() => onClickHandler('Rubles')}>{props.name}</button>
        </div>
    );
};
