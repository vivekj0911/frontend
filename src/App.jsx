
import './index.css'
import {BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/PageIndex"
import CropList from "./Components/CropList"; 
import {Navbar,Sidebar,Newspopup,Signin,Signup} from "./Components/CompIndex"
import CropDetailsView from './Components/CropDetailsView'; 
import AddCrop from './Pages/AddCrop'
import UpdateActivity from './Components/UpdateActivity'
import Expense from './Pages/ExpensePage'
import Growth from './Components/Growth';
import Customexpense from './Components/Customexpense';
import ActivityLog from './Components/ActivityLog';
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
        <Route path='/crop-details/:id' element={<><CropDetailsView/><ActivityLog/>  </>}/>
        <Route path="/update-activity/:cropId/:activity" element={<UpdateActivity />} />
        <Route  path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/total-expenses' element={<Expense/>}/>
        {/* <Route path='/custom-expense' element={<Customexpense/>}/> */}


        {/* <Route path='/growth' element={}/> */}

      </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
