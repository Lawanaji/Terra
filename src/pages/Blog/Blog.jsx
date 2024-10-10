import React from 'react'
import "./index.css";
import Posts from '../../Componant/BlogPost/Posts';

const Blog = () => {
  return (
    <div className='blogWrapper'>
      <div className='blogHeader'>
      <h1 className='blogHead'> Our Blog </h1>
      <p className='blogParag'>Discover resources to help you become a professional</p>
      </div>
      <div>
        <h2 className='post'> <u className='underline'>Latest Post </u></h2>
        <hr style={{ opacity:'0.4' }}/>
        <Posts /> 
      </div>
    </div>
  )
}

export default Blog
