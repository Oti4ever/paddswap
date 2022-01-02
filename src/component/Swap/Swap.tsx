import { GlobalStyleContainer } from '../GlobalStyle/GlobalStyleContainer'
import { AmountHelperFunction } from '../Liquidity/Liquidity'
import './Swap.css'

import Bnb from '../../images/Bnb.png'
import SwapIcon from '../../images/Swap.png'
import CakeIcon from '../../images/cake.png'


// type SwapHelperFunctionProps = {
//     name: string
//     variant: 'primary' | 'secondary' 
//     value: string | number
// }

// export const SwapHelperFunction = ({name, variant, value} : SwapHelperFunctionProps) => {
//     return <div className="summary__values">
//         <p className="summary-name">{name}</p>
//         {/* conditional rendering to add perecntages to the values or not */}
//         {
//             variant === 'primary' ? (
//                 <p className={`summary-${variant}`}>{value}</p>
//             ) : <p className={`summary-${variant}`}>{value}</p>
//         }
//     </div>
// }


export const Swap = () => {
    return (
        <>
            <GlobalStyleContainer
                variable = "noValue"
                globalName= "Swap"
                buttonText= "Swap"
            >
            
                <AmountHelperFunction
                    title="Swap From"
                    variant="yes"
                    amount={50.43}
                    value={0}
                    amountCoinName="BNB"
                    coinName="BNB"
                    iconName= {Bnb}
                />

                <div className="swap__iconContainer">
                    <img src={SwapIcon} alt="icon" />
                </div>

                <AmountHelperFunction
                    title="Swap To"
                    variant="no"
                    amount={50.43}
                    value={0}
                    coinName="CAKE"
                    iconName= {CakeIcon}
                />
                
                <p>Summary</p>
                
                <div className="summary__values">
                    <p className="summary-name">Price:</p>
                    <p className="summary-with-primary">1BNB = 25 BTC</p>
                </div>
                <div className="summary__values">
                    <p className="summary-name">Spillage:</p>
                    <p className="summary-with-primary">0% SPILLAGE</p>
                </div>
                <div className="summary__values">
                    <p className="summary-name">Fee(0.2%):</p>
                    <p className="summary-with-primary">0.0 BNB</p>
                </div>

                

            </GlobalStyleContainer>
        </>
    )
}

