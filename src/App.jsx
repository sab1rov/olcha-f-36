// import { Footer, Header } from "./components";

import "./assets/scss/main.scss";
import PhoneCards from "./components/Main/PhoneCards/PhoneCards";
import Product from "./components/Main/Product/Product";

function App() {
  return (
    <>
      {/* <Header /> */}
      <main className="main">
        <PhoneCards />
        <Product />
      </main>
    </>
  );
}

export default App;
