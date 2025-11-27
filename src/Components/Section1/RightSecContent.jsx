import React from 'react'
import Cards from './Cards'

const RightSecContent = (props) => {
    // console.log(props);
    
  return (
    <div id='right' className='h-full w-3/4 flex overflow-x-auto flex-nowrap rounded-4xl gap-10 p-6'>
        {props.users.map(function(val,idx){
            return <Cards key={idx} id={idx} img={val.img} tag={val.tag}/>
        })}
        
    </div>
  )
}

export default RightSecContent