"use client";
import axios from "axios";
import Link from "next/link";
import React, {useState} from "react";
import {toast} from "react-hot-toast";
import {useRouter} from "next/navigation";


export default function ProfilePage() {
    const router = useRouter()
    const [data, setData] = useState("nothing")
    const logout = async () => {
        try {
            await axios.get('/api/users/logout')
            toast.success('Logout successful')
            router.push('/login')
        } catch (error:any) {
            console.log(error.message);
            toast.error(error.message)
        }
    }

    const getUserDetails = async () => {
        const res = await axios.get('/api/users/me')
        console.log(res.data);
        setData(res.data.data._id)
    }

    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen py-6 overflow-hidden">

        {/* Background Video */}
        <video 
          className="absolute inset-0 w-full h-full object-cover opacity-50 z-0" 
          loop 
          muted 
          autoPlay 
          src="/courses/profilevid.mp4"
        ></video>
      
        {/* Semi-transparent overlay for readability */}
        <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
      
        {/* Profile Content */}
        <div className="relative z-20 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Profile</h1>
          <hr className="w-1/2 mx-auto mb-4 border-gray-300" />
          <h2 className="mb-4">You don't have any courses, Buy Your courses</h2>
          
          <h2 className="p-2 rounded bg-green-500 text-lg font-semibold inline-block mb-4">
            {data === 'nothing' ? "Nothing" : (
              <Link href={`/profile/${data}`} className="underline hover:text-green-700">
                {data}
              </Link>
            )}
          </h2>
          
          <hr className="w-1/2 mx-auto mb-4 border-gray-300" />
          
          {/* Logout Button */}
          <button
            onClick={logout}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 transition duration-300"
          >
            Logout
          </button>
      
          {/* Get User Details Button */}
          <button
            onClick={getUserDetails}
            className="bg-green-800 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Get User Details
          </button>
        </div>
      </div>
      
    )
}