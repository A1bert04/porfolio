import React from 'react'

export default function Home() {

    return <div className="h-screen w-screen flex flex-col justify-center px-40">

        <h1 className="text-black font-bree text-5xl">
            <div className="py-1 max-w-fit hover:text-transparent
            hover:bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text hover:scale-110">
                {
                    // For each letter in the string, create a span with the letter
                    "ALBERT_BRU".split("").map((letter, i) => {
                            return <span key={i} className={"cursor-pointer"}>{letter}</span>
                        }
                    )
                }
            </div>
            <div className="py-1 max-w-fit hover:text-transparent
            hover:bg-gradient-to-r from-emerald-500 to-amber-400 bg-clip-text hover:scale-110">
                {
                    // For each letter in the string, create a span with the letter
                    "WEB".split("").map((letter, i) => {
                            return <span key={i} className={"cursor-pointer"}>{letter}</span>
                        }
                    )
                }
                &nbsp;&nbsp;&nbsp;
                {
                    // For each letter in the string, create a span with the letter
                    "MAKER".split("").map((letter, i) => {
                            return <span key={i} className={"cursor-pointer"}>{letter}</span>
                        }
                    )
                }
            </div>
            <div className="py-1 max-w-fit hover:text-transparent
            hover:bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text hover:scale-110">
                {
                    // For each letter in the string, create a span with the letter
                    "PROJECTS".split("").map((letter, i) => {
                            return <span key={i} className={"cursor-pointer"}>{letter}</span>
                        }
                    )
                }
                &nbsp;&nbsp;&nbsp;
                <span>&</span>
            </div>
            <div className="py-1 max-w-fit hover:text-transparent
            hover:bg-gradient-to-r from-purple-500 to-red-500 bg-clip-text hover:scale-110">
                {
                    // For each letter in the string, create a span with the letter
                    "EXPERIENCE".split("").map((letter, i) => {
                            return <span key={i} className={"cursor-pointer"}>{letter}</span>
                        }
                    )
                }
            </div>
        </h1>
    </div>
}