import React, {createRef, useEffect, useState} from 'react'

import './styles/lettersMenu.css'

import Top from "./sections/Top.jsx";
import ScrollArrow from "./components/scrollArrow";
import FrontendSkills from "./sections/FrontendSkills.jsx";
import AboutMe from "./sections/AboutMe.jsx";

export default function Home() {

    const [bgColor, setBgColor] = useState('white');

    const topRef = createRef(null);

    function changeBgColor(newColor) {
        setTimeout(() => setBgColor(newColor), 500);
    }

    useEffect(() => {
        function handleScroll() {

            // Get the scroll height of the top section
            const componentHeights = {
                top: topRef.current.getBoundingClientRect()
            }

            console.log(componentHeights.top)

            if (componentHeights.top.bottom < -20) {
                changeBgColor('#fcd34d')
            }


        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);

    }, [])

    return <div className={"overflow-x-hidden bg-fixed bg-cover"}
        style={{ backgroundColor: bgColor, transition: "background-color 0.5s ease-out"}}>
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