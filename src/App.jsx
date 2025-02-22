
import './index.css'
import {BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/PageIndex"
import {Navbar,Sidebar,Newspopup} from "./Components/CompIndex"
function App() {


  return (
    <>
   
    
    <BrowserRouter>
    <Navbar/>
    <Sidebar/>
      <Routes>
        <Route path='/' element={<><Home/> <Newspopup/></>}/>
      </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
