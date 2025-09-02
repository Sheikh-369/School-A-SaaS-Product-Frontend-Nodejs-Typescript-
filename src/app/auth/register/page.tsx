"use client"
import { userRegister } from "@/lib/store/auth/authSlice"
import { useAppDispatch } from "@/lib/store/hooks"
import { ChangeEvent, FormEvent, useState } from "react"

export interface IRegisterData{
  userName:string,
  userEmail:string,
  userPassword:string
}


function Register(){
  const dispatch=useAppDispatch()
  const [data,setData]=useState<IRegisterData>({
    userName:"",
    userEmail:"",
    userPassword:""
  })

  const handleRegisterChange=(e:ChangeEvent<HTMLInputElement>)=>{
    const {name,value}=e.target
    setData({
      ...data,
      [name]:value
    })
  }

  const handleRegisterSubmission=(e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    dispatch(userRegister(data))
  }
    return(
        <>
<div className="min-h-screen flex items-center justify-center bg-black">
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Create Account</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
  <style dangerouslySetInnerHTML={{__html: "\n        body {\n            font-family: 'Inter', sans-serif;\n        }\n    " }} />
  <div className="w-full max-w-[1200px] bg-[#13131a] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
    {/* Left Section */}
    <div className="w-full md:w-1/2 relative">
 
      <div className="relative h-full">
        <img src="https://cdn.pixabay.com/photo/2024/08/23/11/55/building-8991569_1280.jpg" alt="Desert landscape" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-purple-900/30" />
        
      </div>
    </div>
    {/* Right Section */}
    <div className="w-full md:w-1/2 p-6 md:p-12">
      <div className="max-w-md mx-auto">
        <h1 className="text-white text-2xl md:text-4xl font-semibold mb-2">Create an account</h1>
        <p className="text-gray-400 mb-8">
          Already have an account?
          <a href="https://abhirajk.vercel.app/" className="text-white hover:underline">Log in</a>
        </p>
        <form onSubmit={handleRegisterSubmission} className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <input
            name="userName"
            type="text"
            onChange={handleRegisterChange}
            placeholder="User Name" className="w-full md:w-1/2 bg-[#1c1c24] text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-600" />
            
          </div>
          <input
          name="userEmail" 
          type="email"
          onChange={handleRegisterChange}
          placeholder="Email" className="w-full bg-[#1c1c24] text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-600" />
          <div className="relative">
            <input
            name="userPassword"
            type="password" 
            onChange={handleRegisterChange}
            placeholder="Enter your password" className="w-full bg-[#1c1c24] text-white rounded-lg p-3 pr-10 focus:outline-none focus:ring-2 focus:ring-purple-600" />
            <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </button>
          </div>
          
          <button type="submit" className="w-full bg-purple-600 text-white rounded-lg p-3 hover:bg-purple-700 transition-colors">
            Create account
          </button>
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-700" />
            </div>
            
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
        </>
    )
}

export default Register