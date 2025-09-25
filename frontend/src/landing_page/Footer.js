import React from 'react';
import {Link} from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Footer() {
    const {user} = useAuth();
    return ( 
        <div className='container py-5 border-top '>
            <div className='row'>

                <div className='col-0 col-sm-1'></div>
                <div className='col-sm-12 col-md-3 mb-4'>
                    <img alt="" className='mb-3' style={{width: "8rem" , position: "relative" , top: "-2px"}} src='media/images/logo.svg'></img>
                    <p className='text-muted border-bottom pb-3'>
                    © 2010 - 2025, Zerodha Broking Ltd.<br />All rights reserved.
                    </p>
                    <ul className='social-media-link-wrapper list-unstyled d-flex mt-2 pb-3'>
                        {/* Upadate above links with your social media accounts.*/ }
                        <li className='pe-2'>
                            <Link to="https://linkedin.com/company/zerodha">
                            <i className="fa-brands fa-linkedin-in fs-5 text-black text-muted"></i>
                            </Link>
                        </li>
                        <li className='px-2'>
                            <Link to="https://facebook.com/zerodha.social" >
                                <i className="fa-brands fa-github fs-5 text-black text-muted"></i>
                            </Link>
                        </li>
                        <li className='px-2'>
                            <Link to="https://twitter.com/zerodhaonline" >
                                <i className="fa-brands fa-twitter fs-5 text-black text-muted"></i>
                            </Link>
                        </li>
                        <li className='px-2'>
                            <Link to="https://instagram.com/zerodhaonline/" >
                                <i className="fa-brands fa-instagram fs-5 text-black text-muted"></i>
                            </Link>
                        </li>

                    </ul>
                </div>
                


                <div className='col-sm-6 col-md-2 mb-3'>
                    <ul className='list-unstyled'>
                        <li className='fs-5 h6 mb-1'>Account</li>
                        {
                            user ? "" : 
                            <li className='py-2'>
                                <Link className='link-underline text-dark fw-normal link-underline-opacity-0'>
                                    Open demant account
                                </Link>
                            </li>
                        }

                        <li className='py-2'>
                            <Link className='link-underline text-dark fw-normal link-underline-opacity-0'>
                                Minor demant account
                            </Link>
                        </li>
                        <li className='py-2'>
                            <Link className='link-underline text-dark fw-normal link-underline-opacity-0'>
                                NRI demant account
                            </Link>
                        </li>
                        <li className='py-2'>
                            <Link className='link-underline text-dark fw-normal link-underline-opacity-0'>
                                Commodity
                            </Link>
                        </li>
                        <li className='py-2'>
                            <Link className='link-underline text-dark fw-normal link-underline-opacity-0'>
                                Dematerialization
                            </Link>
                        </li>
                        <li className='py-2'>
                            <Link className='link-underline text-dark fw-normal link-underline-opacity-0'>
                                Fund transfer
                            </Link>
                        </li>
                        <li className='py-2'>
                            <Link className='link-underline text-dark fw-normal link-underline-opacity-0'>
                                MTF
                            </Link>
                        </li>
                        <li className='py-2'>
                            <Link className='link-underline text-dark fw-normal link-underline-opacity-0'>
                                Referral program
                            </Link>
                        </li>
                        
                    </ul>
                </div>


                <div className='col-sm-6 col-md-2 mb-3'>
                    <ul className='list-unstyled'>
                        <li className='fs-5 h6 mb-1'>Support</li>
                        <li className='py-2'>
                            <Link className='link-underline text-dark fw-normal link-underline-opacity-0'>
                                Contanct us
                            </Link>
                        </li>
                        <li className='py-2'>
                            <Link className='link-underline text-dark fw-normal link-underline-opacity-0'>
                                Support portal
                            </Link>
                        </li>
                        <li className='py-2'>
                            <Link className='link-underline text-dark fw-normal link-underline-opacity-0'>
                                How to file a cmplaint?
                            </Link>
                        </li>
                        <li className='py-2'>
                            <Link className='link-underline text-dark fw-normal link-underline-opacity-0'>
                                Status your complaints
                            </Link>
                        </li>
                        <li className='py-2'>
                            <Link className='link-underline text-dark fw-normal link-underline-opacity-0'>
                                Bulletain
                            </Link>
                        </li>
                        <li className='py-2'>
                            <Link className='link-underline text-dark fw-normal link-underline-opacity-0'>
                                Circular 
                            </Link>
                        </li>
                        <li className='py-2'>
                            <Link className='link-underline text-dark fw-normal link-underline-opacity-0'>
                                Z-Connect blog
                            </Link>
                        </li>
                        <li className='py-2'>
                            <Link className='link-underline text-dark fw-normal link-underline-opacity-0'>
                                Downloads
                            </Link>
                        </li>
                        
                    </ul>
                </div>

                <div className='col-sm-6 col-md-2 mb-3'>
                    <ul className='list-unstyled'>
                        <li className='fs-5 h6 mb-1'>Company</li>
                        <li className='py-2'>
                            <Link className='link-underline text-dark fw-normal link-underline-opacity-0'>
                                About
                            </Link>
                        </li>
                        <li className='py-2'>
                            <Link className='link-underline text-dark fw-normal link-underline-opacity-0'>
                                Philosophy
                            </Link>
                        </li>
                        <li className='py-2'>
                            <Link className='link-underline text-dark fw-normal link-underline-opacity-0'>
                                Press & media
                            </Link>
                        </li>
                        <li className='py-2'>
                            <Link className='link-underline text-dark fw-normal link-underline-opacity-0'>
                                careers
                            </Link>
                        </li>
                        <li className='py-2'>
                            <Link className='link-underline text-dark fw-normal link-underline-opacity-0'>
                                Zerodha Cares(CSR)
                            </Link>
                        </li>
                        <li className='py-2'>
                            <Link className='link-underline text-dark fw-normal link-underline-opacity-0'>
                                Zerodha.tech    
                            </Link>
                        </li>
                        <li className='py-2'>
                            <Link className='link-underline text-dark fw-normal link-underline-opacity-0'>
                                Open source
                            </Link>
                        </li>
                        
                    </ul>
                </div>

                <div className='col-sm-6 col-md-2 mb-3'>
                    <ul className='list-unstyled'>
                        <li className='fs-5 h6 mb-1'>Quick links</li>
                        <li className='py-2'>
                            <Link className='link-underline text-dark fw-normal link-underline-opacity-0'>
                                Upcoming IPOs
                            </Link>
                        </li>
                        <li className='py-2'>
                            <Link className='link-underline text-dark fw-normal link-underline-opacity-0'>
                                Brokerage charges
                            </Link>
                        </li>
                        <li className='py-2'>
                            <Link className='link-underline text-dark fw-normal link-underline-opacity-0'>
                                Market holidays
                            </Link>
                        </li>
                        <li className='py-2'>
                            <Link className='link-underline text-dark fw-normal link-underline-opacity-0'>
                                Economic calender 
                            </Link>
                        </li>
                        <li className='py-2'>
                            <Link className='link-underline text-dark fw-normal link-underline-opacity-0'>
                                Calculators
                            </Link>
                        </li>
                        <li className='py-2'>
                            <Link className='link-underline text-dark fw-normal link-underline-opacity-0'>
                                Markets
                            </Link>
                        </li>
                        <li className='py-2'>
                            <Link className='link-underline text-dark fw-normal link-underline-opacity-0'>
                                Sectors
                            </Link>
                        </li>

                    </ul>
                </div>

            </div>

            <div className='row justify-content-center'>
                {/* <div className='col-0 col-sm-1'></div> */}
                <div className='col-11'>
                    <p className='text-muted footer-description' >
                        Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository 
                        services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through 
                        Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered 
                        Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P 
                        Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking 
                        please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read 
                        the Risk Disclosure Document as prescribed by SEBI | ICF                
                    </p>
                    <p className='text-muted footer-description' >
                        Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints
                        on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal 
                        of the grievances             
                    </p>
                    <p className='text-muted footer-description' >
                        Smart Online Dispute Resolution | Grievances Redressal Mechanism
                    </p>
                    <p className='text-muted footer-description' >
                        Investments in securities market are subject to market risks; read all the related documents carefully before investing.
                    </p>
                    <p className='text-muted footer-description' >
                        Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge 
                        in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock
                         broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number 
                         to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL
                          every month.
                    </p>
                    <p className='text-muted footer-description mb-3' >
                        "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your 
                        stock brokers. Receive information of your transactions directly from Exchange on your mobile/email 
                        at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in 
                        securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund 
                        etc.), you need not undergo the same process again when you approach another intermediary." 
                        Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. 
                        Please write the Bank account number and sign the IPO application form to authorize your bank to 
                        make payment in case of allotment. In case of non allotment the funds will remain in your bank account.
                        As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others.
                        If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.
                    </p>

                    <ul className='list-unstyled list-inline text-center'>
                        <li className='hover-blue-change list-inline-item'>
                            <Link to="https://nseindia.com"
                             className='link-underline text-dark fw-normal link-underline-opacity-0 text-muted fs-10 pe-2 hover-blue-change mb-2'>
                            NSE</Link>
                        </li>
                        <li className='mb-2 list-inline-item'>
                            <Link to="https://nseindia.com"
                             className='link-underline text-dark fw-normal link-underline-opacity-0 text-muted fs-10 px-3 mb-2'>
                            BSE</Link>
                        </li>
                        <li className='mb-2 list-inline-item'>
                            <Link to="https://www.mcxindia.com/"
                             className='link-underline text-dark fw-normal link-underline-opacity-0 text-muted fs-10 px-3 mb-2'>
                            MCX</Link>
                        </li>
                        <li className='mb-2 list-inline-item'>
                            <Link
                             className='link-underline text-dark fw-normal link-underline-opacity-0 text-muted fs-10 px-3 mb-2'>
                            Terms & Conditions</Link>
                        </li>
                        <li className='mb-2 list-inline-item'>
                            <Link
                             className='link-underline text-dark fw-normal link-underline-opacity-0 text-muted fs-10 px-3 mb-2'>
                            Policies & procedures</Link>
                        </li>
                        <li className='mb-2 list-inline-item'>
                            <Link
                             className='link-underline text-dark fw-normal link-underline-opacity-0 text-muted fs-10 px-3 mb-2'>
                            Privacy & policy</Link>
                        </li>
                        <li className='mb-2 list-inline-item'>
                            <Link
                             className='link-underline text-dark fw-normal link-underline-opacity-0 text-muted fs-10 px-3 mb-2'>
                            Disclosure</Link>
                        </li>
                        <li className='mb-2 list-inline-item'>
                            <Link
                             className='link-underline text-dark fw-normal link-underline-opacity-0 text-muted fs-10 px-3 mb-2'>
                            For investor's attention</Link>
                        </li>
                        <li className='mb-2 list-inline-item'>
                            <Link
                             className='link-underline text-dark fw-normal link-underline-opacity-0 text-muted fs-10 px-3 mb-2'>
                            Investor charter</Link>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
     );
}

export default Footer;