import Home from "./home/Home"
import Header from "./componente/topo/Header";
import Footer from "./componente/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="">
    


          <BrowserRouter>
          <Header/>
            <Routes>
               <Route path="/"  element ={<Home/>}  />
               
            </Routes>
          <Footer/>
          </BrowserRouter>
      
    </div>
  );
}

export default App;
