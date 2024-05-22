import React from 'react';
import {FilterButton} from '../App';

type ButtonForFilterType = {
    name: string
    callback: () => void
}

export const ButtonForFilter = (props:ButtonForFilterType) => {

   const onClickHandler = () => {
       props.callback()
   }

    return (
        <div>
            <button onClick={onClickHandler}>{props.name}</button>
        </div>
    );
};
