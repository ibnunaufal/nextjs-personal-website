'use client';
import Image from "next/image";
import { useEffect, useState } from "react"

export default function Sidebar(){

    const [show, setShow] = useState(false)
    useEffect(() =>{

    },[])

    function handleSidebarChange(){
        console.log(show)
        setShow(!show)
    }
    return (
        <div className={` absolute w-14 bottom-0 h-full bg-gray-900`}>
            <div className={`flex justify-center items-center h-full flex-col`}>
                <button className="hover:bg-slate-500 rounded-md"><Image src="/home.svg" alt="home-icon" width={30} height={30} className="invert my-2" /></button>
                <button className="hover:bg-slate-500 rounded-md"><Image src="/info.svg" alt="info-icon" width={30} height={30} className="invert my-2" /></button>
                <button className="hover:bg-slate-500 rounded-md"><Image src="/envelope.svg" alt="envelope-icon" width={30} height={30} className="invert my-2" /></button>
            </div>
            <div>
                &copy; 2023
            </div>
        </div>
    )
}