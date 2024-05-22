import React from 'react';


type ButtonForFilterType = {
    name: string
    callback: (nameButton: string) => void
}

export const ButtonForFilter = (props: ButtonForFilterType) => {

    const onClickHandler = (nameButton: string) => {
        props.callback(nameButton)
    }

    return (
        <div>
            <button onClick={() => onClickHandler(props.name)}>{props.name}</button>
        </div>
    );
};
