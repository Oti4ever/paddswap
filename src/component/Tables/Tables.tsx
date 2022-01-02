import './Tables.css'
import { Button } from '../CustomButton/Button'
import ET from '../../images/et.png'
import TT from '../../images/tt.png'
import TE from '../../images/te.png'
import HB from '../../images/hb.png'
import Top from '../../images/top.png'


export const Tables = () => {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Pool
                            <img src={Top} alt="" />
                        </th>
                        <th>Liquidity 
                            <img src={Top} alt="" />
                        </th>
                        <th>Tool Yield 
                            <img src={Top} alt="" />
                        </th>
                        <th>Reward Coins</th>
                        <th>Volume (24hr)</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        <img src={TE} alt="" />
                        USDT/ETH
                    </td>
                    <td>5,876,870 USD
                        <span>2,876,870 ETH + 2,456 PHA</span>
                    </td>
                    <td>7.9%</td>
                    <td>BTC</td>
                    <td>432.985 USD</td>
                    <td><Button variant='tertiary' btnSize={8}>
                            Swap
                        </Button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <img src={TE} alt="" />
                        USDT/ETH
                    </td>
                    <td>5,876,870 USD
                        <span>2,876,870 ETH + 2,456 PHA</span>
                    </td>
                    <td>7.9%</td>
                    <td>BTC</td>
                    <td>432.985 USD</td>
                    <td><Button variant='tertiary' btnSize={8}>
                            Swap
                        </Button>
                    </td>
                </tr>
                
                <tr>
                    <td>
                        <img src={HB} alt="" />
                        USDT/ETH
                    </td>
                    <td>5,876,870 USD
                        <span>2,876,870 ETH + 2,456 PHA</span>
                    </td>
                    <td>7.9%</td>
                    <td>BTC</td>
                    <td>432.985 USD</td>
                    <td><Button variant='tertiary' btnSize={8}>
                            Swap
                        </Button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <img src={TT} alt="" />
                        USDT/ETH
                    </td>
                    <td>5,876,870 USD
                        <span>2,876,870 ETH + 2,456 PHA</span>
                    </td>
                    <td>7.9%</td>
                    <td>BTC</td>
                    <td>432.985 USD</td>
                    <td><Button variant='tertiary' btnSize={8}>
                            Swap
                        </Button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <img src={ET} alt="" />
                        USDT/ETH
                    </td>
                    <td>5,876,870 USD
                        <span>2,876,870 ETH + 2,456 PHA</span>
                    </td>
                    <td>7.9%</td>
                    <td>BTC</td>
                    <td>432.985 USD</td>
                    <td><Button variant='tertiary' btnSize={8}>
                            Swap
                        </Button>
                    </td>
                </tr>
                
                </tbody>
            </table>

        </>
    )
}