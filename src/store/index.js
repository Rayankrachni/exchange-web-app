import { configureStore } from "@reduxjs/toolkit";

import productsReducer from "./product-slice";
import CategoriesReducer from "./category-slice";
import AuthReducer from "./auth-slice";

export default configureStore({
    reducer:{
       products: productsReducer,
       categories: CategoriesReducer,
       auth:AuthReducer
       
    }
});