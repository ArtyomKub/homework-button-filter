import React, {useState} from 'react';
import './App.css';

type FilterButton = 'All' | 'Dollars' | 'Rubles'

function App() {

    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'Rubles', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'Rubles', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'Rubles', value: 50, number: ' v1234567890'},
    ])

    const [filterButton, setFilterButton] = useState<FilterButton>('All')

    const onClickFilteredHandler = (nameButton: FilterButton) => {
        setFilterButton(nameButton)
    }

    let currentMoney = money
    if (filterButton === 'Dollars') {
        currentMoney = money.filter((filteredMoney, index) => filteredMoney.banknots === 'Dollars')
    }
    if (filterButton === 'Rubles') {
        currentMoney = money.filter((filteredMoney, index) => filteredMoney.banknots === 'Rubles')
    }


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
}

export default App;
