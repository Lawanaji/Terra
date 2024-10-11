import React from 'react'
import icon1 from '../../assets/img/icon.svg'
import icon2 from '../../assets/img/icon_two.svg'
import icon3 from '../../assets/img/icon_three.svg'
import icon4 from '../../assets/img/icon_four.svg'
const SubSection = () => {
  return (
    <div className='container py-[5rem]'>
    <div className=' md:flex gap-2 justify-start items-baseline'>

     <div>
     <h1 className='text-3xl md:text-4xl font-bold'>What you stand to <strong className='text-[#52A350]'>gain</strong></h1>
     <p> Since 2020, Terra Learning has trained over 350 thousand African youths in various fields across Engineering, Marketing, Product and Design.</p>
     <button className="bg-[#52A350] text-white py-2 px-6 rounded mt-5  hover:bg-[#95b268] hover:scale-105 transition duration-300 ">Sign up for FREE</button>
     </div>
            <div className='grid  md:grid-cols-[repeat(2,_1fr)] gap-[5px]'>
                <div className='p-5'>
                <img src={icon1} alt="" />
                <h4 className='text-lg font-semibold'>Earn a certificate</h4>
              <p>  All Terra Learning finalists will be awarded a paid certificate of 
              completion at the end of the Internship.</p>
                </div>
           <div className='p-5'>
            <img src={icon2} alt="" />
           <h4 className='text-lg font-semibold'> Get hands-on experience</h4>
        <p>During the Terra Learning Internship, you will be assigned projects 
        and team assignments that will give you the needed experience,
         and help you build your portfolio, teamwork, and communication skills.</p>

           </div>
            <div className='p-5'>
                <img src={icon3} alt="" />
            <h4 className='text-lg font-semibold'>Learn from the very best</h4>
        <p>   Learning is a wonderful experience, and learning from the best makes everything ten 
        times easier. The Terra Learning mentors and lead instructors are
         all here to make your Internship experience unforgettable.</p>

            </div>

            <div className='p-5'>
               <img src={icon4} alt="" />              
            <h4 className='text-lg font-semibold'>Be a part of a fast-growing startup</h4>
           <p> During the bootcamp, all Terra Learning finalists will have the opportunity to build a 
           fast-paced start-up.</p>
            </div>
                
            </div>
    </div>
    </div>
  )
}

export default SubSection
