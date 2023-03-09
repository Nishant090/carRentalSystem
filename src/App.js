import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Header from"./components/header/header"
import Footer from "./components/footer/footer"
import Home from "./components/home/home"
function App() {
  return (
    <BrowserRouter>
<Header/>
<Routes>
    <Route extact path="/" element={<Home/>}/>
    
    </Routes>
<Footer/>
    </BrowserRouter>
  );
}

export default App;
