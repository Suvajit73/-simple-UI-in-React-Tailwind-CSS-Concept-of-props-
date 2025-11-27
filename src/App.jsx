import React from 'react'
import Section1 from './Components/Section1/Section1'


const App = () => {

  const users = [
    {
      img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: '',
      tag: 'Satisfied'
    },
    {
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' ,
      intro: '',
      tag: 'Underserved'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1661611138064-9961ed38e1db?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D',
      intro: '',
      tag: 'Underbanked'
    },
     {
      img: 'https://plus.unsplash.com/premium_photo-1661578218485-c7d8e799c83f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIyfHx8ZW58MHx8fHx8',
      intro: '',
      tag: 'Underbanked'
    },
     {
      img: 'https://images.unsplash.com/photo-1689218744786-9546da7b6873?q=80&w=767&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: '',
      tag: 'Underbanked'
    },
     {
      img: 'https://images.unsplash.com/photo-1602566356438-dd36d35e989c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: '',
      tag: 'Underbanked'
    }
  ]

  return (
    <div>
      <Section1 users={users}/>
      
    </div>
  )
}

export default App