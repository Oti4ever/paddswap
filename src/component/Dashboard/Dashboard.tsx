import React from "react"
import './Dashboard.css'
import { Button } from "../CustomButton/Button"
import { Tables } from "../Tables/Tables"
import SearchIcon from '../../images/searchIcon.png'
import PaddIcon from '../../images/padd.png'
import BtcIcon from '../../images/Btc.png'
import EthIcon from '../../images/Ethereum.png'

type CardHelperFuctionProps = {
    iconImage: string
    iconName: string
    coinAmount: number
    equivalentValue: number
    percentageIncrease: number
    iconSymbol: string
}

const CardHelperFunction = ({
    iconImage,
    iconName,
    coinAmount,
    equivalentValue,
    iconSymbol,
    percentageIncrease
    }: CardHelperFuctionProps) => {
    
    return (
        <div className="card">
            <img className="card__img" src={iconImage} alt="" />
            <p className="icon__name">
                {iconName}
            </p>

            <h3 className="coin__amount">{coinAmount} {iconSymbol}</h3>
            <p>${ equivalentValue} <span>({percentageIncrease}%)</span></p>
        </div>

    )
}


export const Dashboard = () => {
    return (
        <>
            <div className="dashboard__top">

                <div className="top__left">
                    <h3>Portfolio Details</h3>
                </div>

                <div className="top__right">
                    <Button variant = 'primary'>
                        Deposit
                    </Button>
                    <Button variant = 'secondary'>
                        Withdraw
                    </Button>
                </div>
            </div>

            <div className="portfolio__details">
                <div className="portfolio__detailsLeft">
                    <div className="portfolio__title">
                        <p>Account Balance</p>
                        <h3>0.03738 BTC</h3>
                    </div>
                    <div className="portfolio__title">
                        <p>Estimated value</p>
                        <h3>$23,000</h3>
                    </div>
                </div>
                <div className="portfolio__detailsRight">
                    <CardHelperFunction
                        iconImage = {BtcIcon}
                        iconName =  "Bitcoin"
                        coinAmount={0.0000643}
                        iconSymbol= "BTC"
                        equivalentValue = {12345}
                        percentageIncrease = {35.76}
                    />
                    <CardHelperFunction
                        iconImage = {PaddIcon}
                        iconName =  "Bitcoin"
                        coinAmount={500000}
                        iconSymbol= "PADD"
                        equivalentValue = {12345}
                        percentageIncrease = {35.76}
                    />
                    <CardHelperFunction
                        iconImage = {EthIcon}
                        iconName =  "Bitcoin"
                        coinAmount={0.4}
                        iconSymbol= "ETH"
                        equivalentValue = {12345}
                        percentageIncrease = {35.76}
                    />

                    
                </div>

            
            </div>

            <div className="dashboard__input">
                <h3>Pair Overview</h3>
                <div className="search__containers">
                    <img src={SearchIcon} alt="search Icon" />
                        <input
                            type="text"
                            placeholder="Search by token name, symbol, pair contract or token"
                        />
                </div>
            </div>

            <Tables/>
        </>
    )
}