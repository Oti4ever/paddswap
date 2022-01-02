import './Header.css'
import SearchIcon from '../../images/searchIcon.png'

const Header = () => {

    return (

        <>
            <nav>

                <div className="header__left">
                    <h3>PADD: <span>$526</span></h3>
                </div>

                <div className="header__right">
                    <div className="search__container">
                        <img src={SearchIcon} alt="search Icon" />
                        <input
                            type="text"
                            placeholder="Search by token name, symbol, pair contract or token"
                        />
                    </div>

                    <button>Connect Wallet</button>
                </div>

            </nav>
        </>
    )
}

export default Header