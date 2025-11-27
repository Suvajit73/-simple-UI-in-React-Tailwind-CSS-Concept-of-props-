import React from 'react'
import NaveBar from './NaveBar'
import MainContent from './MainContent'

const Section1 = (props) => {
    
    
  return (
    <div className='h-screen w-full'>
        <NaveBar />
        <MainContent users={props.users}/>
    </div>
  )
}

export default Section1