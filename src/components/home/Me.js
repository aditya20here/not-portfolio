import React, { useContext } from 'react'
import profileImg from '../../img/profileImg.jpeg'
import '../../style/layout/homeLayout/me.css'
import '../../style/layout/navbar.css'
import WebContext from '../../context/webContext'
import { Link } from 'react-router-dom'

export const Me = () => {

    const fullNav = () => {
        setExplore("exp")
        console.log(showExplore)
    }
    const context = useContext(WebContext)
    const { showExplore, setExplore, back, setBack } = context

    const backlogic = () => {
        setBack("back")
    }


    return (
        <>
            <nav className={showExplore} onClick={() => setExplore('navbar')}>
                <div className='navContent'>
                    <ul >
                        <li><Link to='/project' onClick={backlogic}>Projects</Link></li>
                        <li><Link to='/about' onClick={backlogic}>About & Skills</Link></li>
                        <li><Link to='/contact' onClick={backlogic}>Contact</Link></li>
                    </ul>
                </div>
            </nav>
            <div className='smallObject'></div>
            <div className='profileImg'>
                <img src={profileImg}></img>
            </div>
            <div className='smallObject2'></div>
            <div className='myContent'>
                <h3>Aditya Bausde</h3>
                <div></div>
                <div></div>
                <p>Developer | Student | Self Learner</p><br />
                <button onClick={fullNav}>Explore</button>
            </div>
        </>

    )
}
