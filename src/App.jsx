import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home"; 
import CropList from "./Components/CropList"; 

import {Navbar,Sidebar,Signin,Signup} from "./Components/CompIndex"
import CropDetailsView from './Components/CropDetailsView'; 
import AddCrop from './Pages/AddCrop';
import Chatbot from './Pages/Chatbot';
import News from './Components/News';
import Blog from './Components/Blog';
import UserGuide from './Components/UserGuide';
function App() {
  return (
    <>
   
    
    <BrowserRouter>
    <Navbar/>
    <Sidebar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add-crop' element={<AddCrop/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path="/blogs" element={<Blog />} />
        <Route path='/about-us' element={<UserGuide/>}/>
        <Route path='/your-crops' element={<CropList/>}/>
        <Route path='/your-crops/:id' element={<><CropDetailsView/></>}/>
        <Route  path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/chatbot' element={<Chatbot/>}/>

      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
