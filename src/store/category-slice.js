import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import { Base_url } from '../Constant/ActionType';
const categories=[
    {
      title:"vehicules",
      url: "https://cdn.ouedkniss.com/medias/category_icons/light/RAvfRmulDHv3OmIgyhbei1cFs9mQYl9Gyv0haP3F.svg",
  
    },
    {
      title:"Telephone",
      url:  "https://www.ouedkniss.dz/img/ouedkniss_artisanat.0e12849f.svg",
  
    },
    {
      title:"informatique",
      url: "https://www.ouedkniss.dz/img/intel_store.aaab234e.svg",
  
    },
    {
      title:"vetement",
      url:  "https://cdn.ouedkniss.com/medias/category_icons/light/QM0zpHD9VJtTkpgehrT9nZUhWhcxATg68yhTtkV4.svg",
  
    },
  
    {
      title:"cosmetique",
      url:   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9hxIGIRPVvvpnSQjDGNI0undzKEHbVYvWe-7bvt9W4A&s",
  
    },
   
    {
      title:"accessoire",
      url:   "https://www.ouedkniss.dz/img/ouedkniss_artisanat.0e12849f.svg",
  
    },
   
  
  
  
  
  ]

const token = localStorage.getItem('token');
console.log(token)

export const getCategories = createAsyncThunk('categories/getcategories', async (_, thunkApi) => {

  try {

    console.log("Getting Data try");  
    const response = await axios.get(`${Base_url}categories`, {
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



const CategoriesSlice = createSlice({
    name:"categories",
    initialState:{product:[],status:null},
    extraReducers:{
        [getCategories.pending]: (state,action) => {
            state.status="loading"
        },
        [getCategories.fulfilled]: (state,{payload}) => {
            state.categories=categories;
            state.status="success"
        },
        [getCategories.rejected]: (state,action) => {
            state.status="rejected"
        },
    }
});
export default CategoriesSlice.reducer;