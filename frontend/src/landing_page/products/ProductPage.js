import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductPage(){
    return(
        <>
            <Hero />

            <LeftSection
                
                imageURL="media/images/kite.png"
                ProductName="Kite"
                description="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
                googlePlayStore="https://play.google.com/store/apps/details?id=com.zerodha.kite3"
                appStore="https://apps.apple.com/in/app/zerodha-kite-trade-invest/id1449453802"
                tryDemo="https://kite-demo.zerodha.com"
                learnMore="https://zerodha.com/products/kite"

             />
            <RightSection 
                imageURL="media/images/console.png"
                ProductName="Console"
                description="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
                btn="Learn More"
                btnUrl="https://zerodha.com/products/console"
            />
            <LeftSection

                imageURL="media/images/coin.png"
                ProductName="Coin"
                description="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
                googlePlayStore="https://play.google.com/store/apps/details?id=com.zerodha.coin"
                appStore="https://apps.apple.com/in/app/coin-by-zerodha/id1392892554"
                tryDemo="https://coin.zerodha.com"
                learnMore="https://coin.zerodha.com"

             />
            <RightSection 
                imageURL="media/images/console.png"
                ProductName="Console"
                description="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
                btn="Kite Connect"
                btnUrl="https://zerodha.com/products/api/"
            />
            <LeftSection

                imageURL="media/images/kiteconnect.png"
                ProductName="Varsity mobile"
                description="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
                googlePlayStore="https://play.google.com/store/apps/details?id=com.zerodha.varsity"
                appStore="https://apps.apple.com/in/app/varsity-by-zerodha/id1474610753"
                tryDemo="#"
                learnMore="#"

             />
            <Universe />
        </>
    );

}

export default ProductPage;