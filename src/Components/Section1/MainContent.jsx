import React from 'react'
import LeftSecContent from './LeftSecContent'
import RightSecContent from './RightSecContent'

const MainContent = (props) => {
  return (
    <div className='px-5 py-10 flex gap-10 items-center h-[90vh]'>
        <LeftSecContent/>
        <RightSecContent users={props.users}/>
    </div>
  )
}

export default MainContent