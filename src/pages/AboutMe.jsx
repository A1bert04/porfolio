import React from "react"
import Timeline from "../components/Timeline.jsx";

export default function AboutMe() {
    return <div className="w-screen h-screen flex flex-col justify-center items-center text-white">
        <div className="font-bree text-7xl" id="text">
            <div className="py-1 max-w-fit">
                About Me
            </div>
        </div>
        <div className="flex flex-row w-screen py-24 md:px-52 h-fit">
            <div className="w-1/2 pr-10 text-right text-xl font-bree">
                <p className="py-4">
                    Hi! My name is Albert and I'm 18 years old. <br/>
                    I'm currently studying Web App Development and I am
                    passionate about technology and web development.
                </p>
                <p className={"py-4"}>
                    I have been self-taught and have been able to keep
                    up with the latest technologies and trends through continuous learning and experimentation. I am
                    driven to create user-friendly and high-quality web solutions.
                </p>
                <p className="py-4">
                    I am a quick learner, able to familiarize myself with new technologies and tools, and I have a
                    natural aptitude for problem-solving. I am always seeking new challenges and am motivated to
                    contribute to a company's growth and success by leveraging my skills. I believe my
                    passion for my work, combined with my skills and experience, make me a valuable asset to any team.
                </p>
            </div>
            <div className="pl-10 w-1/2 flex flex-col justify-center min-h-max">
                Insertar la imagen aqui
            </div>
        </div>
        <Timeline/>
    </div>
}