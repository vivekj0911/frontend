
import './index.css'
import {BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/PageIndex"
import CropList from "./Components/CropList"; 
import {Navbar,Sidebar,Newspopup,Signin,Signup} from "./Components/CompIndex"
import CropDetailsView from './Components/CropDetailsView'; 
import AddCrop from './Pages/AddCrop'
function App() {


  return (
    <>
   
    
    <BrowserRouter>
    <Navbar/>
    <Sidebar/>
      <Routes>
        <Route path='/' element={<><Home/> <Newspopup/></>}/>
        
        <Route path='/add-crop' element={<AddCrop/>}/>

        <Route path='/your-crops' element={<CropList/>}/>
        <Route path='/your-crops:id' element={<><CropDetailsView/></>}/>
        <Route  path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>

      </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
