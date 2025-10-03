import React from 'react';
import CreateTicketParts from "./CreateTicketParts";
function CreateTicket(){
    return(
        <div className='container mt-5'>
            <h4 className="text-muted px-md-5 mb-5"
                style={{fontWeight: "400"}}>
                To create a ticket, select a relevant topic
            </h4>
            
            <div className='row mb-3 px-md-5 justify-content-center'>

                <CreateTicketParts 
                    linkData = {[
                        ["Resident Individual" ,
                        "https://support.zerodha.com/category/account-opening/resident-individual"
                        ] ,
                        ["Minor" ,
                        "https://support.zerodha.com/category/account-opening/minor"
                        ] ,
                        [
                            "Non Resident Indian (NRI)",
                            "https://support.zerodha.com/category/account-opening/nri-account-opening"
                        ],
                        [
                            "Company, Partnership, HUF and LLP",
                            "https://support.zerodha.com/category/account-opening/company-partnership-and-huf-account-opening"
                        ],
                        [
                            "Glossary",
                            "https://support.zerodha.com/category/account-opening/glossary"
                        ]
                    ]}
                    headingData={["Account Opening", "https://support.zerodha.com/category/account-opening/getting-started"]}
                    icon={"fa fa-plus-circle me-2"}
                />

                <CreateTicketParts 
                    linkData = {[
                        [
                            "Your Profile",
                            "https://support.zerodha.com/category/your-zerodha-account/your-profile"
                        ],
                        [
                            "Account modification",
                            "https://support.zerodha.com/category/your-zerodha-account/account-modification-and-segment-addition"
                        ],
                        [
                            "Client Master Report (CMR) and Depository Participant (DP)",
                            "https://support.zerodha.com/category/your-zerodha-account/dp-id-and-bank-details"
                        ],
                        [
                            "Nomination",
                            "https://support.zerodha.com/category/your-zerodha-account/nomination-process"
                        ],
                        [
                            "Transfer and conversion of securities",
                            "https://support.zerodha.com/category/your-zerodha-account/transfer-of-shares-and-conversion-of-shares"
                        ]
                    ]}
                    headingData={["Your Zerodha Account", "https://support.zerodha.com/category/your-zerodha-account/login-credentials"]}   
                    icon={"fa fa-user-o me-2"}
                />  {/* after creating the profile page update only above data*/}
                <CreateTicketParts 
                    linkData = {[
                        [
                            "IPO",
                            "https://support.zerodha.com/category/trading-and-markets/ipo"
                        ],
                        [
                            "Trading FAQs",
                            "https://support.zerodha.com/category/trading-and-markets/trading-faqs"
                        ],
                        [
                            "Margin Trading Facility (MTF) and Margins",
                            "https://support.zerodha.com/category/trading-and-markets/margins"
                        ],
                        [
                            "Charts and orders",
                            "https://support.zerodha.com/category/trading-and-markets/charts-and-orders"
                        ],
                        [
                            "Alerts and Nudges",
                            "https://support.zerodha.com/category/trading-and-markets/alerts-and-nudges"
                        ],
                        [
                            "General",
                            "https://support.zerodha.com/category/trading-and-markets/general-kite"
                        ]
                    ]}
                    headingData={["Kite", "https://support.zerodha.com/category/trading-and-markets/kite-web-and-mobile"]}
                    icon={"fa fa-bar-chart me-2"}
                />
                <CreateTicketParts 
                    linkData = {[
                        [
                            "Add money",
                            "https://support.zerodha.com/category/funds/adding-funds"
                        ],
                        [
                            "Withdraw money",
                            "https://support.zerodha.com/category/funds/fund-withdrawal"
                        ],
                        [
                            "Add bank accounts",
                            "https://support.zerodha.com/category/funds/adding-bank-accounts"
                        ],
                        [
                            "eMandates",
                            "https://support.zerodha.com/category/funds/mandate"
                        ]
                    ]}
                    headingData={["Funds", "https://support.zerodha.com/category/funds/adding-funds"]}
                    icon={"fa fa-square-o me-2"}
                />
                
                <CreateTicketParts 
                    linkData = {[
                        [
                            "Portfolio",
                            "https://support.zerodha.com/category/console/portfolio"
                        ],
                        [
                            "Corporate actions",
                            "https://support.zerodha.com/category/console/corporate-actions"
                        ],
                        [
                            "Funds statement",
                            "https://support.zerodha.com/category/console/ledger"
                        ],
                        [
                            "Reports",
                            "https://support.zerodha.com/category/console/reports"
                        ],
                        [
                            "Profile",
                            "https://support.zerodha.com/category/console/profile"
                        ],
                        [
                            "Segments",
                            "https://support.zerodha.com/category/console/segments"
                        ]
                    ]}
                    headingData={["Console", "https://support.zerodha.com/category/console/portfolio"]}
                    icon={"fa fa-circle-thin rotate-90 me-2"}
                />
                <CreateTicketParts 
                    linkData = {[
                        [
                            "Mutual funds",
                            "https://support.zerodha.com/category/mutual-funds/understanding-mutual-funds"
                        ],
                        [
                            "National Pension Scheme (NPS)",
                            "https://support.zerodha.com/category/mutual-funds/nps"
                        ],
                        [
                            "Features on Coin",
                            "https://support.zerodha.com/category/mutual-funds/features-on-coin"
                        ],
                        [
                            "Payments and Orders",
                            "https://support.zerodha.com/category/mutual-funds/payments-and-orders"
                        ],
                        [
                            "General",
                            "https://support.zerodha.com/category/mutual-funds/coin-general"
                        ]
                    ]}
                    headingData={["Coin", "https://support.zerodha.com/category/mutual-funds/understanding-mutual-funds"]}
                    icon={"fa fa-connectdevelop me-2"}
                />
            </div>

        </div> 
    );

}

export default CreateTicket;