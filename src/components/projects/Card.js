import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import WebState from '../../context/WebState'
import '../../style/layout/projectPageLayout/cardLayout.css'



export const Card = (props) => {
    const { data } = props



    return (
        <>
            <div className="card">
                <div className="card__content">0
                    <div className="card__front">
                        <h2 >{data.projectTitle}</h2>
                        <p >{data.projectDescription}</p>
                    </div>
                    <div className="card__back">
                        <h1 >{data.projectTitle}</h1>
                        <button><a id="btn" rel='noreferrer' href={data.githubLink} target={"_blank"}>More Detailed</a></button>
                    </div>
                </div>
            </div>
        </>
    )
}
