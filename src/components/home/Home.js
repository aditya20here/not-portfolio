import React from 'react'
import { TitleBar } from '../TitleBar'
import { Me } from './Me'
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import { ProjectInfo } from '../projects/ProjectInfo';
import { Contact } from '../contact/Contact';

export const Home = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={<Me />} />
                    <Route exact path='/project' element={
                        <>
                            <TitleBar title={"Projects"} /> <ProjectInfo />
                        </>
                    }>
                    </Route>
                    <Route exact path='/contact' element={
                        <>
                            <TitleBar title={"Contact"} /> <Contact />
                        </>
                    }>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div >
    )
}
