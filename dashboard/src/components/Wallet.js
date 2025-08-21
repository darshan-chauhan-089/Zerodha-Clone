import { useData } from "../context/DataContext";
import { getStockUpDown } from "../utilsFunc/utils";
function Wallet() {
    const {walletData} = useData();
    return ( 
        <div className="align-self-center border border-1 rounded-4 py-4"
        style={{width: "340px"}} >
            <p className='border-bottom fs-3 fs-md-4 fw-light pb-2 mb-3 px-5 text-center'>Wallet</p>
            <div className="container mt-0 mb-3 ps-5"
            style={{width: "100%"}}> 
                <div className="row mb-1">
                    <div className="col p-0">Granted</div>
                    <div className={`col p-0 ${getStockUpDown(1)}`}>: 10000000(1Cr)</div>
                </div>
                <div className="row mb-1">
                    <div className="col p-0">Available Balance</div>
                    <div className="col p-0">: {walletData?.availableBalance?.toFixed(2)}</div>
                </div>
                <div className="row mb-1">
                    <div className="col p-0">Total Amount Spent</div>
                    <div className="col p-0">: {walletData?.totalAmountSpent?.toFixed(2)}</div>
                </div>
                <div className="row mb-1">
                    <div className="col p-0">Net Profit/Loss</div>
                    <div className={`col p-0 ${getStockUpDown(walletData?.netProfitLoss)}`}>: {walletData?.netProfitLoss?.toFixed(2)}</div>
                </div>
            </div>
            {/* <ul className="list-unstyled mx-3 my-0">
                <li className="mb-2">Granted <span className={`${getStockUpDown(1)} mx-2`}>+1Cr</span></li>
                <li className="mb-2">Available Balance <span className={`ms-3`}>{walletData?.availableBalance}</span></li>
                <li className="mb-2">Total Amount Spent <span className={` ms-3`}>{walletData?.totalAmountSpent}</span></li>
                <li className="mb-2">Net Profit/Loss <span className={`${getStockUpDown(walletData?.netProfitLoss)} ms-3`}>{walletData.netProfitLoss}</span></li>
            </ul> */}
        </div>
     );
}

export default Wallet;