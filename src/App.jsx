import { useState } from "react"
import { Bottomactions, Footer, Header } from "./components"
import PhoneCards from "./components/Main/PhoneCards/PhoneCards";
import Product from "./components/Main/Product/Product";

function App() {

  const [open, setOpen] = useState(false);

  return (
    <div className={`root ${open ? "open" : ""}`}>
    <Header open={open} setOpen={setOpen}/>
    <main className="main">
    <PhoneCards />
        <Product />
      <Bottomactions />
    </main>
    <Footer />
    </div>
  )

}

export default App;
