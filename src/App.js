import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Header from"./components/header/header"
import Footer from "./components/footer/footer"
import Home from "./components/home/Home"
import CarDetails from "./components/Cars/CarDetail"
import Signup from './users/signup';
import Login from "./users/login"
function App() {
  return (
    <BrowserRouter>
<Header/>
<Routes>
    <Route extact path="/" element={<Home/>}/>
    <Route extact path="/signup" element={< Signup/>}/>
    <Route extact path="/login" element={< Login/>}/>
    <Route extact path="/cardetail" element={< CarDetails/>}/>
    </Routes>
<Footer/>
    </BrowserRouter>
  );
}

export default App;
