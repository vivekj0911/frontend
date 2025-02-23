import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home"; 
import CropList from "./Components/CropList"; 
import { AdminGetAllMerchants,AdminGetAllUsers,Adminhome,AmdinPostBlog,AdminUpdateMarketRate } from './OurAdminpanel/AdminComp';
import {Navbar,News,Sidebar,Signin,Signup,Totalexpenses,UserGuide,Blog} from "./Components/CompIndex"
import CropDetailsView from './Components/CropDetailsView'; 
import AddCrop from './Pages/AddCrop';
import Chatbot from './Pages/Chatbot';
import SellProduct from './Pages/SellProduct';
// import {GetAllProducts,MerchantHome} from './Merchantpanel/Merchanindex';
import GetAllProducts from './Pages/GetAllProducts';
import BuyProducts from './Pages/BuyProducts';
import Marketplace from './Pages/MarketPlace';
function App() {
  return (
    <>
   
    
    <BrowserRouter>
    
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
  );
}

export default App;
