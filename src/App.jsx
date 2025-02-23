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
        <Route path='/' element={<> <Navbar/>
          <Sidebar/><Home/></>}/>
        <Route path='/add-crop' element={<><Navbar/><Sidebar/><AddCrop/></>}/>
        <Route path='/your-crops' element={ <><Navbar/><Sidebar/><CropList/></>}/>
        <Route path='/your-crops:id' element={<><CropDetailsView/></>}/>
        <Route  path='/signin' element={<><Navbar/><Sidebar/><Signin/></>}/>
        <Route path='/signup' element={<><Navbar/><Sidebar/><Signup/></>}/>
        <Route path='/chatbot' element={<><Navbar/><Sidebar/><Chatbot/></>}/>
        <Route path='/total-expenses' element={<><Navbar/><Sidebar/><Totalexpenses/></>}/>
        <Route path='/about' element={<><Navbar/><Sidebar/> <UserGuide/></>}></Route>
          <Route path='/news' element={<><Navbar/><Sidebar/><News/></>}/>
          <Route path='/blog' element={<><Navbar/><Sidebar/> <Blog/></>}></Route>



        <Route path="/admin" element={<Adminhome />} />
        <Route path="/post-blog" element={<AmdinPostBlog />} />
        <Route path="/update-market-rate" element={<AdminUpdateMarketRate />} />
        <Route path="/users" element={<AdminGetAllUsers />} />
        <Route path="/merchants" element={<AdminGetAllMerchants />} />

        {/* <Route path='/merchanthome' element={<MerchantHome/>}/> */}
        <Route path='/get-all-products' element={<GetAllProducts/>}/>
        <Route path='/sell-product' element={<SellProduct/>}/>
        <Route path='/buy-product' element={<BuyProducts/>}/>
        <Route path='/marketplace' element={<Marketplace/>}/>
      

      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
