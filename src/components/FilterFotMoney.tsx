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

    const ButtonForRubles = (nameButton: FilterButton) => {
        // props.currentMoney.filter((filteredMoney)=>filteredMoney.banknots==='Rubles')
        props.onClickFilteredHandler(nameButton)
    }

    // const ButtonForDollars = (nameButton: FilterButton) => {
    //     props.onClickFilteredHandler(nameButton)
    // }
    //
    // const ButtonForAllMoney = (nameButton: FilterButton) => {
    //     props.onClickFilteredHandler(nameButton)
    // }

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
                <ButtonForFilter name={'Rubles'} callback={() => ButtonForRubles('Rubles')}/>
                <ButtonForFilter name={'Dollars'} callback={() => ButtonForRubles('Dollars')}/>
                <ButtonForFilter name={'All'} callback={() => ButtonForRubles('All')}/>
            </div>


        </>
    );
};
