import React from 'react'
import { MoveRight } from 'lucide-react';
const Cards = (props) => {
  return (
    <div  className='h-full w-90 shrink-0 rounded-4xl overflow-hidden relative'>
        <img className='h-full w-full object-cover' src={props.img} alt="" />
        <div className='absolute top-0 left-0 w-full h-full p-10 flex flex-col justify-between'>
            <h2 className='bg-white h-13 w-13 flex justify-center items-center rounded-full font-bold text-2xl'>{props.id+1}</h2>
            <div>
                <p className='text-white  mb-10 text-xl font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nemo aspernatur modi enim laudantium sunt!</p>
                <div className='flex justify-around'>
                    <button className='bg-blue-600 text-white font-medium px-8 py-3 rounded-full'>{props.tag}</button>
                    <button className='bg-blue-600 text-white font-medium px-3 py-3 rounded-full' ><MoveRight /></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards