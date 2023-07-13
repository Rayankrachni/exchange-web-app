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


  export const login = createAsyncThunk('auth/login', async (payload, thunkApi) => {
    try {
      const response = await axios.post(`${Base_url}login`, payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.status === 200) {
        const { token, user } = response.data;
        localStorage.setItem('token', token);
        localStorage.setItem('islogin', true); // Store the token in localStorage
        return { token, user }; // Return the token and user as the payload
      } else {
        console.log("error");
        console.log(response.status);
        throw new Error('Login failed');
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  });
  


export const register = createAsyncThunk('products/getproducts', async (_, thunkApi) => {

  try {

  
    const response = await axios.get(`${Base_url}/register)`);
    const data = response.data;


    console.log(data.data);
    return data.data;


 
  } 
  
  catch (error) {
    return thunkApi.rejectWithValue(error.response.data);
  }
}
);


export const verifyOtp = createAsyncThunk('products/getproducts', async (_, thunkApi) => {
 
    try {
  
   

      
      const response = await axios.post(`${Base_url}/products)`);
      const data = response.data;
  
  
  
      return data.data;
  
  
   
    } 
    
    catch (error) {
      return thunkApi.rejectWithValue(error.response.data);
    }
  }
  );



  const AuthSlice = createSlice({
    name: "auth",
    initialState: { token: null, user: null, status: null },
    reducers: {
      setCredentials: (state, action) => {
        const { token, user } = action.payload;
        state.token = token;
        state.user = user;
        state.status = 'success';
      },
      logOut: (state, action) => {
        state.token = null
        state.user = null
        state.status = null
        localStorage.removeItem('token')
        localStorage.setItem('islogin', false)// Remove the token from localStorage
      },
  
    },
    extraReducers: (builder) => {
      // ...


      builder.addCase(login.pending, (state, { payload }) => {
    
        state.status = "loading";
      });


      builder.addCase(login.fulfilled, (state, { payload }) => {
        state.token = payload.token; // Store the token in the state
        state.user = payload.user; // Store the user information in the state
        state.status = "success";
      });

   

      builder.addCase(login.rejected, (state, { payload }) => {
   
        state.status = "rejected";
      });
      // ...
    },
  });
  

export const {setCredentials,logOut}= AuthSlice.actions
export default AuthSlice.reducer