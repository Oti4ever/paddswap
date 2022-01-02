import { GlobalStyleContainer } from "../GlobalStyle/GlobalStyleContainer"
import BeIcon from "../../images/be.png"
import InfoIcon from '../../images/infoCircleIcon.png'
import './Liquidity.css'

import Btc from '../../images/Btc.png'
import Ethereum from '../../images/Ethereum.png'
import ArrowdownIcon from '../../images/arrowDownIcon.png'


// creating Helper functions for Liquidity
// the Amount Helper function for Liquidity

type AmountHelperFunctionProps = {
    title?: string
    value?: number
    amountCoinName?: string
    variant?: 'yes' | 'no'
    amount?: number
    coinName?: string
    iconName?: string
}

export const AmountHelperFunction = (
    {
        title,
        value,
        amount,
        variant,
        coinName,
        amountCoinName,
        iconName
    }: AmountHelperFunctionProps) => {
    return (
        <div className="amount__values">
            <div className="amount__top">
                <div className="amount__flex">
                    <p className="amount-name">{title}</p>
                    <img className="info__icon" src={InfoIcon} alt="info Icon" />
                </div>
                {
                    variant === 'yes' ? (
                        <p className="amount-name">Available : {amount} {amountCoinName}</p>
                    ) : ""
                }
                
            </div>

            <div className="amount__top">
                {/* <p className="amount__value">{value}</p> */}
                <input  className="amount__value"  placeholder="0.0" type="number" />
                <div className="amount__flex">
                    <img className="icon__image" src={iconName} alt="icon" />
                    <p className="coin__name">{coinName}</p>
                    
                    {/* <div > */}
                        <img className="arrow__down" src={ArrowdownIcon} alt="arrowDown icon" />
                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}

// Summary Helper function for Liquidity
type SummaryHelperFunctionProps = {
    name: string
    variant: 'primary' | 'secondary'
    value: string | number
}

export const SummaryHelperFunction = ({name, variant, value} : SummaryHelperFunctionProps) => {
    return <div className="summary__values">
        <p className="summary-name">{name}</p>
        {/* conditional rendering to add perecntages to the values or not */}
        {
            variant === 'primary' ? (
                <p className={`summary-${variant}`}>{value}%</p>
            ) : <p className={`summary-${variant}`}>{value}</p>
        }
    </div>
}


export const Liquidity = () => {
    return (
        <>
            <GlobalStyleContainer
                variable = "value"
                globalName="Liquidity"
                titleLeft="Select a pool"
                coinName='BTC/ETH'
                imageName={BeIcon}
                buttonText= "Add Liquidity"
            >

                <AmountHelperFunction
                    variant="yes"
                    title= "Amount"
                    amount={0.000373}
                    value={0.021}
                    amountCoinName = "BTC"
                    coinName="BTC"
                    iconName= {Btc}
                />

                <AmountHelperFunction
                    variant="yes"
                    title= "Amount"
                    amount={0.000373}
                    amountCoinName = "BTC"
                    value={0}
                    coinName="ETH"
                    iconName= {Ethereum}
                />

                <div className="liquidity__summary">
                    <p>Summary</p>

                    <SummaryHelperFunction
                        variant='secondary'
                        name='Current Pool Size:'
                        value='1,724.34 BTC + 24,441.84 ETH'
                    />

                    <SummaryHelperFunction
                        variant='primary'
                        name='Expected Yield:'
                        value={12}
                    />
                
                </div>

                
            </GlobalStyleContainer>
        </>

    )
}