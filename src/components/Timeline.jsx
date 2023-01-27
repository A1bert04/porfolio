import React from "react"

export default function Timeline() {
    const timeline = [{
        id: 1, title: "Frontend Developer", company: "", date: "2021",
    }, {
        id: 2, title: "Frontend Developer", company: "Freelance", date: "2021",
    }]

    return <div className="flex flex-row justify-center w-screen text-white text-lg">
        {timeline.map((item) => {
            return <div key={item.id} className="flex flex-col font-bree">
                <div className="px-8">
                    {item.title}
                </div>
                <div className="flex flex-row">
                    <div className="flex flex-col justify-center w-full">
                        <div className="w-full bg-white h-1"></div>
                    </div>
                    <div className="w-full bg-white w-1 h-5"></div>
                    <div className="flex flex-col justify-center w-full">
                        <div className="w-full bg-white h-1"></div>
                    </div>
                </div>
                <div className="text-center">
                    {item.date}
                </div>
            </div>
        })}
    </div>
}