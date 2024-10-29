import { useState } from "react"
import { Bottomactions, Footer, Header } from "./components"

function App() {

  const [open, setOpen] = useState(false);

  return (
    <div className={`root ${open ? "open" : ""}`}>
    <Header open={open} setOpen={setOpen}/>
    <main className="main">
      <Bottomactions />
    </main>
    <Footer />
    </div>
  )
}

export default App
