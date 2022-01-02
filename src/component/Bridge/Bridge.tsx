import React from 'react'
import './Bridge.css'
import { GlobalStyleContainer } from '../GlobalStyle/GlobalStyleContainer'
import EthereumIcon from '../../images/Ethereum.png'
import ArrowdownIcon from '../../images/arrowDownIcon.png'
import TetherUsd from '../../images/Tether.png'
import Tether from '../../images/Tetherusd.png'

type HelperCardProps = {
    image: string
    name: string
    icon: string
}

const HelperCard = ({image, name, icon} : HelperCardProps) => {
    return (

        <>
            <div className="helperCard__container">
                <div className="helper__top">
                    <img src={image} alt={`${image} icon`} />
                </div>
                
                <div className="helper__bottom">
                    <h5>{name}</h5>
                    <div className="icon">
                        <img src={icon} alt={`${icon} icon`} />
                    </div>
                    
                </div>
            </div>
        </>
        
    )
}

export const Bridge = () => {
    return (
        <>

            <GlobalStyleContainer
                variable = "value"
                globalName="Bridge"
                titleLeft="Asset"
                coinName='Ethereum'
                imageName={EthereumIcon}
                buttonText= "Connect Bridge"
            >
                <div className="bridge__card">
                    <p className='from'>From</p>
                    <p className='to'>To</p>
                </div>

                <div className="bridge__cards">
                    <HelperCard
                        image= {Tether}
                        name='Tether USDT'
                        icon= {ArrowdownIcon}
                    />
                    <HelperCard
                        image= {TetherUsd}
                        name='Binance Smart Chain Network'
                        icon={ArrowdownIcon}
                    />
                </div>

                <div className="bridge__title">
                    <h4>Amount</h4>
                    <h4>$2000</h4>
                </div>

                <div className="bridge__input">
                    <input type="number" />
                </div>
                
            
            </GlobalStyleContainer>

        </>
    )
}
