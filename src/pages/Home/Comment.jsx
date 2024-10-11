import React from 'react'
import brightImage from '../../assets/img/bright_james.webp'
import emeroleImage from '../../assets/img/emerole_justice.webp'
import babalolaImage from '../../assets/img/favour_babalola.webp'
const Comment = () => {
    const commentItem = [
        {
            comment: '"Its been a beautiful, exciting, unlearning and relearning three weeks, with one more to go. Side Hustle has had a significant impact on peoples lives and has helped me progress in customer management over the last few weeks. There is so much that has been taught, from who a customer is,to how to absolutely delight and create a loyal customer group, and so much more."',
            profile: brightImage ,
            name: 'Bright James',
            internship: 'Side Hustle Internship 3.0'
        },
        {
            comment: '"The internship has been fantastic, with extensive explanations on every step required to maintain your customers for loyalty. You should consider yourself fortunate to be a part of this program. I strongly advise you not to pass up this fantastic chance. And to Side Hustle, I want to express my gratitude for providing me with this incredible opportunity to expand my knowledge."',
            profile: emeroleImage ,
            name: 'Emerole Justice',
            internship: 'Side Hustle Internship 3.0'
        },
        {
            comment: '"I started the Side Hustle internship knowing very little about UI/UX and hoped to be much better by the end of the internship. Throughout the four weeks, the lessons, quizzes, and activities have kept me on my toes, broadening my knowledge of the subject. I m a lot better today than I was when I first started. "',
            profile: babalolaImage ,
            name: 'Babalola Favour',
            internship: 'Side Hustle Internship 3.0'
        }
    ]
  return (
    <div className='container py-10'>
        <div className='text-center '>

        <h1 className='text-3xl md:text-4xl font-bold'> What others have <strong className='text-[#52A350]'>gained</strong></h1>
        <p>Read all about how the Terra Learning internship has impacted other youths and helped them achieve their goals. </p>
      
        </div>

        <div className='grid  md:flex gap-5 py-10'>
            {commentItem.map((item)=>{
                return(
                    <div className='border border-gray-300 rounded-md p-5 font-light text-sm  shadow'>
                            <p>{item.comment}</p>
                            <div className='flex justify-start items-center mt-3'>
                                <img src={item.profile} alt="" className='w-[50px]' />
                                <span>
                                    <h3>{item.name}</h3>
                                    <p>{item.internship}</p>
                                </span>
                            </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Comment
