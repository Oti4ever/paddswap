import React, { useState } from 'react';
import './App.css';

import PaddLogo from './images/Paddlogo.png'
// import Header from './component/Header/Header';
import { ListItems } from './component/ListItems';
// import { Dashboard } from './component/Dashboard/Dashboard';
// import { Swap } from './component/Swap/Swap';
// import { Bridge } from './component/Bridge/Bridge';
// import { GlobalPopupStyles } from './component/GlobalStyle/GlobalStyleContainer';
// import { Button } from './component/CustomButton/Button';

// import  VerifiedIcon from './images/verifiedIcon.png'
// import  RiskIcon from './images/riskIcon.png'
// import { Tables } from './component/Tables/Tables';
// import { Liquidity } from './component/Liquidity/Liquidity';

import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import { Layout } from './Layout';

function App() {

  const [toggle, setToggle] = useState(true)

  const handleTrigger = () => {
    setToggle(() => !toggle)
  }


  return (
    <Router>

    <div className="app">
      
      <div className={`left__container ${toggle ? "" : 'show'}`}>
          <div className="logo__container">
            
          <NavLink to="/" className="link">
            <img src={PaddLogo} alt="Padd logo" />
          </NavLink>
        </div>

        <ul className="list__items">
          {
            ListItems.map((listItem) => {
              return (
                <li key={listItem.id}>
                  <NavLink
                    onClick={handleTrigger}
                    to={listItem.navLinkTo}
                    className={(navData) => navData.isActive ? "active__link" : "link"}          
                  >
                    <img src={listItem.image} alt={listItem.textDescription} />
                    <h3>{ listItem.text}</h3>
                  </NavLink>
                </li>
                
              )
            })
          }
        </ul>
      </div>

        <Routes>
          <Route path='/*' element={<Layout /> }/> 
        </Routes>
      
        <div
          className="burger__menu"
            onClick={handleTrigger}
          >
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
        </div>
    </div>
    </Router> 

  );
}

export default App;
