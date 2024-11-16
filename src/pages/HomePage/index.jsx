import { Bottomactions, Brent } from "../../components";
import PhoneCards from "../../components/Main/PhoneCards/PhoneCards";
import Product from "../../components/Main/Product/Product";
import Card from "../../components/main/Card";



function HomePage() {
    return(
        <>
        <PhoneCards/>
        <Product/>
        <Bottomactions />
        {/* <BannerSwiper /> */}
        <Card/>
        {/* <Phones /> */}
        <Brent />
        </>
    )
};

export default HomePage