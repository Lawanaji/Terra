import React from 'react'
import "./index.css";
import BlogPost from '../../Componant/BlogPost';

const Blog = () => {
  return (
    <div className='blogWrapper'>
      <h1 className='blogHead'> Our Blog </h1>
      <p className='blogParag'>Discover resources to help you become a professional</p>
      <div>
        <h2 className='post'> <u className='underline'>Latest Post </u></h2>
        <hr style={{ opacity:'0.4' }}/>
        <BlogPost /> 
      </div>
    </div>
  )
}

export default Blog
