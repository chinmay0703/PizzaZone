import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Pages/Footer/Footer';
import ProfilePage from './Pages/ProfilePage/ProfilePage';
import Profile from './Pages/Profile/Profile';
import AddAddress from './Pages/Address/Add Address/addAddress';
import EditAddress from './Pages/Address/Edit Address/EditAddress';
import EditProfile from './Pages/Edit Profile/EditProfile';
import Itemsize from './Pages/ItemSize/Itemsize';
import Cart from './Pages/Cart/Cart';
import VegPizza from './Pages/Veg-pizzas/VegPizza';
import Beverages from './Pages/Beverages/Beverages';
import BeverageSize from './Pages/BeverageSizes/BeverageSize';
import Payments from './Pages/Payments/Payments';
import MyOrders from './Pages/Orders/MyOrders';
import Feedback from './Pages/Feedback/Feedback';
import AboutUs from './Pages/FooterPages/AboutUs/AboutUs';
import FAQs from './Pages/FooterPages/FAQs/FAQs';
import TermNCondition from './Pages/FooterPages/TermsCondition/TermNCondition';
import Orderdetails from './Pages/OderDetails/Orderdetails';
import Signin from './Pages/Signin/Signin';
import Signup from './Pages/SignUp/SignUp';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = "PizzaZone"; // set the new tab name here
  }, []);
  return (
    
    <div className='root'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<Signin/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/item' element={<ProfilePage />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/addAddress' element={<AddAddress />} />
          <Route path='/editAddress' element={<EditAddress />} />
          <Route path='/editProfile' element={<EditProfile/>} />
          <Route path='/itemSize' element={<Itemsize/>} />
          <Route path='/beverageSize' element={<BeverageSize/>} />
          <Route path='/Vegpizza' element={<VegPizza/>} />
          <Route path='/beverages' element={<Beverages/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/payments' element={<Payments/>} />
          <Route path='/MyOrders' element={<MyOrders/>} />
          <Route path='/orderDetails' element={<Orderdetails/>} />
          <Route path='/Feedback' element={<Feedback/>} />
          <Route path='/aboutUs' element={<AboutUs/>} />
          <Route path='/FAQs' element={<FAQs/>} />
          <Route path='/Terms-and-condition' element={<TermNCondition/>} />
          <Route>404 Not Found</Route>
        </Routes>
      <Footer />

      </BrowserRouter>
      <ToastContainer position='bottom-right' theme='colored' />
    </div>
  );
}

export default App;
