
import './index.css'
import {BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/PageIndex"
import {Navbar,Sidebar} from "./Components/CompIndex"
import Crops from "./Components/Crops"; 
function App() {


  return (
    <>
   
    
    <BrowserRouter>
    <Navbar/>
    <Sidebar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Crops' element={<Crops/>}/>
      </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
