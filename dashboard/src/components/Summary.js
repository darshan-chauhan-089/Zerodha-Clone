import { useEffect, useState } from 'react';
import axios from 'axios';
import PieChartOutlineIcon from '@mui/icons-material/PieChartOutline';
import DataSaverOffIcon from '@mui/icons-material/DataSaverOff';
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import { formatCompactNumber, getDisplayNone, getDisplayNoneInline, getStockUpDown } from '../utilsFunc/utils';
import { useData } from '../context/DataContext';
import { useAuth } from '../context/AuthContext';
import Wallet from './Wallet'
import {useNavigate, Link} from 'react-router-dom';
// import { Link } from 'react-router-dom';

function Summary() {

    const navigate = useNavigate();
    const {data, tradesData} = useData();
    const {user} = useAuth();
    console.log("user in AuthContext: ",  user);

    const [fadeInInfoOnChart, setFadeInInfoOnChart] = useState({
        lineChart: false,
        doughnutChart: false,
    });

    const handleEnter = (str) => {
        console.log("str" , str);
        let obj = {...fadeInInfoOnChart};
        obj[str] = true;
        console.log("In enter" , obj);
        setFadeInInfoOnChart(obj)
    }
    const handleLeave = (str) => {
        let obj = {...fadeInInfoOnChart};
        obj[str] = false;
        console.log("In leave" , obj);
        setFadeInInfoOnChart(obj);
    }

    return ( 
        <div className='summary-conatiner'>
            <h2 className='fs-3 fs-md-4 fw-light mb-4 me-3 pb-4 align-self-center border-bottom'>Hi, {user.username}</h2>

            {/* <div className='equity-commodity-container d-flex flex-wrap justify-content-around border-bottom mb-5'>
                <div className='text-nowrap mb-5'>
                    <p className='fs-5 d-inline'>
                        <PieChartOutlineIcon style={{position: "relative", top: "-1px", marginRight: '0.8rem'}}></PieChartOutlineIcon>
                        Equity</p>
                        <div className=' mt-4 d-flex'>
                            <div className='me-2 pe-3'>
                                <p className='fs-1 fw-light mb-1'>1L</p>
                                <p className='font-size-85 text-muted'>Margin available</p>
                            </div>
                            <div className='px-4 py-1 d-flex flex-column justify-content-between border-start'>
                                <p className='font-size-85 text-muted mb-0'>Margings used : <span className='text-black'>0</span></p>
                                <p className='font-size-85 text-muted mb-0'>Opening balance : <span className='text-black'>1L</span></p>
                                <a href="" className=' font-size-85 link-underline link-underline-opacity-0'>
                                    <DataSaverOffIcon style={{fontSize: "0.9rem", position: "relative", top: "-1px", marginRight: '0.2rem'}}>

                                    </DataSaverOffIcon>
                                View statement</a>
                            </div>
                        </div>
                </div>
                <div className='text-nowrap mb-5'>
                    <p className='fs-5 d-inline'>
                        <WaterDropOutlinedIcon style={{position: "relative", top: "-1px", marginRight: '0.8rem', zIndex: "1"}}></WaterDropOutlinedIcon>
                        Commodity</p>
                        <div className=' mt-4 d-flex'>
                            <div className='me-2 pe-3'>
                                <p className='fs-1 fw-light mb-1'>50k</p>
                                <p className='font-size-85 text-muted'>Margin available</p>
                            </div>
                            <div className='px-4 py-1 d-flex flex-column justify-content-between border-start'>
                                <p className='font-size-85 text-muted mb-0'>Margings used : <span className='text-black'>0</span></p>
                                <p className='font-size-85 text-muted mb-0'>Opening balance : <span className='text-black'>50k</span></p>
                                <a href="" className=' font-size-85 link-underline link-underline-opacity-0'>
                                    <DataSaverOffIcon style={{fontSize: "0.9rem", position: "relative", top: "-1px", marginRight: '0.2rem'}}>

                                    </DataSaverOffIcon>
                                View statement</a>
                            </div>
                        </div>
                </div>
                    
            </div> */}


            <div className='equity-commodity-container d-flex flex-wrap justify-content-around pb-5'>
                <div className='holdings-section-container ms-5 align-self-center mb-5 mb-md-0'>
                    <p className='fs-5 d-inline '>
                            <BusinessCenterOutlinedIcon style={{position: "relative", top: "-1px", marginRight: '0.8rem'}}></BusinessCenterOutlinedIcon>
                            Holdings</p>

                    <div className='d-flex mt-3'>
                        <div className='me-5'>
                            <p className={`fs-1 fw-light mb-1 ${getStockUpDown(data?.holdingsTotalData?.totalProfitLoss)}`}>{formatCompactNumber(data?.holdingsTotalData?.totalProfitLoss)}</p>
                            <p className='font-size-85 text-muted'>P&L</p>
                        </div>
                        <div className='ms-5 px-4 py-1 d-flex flex-column justify-content-around border-start'>
                            <p className='font-size-85 text-muted mb-0'>Current value: <span className='text-black'>{formatCompactNumber(data?.holdingsTotalData?.totalCurrentValue)}</span></p>
                                    <p className='font-size-85 text-muted mb-0'>investment: <span className='text-black'>{formatCompactNumber(data?.holdingsTotalData?.totalInvestment)}</span></p>
                        </div>
                    </div>
                </div>

                {/* <div className='vertical-border'></div> */}

                <Wallet />
            </div>

            <div className='graph-container d-flex flex-wrap justify-content-around'
            style={{width: '100%'}}>
                
                <div className='mb-5 mb-md-0 position-relative'>

                    <div className='position-absolute chart-option-container' style={{width: '100%', height: '100%'}}
                    onMouseEnter={() => handleEnter("lineChart")} onMouseLeave={() => handleLeave("lineChart")}>
                    {console.log("Summary: ", data?.holdings)}
                        {
                            tradesData && tradesData[0] === "empty" ? 
                                <p className={`chart-option-msg text-danger position-absolute z-3 mb-0 text-center
                                    ${getDisplayNoneInline(fadeInInfoOnChart.lineChart)}`}
                                style={{top: "48%", left: '25%', cursor: 'default'}}>Place a trade to explore your charts</p> : 
                                <button className={`btn btn-primary position-absolute z-3  ${getDisplayNoneInline(fadeInInfoOnChart.lineChart)}`}
                                style={{top: "39%", left: '44%'}} onClick={() => navigate(`/${user.id}/trades`)}>Explore</button>
                                // <Link to={`${user.id}/trades`}className={`btn btn-primary position-absolute z-3 ${getDisplayNoneInline(fadeInInfoOnChart.lineChart)}`}  
                                // style={{ top: "53%", left: "37%" }}> Explore</Link>
                        }
                    </div>
                    <img src='.././media/chart_of_trades.png'
                    id='trade-img' style={{height: "290px" ,width: "420px", marginTop: '10px'}}>
                        
                    </img>
                </div>
                <div className='position-relative'>
                    <div className='position-absolute chart-option-container' style={{width: '100%', height: '100%'}}
                    onMouseEnter={() => handleEnter("doughnutChart")} onMouseLeave={() => handleLeave("doughnutChart")}>
                    {console.log("Summary: ", data?.holdings)}
                        {
                            data?.holdings && data?.holdings[0] === "empty" ? 
                                <p className={`chart-option-msg text-danger position-absolute z-3 mb-0 text-center
                                    ${getDisplayNoneInline(fadeInInfoOnChart.doughnutChart)}`}
                                style={{top: "56%", left: '3%', cursor: 'default'}}>Place a order to explore your charts</p> : 
                                <button className={`btn btn-primary position-absolute z-3  ${getDisplayNoneInline(fadeInInfoOnChart.doughnutChart)}`}
                                style={{top: "56%", left: '36%'}} onClick={() => navigate(`/${user.id}/holdings`)}>Explore</button>
                        }
                    </div>
                    <img src='.././media/chart_of_holdings.png'
                        id='holding-img' 
                        className='' style={{height: '310px', width: '255px'}}>
                    </img>
                </div>
            </div>

        </div>
    );
}

export default Summary;