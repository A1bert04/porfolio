import React, {createRef, useEffect, useState} from 'react'

import './styles/lettersMenu.css'
import './styles/hideScroll.css'

import Top from "./pages/Top.jsx";
import ScrollArrow from "./components/scrollArrow";
import FrontendSkills from "./pages/FrontendSkills.jsx";
import AboutMe from "./pages/AboutMe.jsx";

export default function Home() {

    const [bgColor, setBgColor] = useState('white');
    const topRef = createRef();


    useEffect(() => {
        function handleScroll() {

            let topComponent = topRef.current.getBoundingClientRect()

            // console.log(topComponent)

            if (topComponent.bottom <= -50) {
                setBgColor('black')
            } else {
                setBgColor('white')
            }

        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);

    }, [bgColor])

    return <div className={"bg-fixed bg-cover"}
                style={{backgroundColor: bgColor, transition: "background-color 0.5s ease-out"}}>
        <div ref={topRef} className="mb-72">
            <Top/>
            <ScrollArrow/>
        </div>
        <div className="my-48">
            <AboutMe/>
        </div>
        <FrontendSkills/>
    </div>

}