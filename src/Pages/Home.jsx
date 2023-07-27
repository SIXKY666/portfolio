import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { createPopper } from '@popperjs/core';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import "../index.css"
import profile from "../images/roy2.png"
import tailwindLogo from "../images/Tailwind_CSS_Logo.png"
import htmlLogo from "../images/html5.png"
import cssLogo from "../images/css-3.png"
import bsLogo from "../images/bootstrap.png"
import jsLogo from "../images/js.png"
import nodejsLogo from "../images/nodejs.png"
import reactLogo from "../images/react.png"

export default function Home() {
    const popperStyle = {
        background:'black',
        fontsize: '13px' 
}

const Popper = (e) => {
    createPopper(e, popperStyle, { placement: "right" });
}
return (
    <>
        <div className="w-full h-full ">
            <div className="flex h-full w-full justify-center items-center">
                <div className="flex flex-col">
                    <div className="flex flex-row">
                        <div className="container">
                            <h1 className="text-6xl font-bold leading-loose">Front-End Developer</h1>
                            <p className="text-2xl opacity-80 leading-relaxed">Hi, I'm Natdanai Khemtong You can call me Jack,</p>
                            <p className="text-2xl opacity-80 leading-relaxed">Who have passion in Web Development</p>
                            <p className="text-2xl opacity-80 leading-relaxed">I'm currently studying in Computer Science.</p>
                            <div className="flex gap-5 my-5">
                                <Link target="_blank" to="https://github.com/SIXKY666"><FontAwesomeIcon className="inline hover:opacity-70 cursor-pointer" icon={faGithub} size="3x" /></Link>
                                <Link target="_blank" to="https://www.linkedin.com/in/natdanai-khemthong-0040a2264/"><FontAwesomeIcon className="inline hover:opacity-70 cursor-pointer" icon={faLinkedin} size="3x" /></Link>
                            </div>
                        </div>
                        <div >
                            <img className="rounded-full"  width={400} height={400} src={profile} alt="profile" />
                        </div>
                    </div>
                    <div className="flex flex-row w-fit gap-3 shadow p-1 rounded">
                        <div className="flex justify-center items-center"><p className="text-xl font-semibold inline">Tech | </p></div>
                            <img width={42} height={42} src={htmlLogo} alt="html" />
                        <img width={42} height={42} src={cssLogo} alt="css" />
                        <img width={42} height={42} src={bsLogo} alt="bootstrap" />
                        <img width={42} height={42} src={jsLogo} alt="javascript" />
                        <img width={42} height={42} src={nodejsLogo} alt="nodejs" />
                        <img width={42} height={42} src={reactLogo} alt="reactjs" />
                        <img width={42} height={42} src={tailwindLogo} alt="tailwindcss" />
                    </div>
                </div>
            </div>
        </div>
    </>
)
}