
import './index.css'
import {BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/PageIndex"
import CropList from "./Components/CropList"; 
import {Navbar,Sidebar,Newspopup} from "./Components/CompIndex"
import CropDetailsView from './Components/CropDetailsView'; 
function App() {


  return (
    <>
   
    
    <BrowserRouter>
    <Navbar/>
    <Sidebar/>
      <Routes>
        <Route path='/' element={<><Home/> <Newspopup/></>}/>
        <Route path='/your-crops' element={<CropList/>}/>
        <Route path='/your-crops:id' element={<><CropDetailsView/></>}/>

      </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
