import React from 'react'
import './index.css'
const BlogPost = (props) => {
    return (
        <div className='blogPostWrapper'>
            <a href={props.link} target={'_blank'}>
                <div className='postHeader'>
                    <p>Terra Learning. formerly Side Hustle</p>
                    <p>.</p>
                    <p>{props.date} </p>
                </div>
                <div>
                    <h2 className='postTopic'>
                        {props.topic}
                    </h2>
                </div>
                <div className='postDetails'>
                    <p className='editedSide'>{props.edited} </p>
                    <p className='noneditedSide'>{props.nonedited} </p>
                </div>
                <hr />
            </a>
        </div>
    )
}

export default BlogPost
