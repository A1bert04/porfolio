import React from "react"

export default function Top() {
    return <div className="h-[calc(100vh-5rem)] w-screen flex flex-col justify-center md:px-52">
        <div className="text-black font-bree text-7xl" id="text">
            <div className="py-1 max-w-fit hover:text-transparent
            hover:bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text
            hover:scale-110 menu-line cursor-pointer">
                ALBERT_BRU
            </div>
            <div className="py-1 max-w-fit hover:text-transparent
            hover:bg-gradient-to-r from-emerald-500 to-amber-500 bg-clip-text
            hover:scale-110 menu-line cursor-pointer">
                WEB &nbsp; MAKER
            </div>
            <div className="py-1 max-w-fit hover:text-transparent
                 hover:bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text
            hover:scale-110 menu-line cursor-pointer">
                ABOUT ME
                &nbsp;&nbsp;
                <span>&</span>
            </div>
            <div className="py-1 max-w-fit hover:text-transparent
            hover:bg-gradient-to-r from-purple-500 to-red-500 bg-clip-text
            hover:scale-110 menu-line cursor-pointer">
                <span className="text-6xl">
                    #
                </span>
                EXPERIENCE
            </div>
        </div>
    </div>
}