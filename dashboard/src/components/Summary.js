import { useEffect } from 'react';
import axios from 'axios';
import PieChartOutlineIcon from '@mui/icons-material/PieChartOutline';
import DataSaverOffIcon from '@mui/icons-material/DataSaverOff';
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import { formatCompactNumber, getStockUpDown } from '../utilsFunc/utils';
import { useData } from '../context/DataContext';

function Summary() {

    const {data} = useData();
    console.log("data in AuthContext: ", data)

    return ( 
        <div className='summary-conatiner'>
            <h2 className='fs-3 fs-md-4 fw-light mb-5 me-3 pb-4 align-self-center border-bottom'>Hi, Demo</h2>

            <div className='equity-commodity-container d-flex flex-wrap justify-content-around border-bottom mb-5'>
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
                    
            </div>


            <div className='holdings-section-container ms-5'>
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

        </div>
    );
}

export default Summary;