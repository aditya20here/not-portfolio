import React, { useContext } from 'react'
import webContext from '../../context/webContext'
import '../../style/layout/projectPageLayout/projectInfo.css'
import { Card } from './Card'
import { MoreInfo } from './MoreInfo'

export const ProjectInfo = () => {
  const context = useContext(webContext)
  const { projectInfo } = context

  return (
    <>
      <div className='rectangle'></div>
      {/* <div className='moreInfo'> */}
      {/* <MoreInfo /> */}
      {/* </div> */}
      <div className='container'>
        {
          projectInfo.map((e) => {
            return <div>
              <Card key={e.projectTitle} data={e} />
            </div>
          })
        }
      </div>

    </>
  )
}
