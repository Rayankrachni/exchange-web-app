import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import { Base_url } from '../Constant/ActionType';



const token = localStorage.getItem('token');
console.log(token)


export const getAllProducts = createAsyncThunk('products/getproducts', async (_, thunkApi) => {
  console.log("=------------------------=",token);
  console.log("Getting Data");
  try {

    console.log("Getting Data try");  
    const response = await axios.get(`${Base_url}products`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });

    if (response.status === 200) {

      console.log("status 2000 success");
      const data = response.data;
      console.log("response.data", data);
      return data;
    } else {
      console.log("error ");
      console.log(response.status);
      throw new Error('Login failed');
    }
 
  }  catch (error) {
    return thunkApi.rejectWithValue(error.response.data);
  }
}



);


export const getFavoriteProducts = createAsyncThunk('products/getproducts', async (_, thunkApi) => {
  console.log("=------------------------=");
  console.log("Getting Data");
  try {

    console.log("Getting Data try");  
    const response = await axios.get('http://192.168.100.3:8000/api/products');
    const data = response.data;


    console.log(data.data);
    return data.data;


 
  } 
  
  catch (error) {
    return thunkApi.rejectWithValue(error.response.data);
  }
}
);



export const exploreProducts = createAsyncThunk('products/getproducts', async (_, thunkApi) => {
  console.log("=------------------------=");
  console.log("Getting Data");
  try {

    console.log("Getting Data try");  
    const response = await axios.get('http://192.168.100.3:8000/api/products');
    const data = response.data;


    console.log(data.data);
    return data.data;


 
  } 
  
  catch (error) {
    return thunkApi.rejectWithValue(error.response.data);
  }
}
);


export const getTrendProducts = createAsyncThunk('products/getTrendProducts', async (_, thunkApi) => {

  try {

    console.log("Getting Data try");  
    const response = await axios.get(`${Base_url}trend`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });

    if (response.status === 200) {

      console.log("status 2000 success");
      const data = response.data;
      console.log("response.data", data);
      return data;
    } else {
      console.log("error ");
      console.log(response.status);
      throw new Error('Login failed');
    }
 
  }  catch (error) {
    return thunkApi.rejectWithValue(error.response.data);
  }
}



);







const productsSlice = createSlice({
    name:"products",
    initialState:{product:[],status:null},
    extraReducers:{

        /* GET ALL PRODUCTS */
        [getAllProducts.pending]: (state,action) => {
            console.log("Loading");
            state.status="loading"
        },
        [getAllProducts.fulfilled]: (state,{payload}) => {

            console.log("payload",payload);
            state.product=payload;
            state.status="success"
        },
        [getAllProducts.rejected]: (state,action) => {
            state.status="rejected"
        },


        /* GET FAVORITE PRODUCTS */
        [getFavoriteProducts.pending]: (state,action) => {
        console.log("Loading");
        state.status="loading"
        },
        [getFavoriteProducts.fulfilled]: (state,{payload}) => {

            console.log("payload",payload);
            state.product=payload;
            state.status="success"
        },
        [getFavoriteProducts.rejected]: (state,action) => {
            state.status="rejected"
        },



        /* GET FAVORITE PRODUCTS */
        [exploreProducts.pending]: (state,action) => {
          console.log("Loading");
          state.status="loading"
          },
          [exploreProducts.fulfilled]: (state,{payload}) => {
  
              console.log("payload",payload);
              state.product=payload;
              state.status="success"
          },
          [exploreProducts.rejected]: (state,action) => {
              state.status="rejected"
          },



         /* GET FAVORITE PRODUCTS */
         [getTrendProducts.pending]: (state,action) => {
          console.log("Loading");
          state.status="loading"
          },
          [getTrendProducts.fulfilled]: (state,{payload}) => {

              console.log("payload",payload);
              state.product=payload.data;
              state.status="success"
          },
          [getTrendProducts.rejected]: (state,action) => {
              state.status="rejected"
          },
    }
});
export default productsSlice.reducer;