import React from 'react'
import { ArrowUpRight } from 'lucide-react';

const LeftSecContent = () => {
  return (
    <div className='h-full w-1/3 flex justify-between flex-col '>
        <div className='p-5'>
            <h3 className='mb-6 text-6xl font-bold'>Prospective <br />customer <br />segmentation</h3>
            <p className='text-xl'>Depending on customer satisfaction and access to banking products, potential target audience can be devided into three groups</p>
        </div>
        <div><ArrowUpRight  size={80} /></div>
    </div>
  )
}

export default LeftSecContent