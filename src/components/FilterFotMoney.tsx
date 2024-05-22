import React from 'react';
import {FilterButton} from '../App';
import {ButtonForFilter} from './ButtonForFilter';

type FilterForMoneyType = {
    currentMoney: Array<CurrentMoneyType>
    onClickFilteredHandler: (nameButton: FilterButton) => void

}

type CurrentMoneyType = {
    banknots: string
    value: number
    number: string
}

export const FilterForMoney = (props: FilterForMoneyType) => {
    return (
        <>
            <ul>
                {props.currentMoney.map((objectFromMoneyArray, index) => {
                    return (
                        <li key={index}>
                            <span>{objectFromMoneyArray.banknots} - </span>
                            <span>{objectFromMoneyArray.number} - </span>
                            <span>{objectFromMoneyArray.value}</span>
                        </li>
                    )
                })}
            </ul>
            <button onClick={() => props.onClickFilteredHandler('All')}>ALL MONEY</button>
            <button onClick={() => props.onClickFilteredHandler('Dollars')}>DOLLARS</button>
            <button onClick={() => props.onClickFilteredHandler('Rubles')}>RUBLES</button>
            <ButtonForFilter callback={props.onClickFilteredHandler} name={'Rubles'}/>
        </>
    );
};
