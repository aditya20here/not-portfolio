import WebContext from "./webContext";
import React, { useState } from 'react';


const WebState = (props) => {
    const projectData = [
        {
            projectTitle: "Home Restaurant",
            projectDescription: "Home Restaurant is a food delivery system. The main motive of this app is many hotels directly gain massive users through this app.",
            projectSource: "java , firebase , google map api , google login api , google pay api",
            githubLink: "https://github.com/ADITYAbasude/Home-Restaurant"
        },
        {
            projectTitle: "Protfolio",
            projectDescription: "Portfolio website 💖 developed using react and scss",
            projectSource: "",
            githubLink: ""
        },
        {
            projectTitle: "keep Note",
            projectDescription: "In keep note, users can log in or log out and store their notes in a database.",
            projectSource: "",
            githubLink: "https://github.com/ADITYAbasude/keepnote-frontend"
        },
        {
            projectTitle: "Daily News",
            projectDescription: "News website",
            projectSource: "",
            githubLink: "https://github.com/ADITYAbasude/Daily-News"
        },
        {
            projectTitle: "Pip",
            projectDescription: "Pip is a social media app. Which can share their news all over the world and users can do likes in any pip, and there are so many features.",
            projectSource: "",
            githubLink: "https://github.com/ADITYAbasude/pip"
        }
    ]
    const [showExplore, setExplore] = useState("navbar")
    const [back, setBack] = useState("noBack")
    const [projectInfo, setProjectInfo] = useState(projectData)
    const [showDisplay , setDisplay] = useState("none")



    return (
        <WebContext.Provider value={{ showExplore, setExplore, back, setBack, projectInfo, setProjectInfo ,showDisplay , setDisplay }}>
            {props.children}
        </WebContext.Provider>
    )
}

export default WebState;
