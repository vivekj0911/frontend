import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home"; 
import CropList from "./Components/CropList"; 
import { Navbar, Sidebar } from "./Components/CompIndex";
import CropDetailsView from './Components/CropDetailsView'; 
import AddCrop from './Pages/AddCrop';
function App() {
  return (
    <>
   
    
    <BrowserRouter>
    <Navbar/>
    <Sidebar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add-crop' element={<AddCrop/>}/>
        <Route path='/your-crops' element={<CropList/>}/>
        <Route path='/your-crops:id' element={<><CropDetailsView/></>}/>

      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
