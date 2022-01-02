import React from 'react'
import { Route, Routes } from "react-router"
import { Bridge } from "./component/Bridge/Bridge"
import { Chart } from "./component/Chart/Chart"
import { Dashboard } from "./component/Dashboard/Dashboard"
import Header from "./component/Header/Header"
import { Launchpad } from "./component/Launchpad/Launchpad"
import { Liquidity } from "./component/Liquidity/Liquidity"
import { Swap } from "./component/Swap/Swap"

export const Layout = () => {
    

    return (
        <>
            <div className="right__container">
                <Header />
                <Routes>
                    <Route path='/' element={ <Dashboard/> } />
                    <Route path='/bridge' element={ <Bridge/> } />
                    <Route path='/liquidity' element={ <Liquidity/> } />
                    <Route path='/swap' element={<Swap />} />
                    <Route path='/chart' element={<Chart />} />
                    <Route path='/chart' element={ <Launchpad/> } />
                </Routes>
                
                
            </div>
        </>
    )
}


//   <div className="right__container">
//         {/* <Routes> */}
//         <Header />
//         {/* <Route path="/*" element = {} /> */}

//         {/* <Dashboard /> */}
//         {/* <Swap /> */}
//         {/* <Bridge /> */}
        
//         {/* Global Popup styles for the successful Swap*/}
//         {/* <GlobalPopupStyles
//           popupImage={VerifiedIcon}
//           popupTitle='Swap Successful'
//           popupText="The transaction has been successfully processessed in the liquidity pool. The transfer may still be in process. Please check the transaction record later."
          
//           firstChildComponent= {
//             <Button
//               btnSize={12}
//               variant='secondary'
              
//             >
//               Make a swap
//             </Button>
//           }

//           secondChildComponent= {
//             <Button
//               btnSize={12}
//               variant='tertiary'
//             >
//               View history
//             </Button>
//           }
//         /> */}

//         {/* Global Popup styles for the Risk info details*/}
//         {/* <GlobalPopupStyles
//           popupImage={RiskIcon}
//           popupTitle='Risk Warning'
//           popupText="adding liquidity into a liquid pool and becoming a liquidity provider
//                       is not risk-free. When the market price of tokens fluctuates greatly, the staking
//                       income may be lower than the income of ordinary holding of the tokens,
//                       and losses may even occur. For more details about the principle of Liquidity, please refer to Binance Liquidity Swap Terms of Use.
//                       cancel continue
//                     "
          
//           firstChildComponent= {
//             <Button
//               btnSize={12}
//               variant='secondary'
              
//             >
//               Cancel
//             </Button>
//           }

//           secondChildComponent= {
//             <Button
//               btnSize={12}
//               variant='tertiary'
//             >
//               Continue
//             </Button>
//           }
//         /> */}

//         {/* Global Popup styles for the successful liquidity addition */}
//         {/* <GlobalPopupStyles
//           popupImage={VerifiedIcon}
//           popupTitle='Liquidity Added'
//           popupText="The transaction has been successfully processed in the liquidity pool. The transfer may still be in process. Please check the transaction record later"
          
//           firstChildComponent= {
//             <Button
//               btnSize={12}
//               variant='secondary'
              
//             >
//               Make a swap
//             </Button>
//           }

//           secondChildComponent= {
//             <Button
//               btnSize={12}
//               variant='tertiary'
//             >
//               View history
//             </Button>
//           }
//         /> */}

//         {/* General Styles for tables */}
//         {/* <Tables />
        
//         <Liquidity />
//         <Swap/> */}

//         {/* </Routes> */}
//       {/* </div> */}