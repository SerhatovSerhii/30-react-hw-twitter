import React from 'react'
import Content from './Content'
import Sidebar from './Sidebar'

const Body = ({}) => {
  return (
    <div className='body'>
    <Sidebar />
    <Content />
    </div>
  )
}

export default Body