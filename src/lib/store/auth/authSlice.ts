import { Status } from "@/lib/GlobalTypes/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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