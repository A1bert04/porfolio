import React from "react";

export default function Timeline() {
    const [timeline, setTimeline] = React.useState([
        {
            id: 1,
            title: "Frontend Developer",
            company: "Freelance",
            date: "2021 - Present",
        },
        {
            id: 2,
            title: "Frontend Developer",
            company: "Freelance",
            date: "2021 - Present",
        }
    ])

    return <>
        {
            timeline.map((item) => {
                return <div key={item.id} className="flex flex-col items-center">

                </div>
            })
        }


    </>
}