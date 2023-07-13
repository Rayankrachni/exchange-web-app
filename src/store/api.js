import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { setCredentials,logOut } from "./auth-slice";
import { Base_url } from "../Constant/ActionType";



const baseQuerry =fetchBaseQuery({
    baseUrl:Base_url,
    credentials:'include',
    prepareHeaders:({headers,getState})=>{
        const token =getState().auth.token;

        if(token){
            headers.set("authorisation",`Bearer:${token}`)
        }


        return headers;
    }
})

