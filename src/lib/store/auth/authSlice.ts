import { IRegisterData } from "@/app/auth/register/page";
import { Status } from "@/lib/GlobalTypes/types";
import API from "@/lib/http/API";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../store";
import { LoginData } from "@/app/auth/login/page";

interface IUserData{
    userName:string,
    userEmail:string,
    userPassword:string
}

interface IInitialUserData{
    user:IUserData,
    status:Status
}

const initialState:IInitialUserData={
    user:{
        userName:"",
        userEmail:"",
        userPassword:""
    },
    status:Status.LOADING
}

const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        setUser(state:IInitialUserData,action:PayloadAction<IUserData>){
            state.user=action.payload
        },
        setStatus(state:IInitialUserData,action:PayloadAction<Status>){
            state.status=action.payload
        }
    }
})

const {setUser,setStatus}=authSlice.actions
export default authSlice.reducer


export function userRegister(data:IUserData){
    return async function userRegisterThunk(dispatch:AppDispatch){
        try {
            const response=await API.post("register",data)
            if(response.status===200){
                dispatch(setStatus(Status.SUCCESS))
            }else{
                dispatch(setStatus(Status.ERROR))
            }
        } catch (error) {
            console.log(error)
            dispatch(setStatus(Status.ERROR))
        }
    }
}

export function userLogin(loginData:LoginData){
    return async function userLoginThunk(dispatch:AppDispatch){
        try {
            const response=await API.post("login",loginData)
            if(response.status===200){
                dispatch(setStatus(Status.SUCCESS))
            }else{
                dispatch(setStatus(Status.ERROR))
            }
        } catch (error) {
            console.log(error)
            dispatch(setStatus(Status.ERROR))
        }
    }
}