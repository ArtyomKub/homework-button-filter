import React from 'react';
import {FilterButton} from '../App';
import {ButtonForFilter} from './ButtonForFilter';


export type FilterForMoneyType = {
    currentMoney: Array<CurrentMoneyType>
    onClickFilteredHandler: (nameButton: FilterButton) => void
}

export type CurrentMoneyType = {
    banknots: string
    value: number
    number: string
}


export const FilterForMoney = (props: FilterForMoneyType) => {

    const ButtonForMoney = (nameButton: FilterButton) => {
        props.onClickFilteredHandler(nameButton)
    }

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
            <div>
                <ButtonForFilter name={'Rubles'} callback={() => ButtonForMoney('Rubles')}/>
                <ButtonForFilter name={'Dollars'} callback={() => ButtonForMoney('Dollars')}/>
                <ButtonForFilter name={'All'} callback={() => ButtonForMoney('All')}/>
            </div>
        </>
    );
};
