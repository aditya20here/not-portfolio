import React, { useContext } from 'react'
import WebContext from '../context/webContext'
import { Link } from 'react-router-dom'
import '../style/layout/titleBar.css'

export const TitleBar = (props) => {
    const context = useContext(WebContext)
    const { title } = props;
    return (
        <>
            <nav className='titleContent'>
                <Link to="/" className='onBack'>
                    <svg style={{color: "white"}} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-chevron-double-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                        <path fill-rule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                    </svg>
                </Link>
                <div>
                    <h1>{title}</h1>
                </div>
            </nav>
        </>
    )
}
