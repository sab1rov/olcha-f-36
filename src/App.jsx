import { useState } from "react";
import { Footer, Header, Login} from "./components";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import ComparisonPage from "./pages/ComparisonPage";
import { routes } from "./constants/routes";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className={`root ${open ? "open" : ""}`}>
      <Header open={open} setOpen={setOpen} />
      <main className="main">
         <Routes>
       {
        routes.map(item => (
          <Route path={item.path} element={item.element} key={item.id}/>
        )) }
         <Route path="/login" element={<Login />} />
         </Routes>
        
      </main>
      <Footer />
    </div>
  );
}

export default App;
