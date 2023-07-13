import './App.css';
import { useTranslation } from "react-i18next";
import Main from './Main';
import { BrowserRouter, Routes, Route,withRouter  } from "react-router-dom";
import Profile from './Pages/Settings/profile-settings';
import ProductDetail from './Pages/Product-Detail/ProductDetail';
import FormStepper from './Pages/Add-Product/Form-Stepper';
import AllProducts from './Pages/Product/All-Product';
import CustomStepper from './Pages/CustomStepper/Stepper';
import FavoriteProducts from './Pages/Product/Favorite-products';
import UserProfile from './Pages/UserProfile/user-profile';
import TrendProducts from './Pages/Product/Trend';
import ExploreProducts from './Pages/Product/Explore';
function App() {
  return (
    <BrowserRouter>
    <Routes>
           <Route path="User-Profile" element={<UserProfile/>}/>
            <Route path="Stepper" element={<CustomStepper/>}/>

            <Route path="Trend-Products" element={<TrendProducts/>}/>
            <Route path="Explore-Product" element={<ExploreProducts/>}/>

            <Route path="Favorite-Products" element={<FavoriteProducts/>}/>
            <Route path="All-Recent-Product" element={<AllProducts/>}/>
            <Route path="All-Product" element={<AllProducts/>}/>
            <Route path="Add-Product" element={<FormStepper/>}/>
            <Route path="Product-Detail" element={<ProductDetail/>}/>
            <Route path="Profile-Managing" element={<Profile />}/>
            <Route path="/" element={<Main />}>
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
