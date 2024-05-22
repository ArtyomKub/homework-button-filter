import React from 'react';

export const FilterForMoney = () => {
    return (
        <>
            <ul>
                {currentMoney.map((objectFromMoneyArray, index) => {
                    return (
                        <li key={index}>
                            <span>{objectFromMoneyArray.banknots} - </span>
                            <span>{objectFromMoneyArray.number} - </span>
                            <span>{objectFromMoneyArray.value}</span>
                        </li>
                    )
                })}
            </ul>
            <button onClick={() => onClickFilteredHandler('All')}>ALL MONEY</button>
            <button onClick={() => onClickFilteredHandler('Dollars')}>DOLLARS</button>
            <button onClick={() => onClickFilteredHandler('Rubles')}>RUBLES</button>
        </>
    );
};
