import { useState } from "react";
import { Bottomactions, Footer, Header, Brent } from "./components";
import PhoneCards from "./components/Main/PhoneCards/PhoneCards";
import Product from "./components/Main/Product/Product";
import Card from "./components/main/Card";
import BannerSwiper from "./components/main/BannerSlider";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className={`root ${open ? "open" : ""}`}>
      <Header open={open} setOpen={setOpen} />
      <main className="main">
        <PhoneCards />
        <Product />
        <Bottomactions />
        {/* <BannerSwiper /> */}
        <Card />
        {/* <Phones /> */}
        <Brent />
      </main>
      <Footer />
    </div>
  );
}

export default App;
