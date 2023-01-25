import React, {createRef, useEffect, useState} from 'react'

import './styles/lettersMenu.css'

import Top from "./sections/Top.jsx";
import ScrollArrow from "./components/scrollArrow";
import FrontendSkills from "./sections/FrontendSkills.jsx";
import AboutMe from "./sections/AboutMe.jsx";

export default function Home() {

    const [bgColor, setBgColor] = useState('white');
    const topRef = createRef();


    useEffect(() => {
        function handleScroll() {

            let topComponent = topRef.current.getBoundingClientRect()

            // console.log(topComponent)

            if (topComponent.bottom <= -50) {
                setBgColor('#d8b4fe')
            } else {
                setBgColor('white')
            }

        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);

    }, [bgColor])

    return <div className={"overflow-x-hidden bg-fixed bg-cover"}
                style={{backgroundColor: bgColor, transition: "background-color 0.5s ease-out"}}>
        <div ref={topRef} className="mb-48">
            <Top/>
            <ScrollArrow/>
        </div>
        <div className="my-48">
            <AboutMe/>
        </div>
        <FrontendSkills/>
    </div>

}