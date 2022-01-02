import './GlobalStyleContainer.css'
import SettingsIcon from '../../images/settingsIcon.png'
import InfoIcon from '../../images/infoCircleIcon.png'
import ArrowdownIcon from '../../images/arrowDownIcon.png'

type GlobalStyleContainerProps = {
    variable : 'value' | 'noValue'
    globalName?: string
    coinName?: string
    imageName?: string
    titleLeft?: string
    buttonText?: string
    children?: React.ReactNode
    as?: React.ElementType
}

export const GlobalStyleContainer = (
    {
        variable,
        globalName,
        coinName,
        imageName,
        titleLeft,
        children,
        buttonText,
        as
    }: GlobalStyleContainerProps) => {
    
   const Component = as || `div`

    return(
        <Component className="global__stlyle">
            <div className="global__cardTop">
                <h3>{globalName}</h3>

                <div className='icon__Top'>
                    <img src={ SettingsIcon } alt="settings icon" />
                    <img src={ InfoIcon} alt="information icon" />
                </div>
            </div>

            {
                variable === 'value' ? (
                    <div>
                        <div className="global__title">
                            <h4>{titleLeft}</h4>
                        </div>

                        <div className="global__assets">
                            <div className="img">
                                <img src={imageName} alt={`${imageName} icon`} />
                                <h3 className="coinName">
                                    {coinName}
                                </h3>
                            </div>

                            <div className="Arrow__downIcon">
                                <img src={ArrowdownIcon} alt="Arrowdown icon" />
                            </div>
                        </div>
                        
                        {/* passing other children through the card */}
                        {children}

                        <button className='global__styleBtn'>{ buttonText }</button>
                    </div>
                    
                ) : <div>
                        <div className="global__title">
                            <h4>{titleLeft}</h4>
                        </div>
                        
                        {/* passing other children through the card */}
                        {children}

                        <button className='global__styleBtn'>{ buttonText }</button>
                    </div>
            }
            
        </Component>
    )
}

// Global Popup styles
type GlobalPopupStylesProps = {
    popupTitle: string
    popupImage:  string
    popupText: string
    firstChildComponent?: React.ReactNode
    secondChildComponent?: React.ReactNode
}

export const GlobalPopupStyles = (
    {
        popupImage,
        popupTitle,
        popupText,
        firstChildComponent,
        secondChildComponent
    }
    : GlobalPopupStylesProps) => {

    return <div className="popup__container">

        <div className="img__icon">
            <img src={popupImage } alt= {`${popupImage} icon`} />
        </div>

        <p className="popup__title">{ popupTitle}</p>
        <p>{popupText}</p>

        <div className='btn__container'>
            {firstChildComponent} {secondChildComponent}
        </div>

    </div>
}

