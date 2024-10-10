import React from 'react'
import icon1 from '../../assets/img/icon.svg'
import icon2 from '../../assets/img/icon_two.svg'
import icon3 from '../../assets/img/icon_three.svg'
import icon4 from '../../assets/img/icon_four.svg'
const SubSection = () => {
  return (
    <div className='container'>
    <div className=' sub_section_container'>

     <div>
     <h1>What you stand to <strong>gain</strong></h1>
     <p> Since 2020, Terra Learning has trained over 350 thousand African youths in various fields across Engineering, Marketing, Product and Design.</p>
     <button className='hero_button'>Sign up for FREE</button>
     </div>
            <div className='benefit_card_container'>
                <div className='benefit_card'>
                <img src={icon1} alt="" />
                <h4>  Earn a certificate</h4>
              <p>  All Terra Learning finalists will be awarded a paid certificate of 
              completion at the end of the Internship.</p>
                </div>
           <div className='benefit_card'>
            <img src={icon2} alt="" />
           <h4> Get hands-on experience</h4>
        <p>During the Terra Learning Internship, you will be assigned projects 
        and team assignments that will give you the needed experience,
         and help you build your portfolio, teamwork, and communication skills.</p>

           </div>
            <div className='benefit_card'>
                <img src={icon3} alt="" />
            <h4>Learn from the very best</h4>
        <p>   Learning is a wonderful experience, and learning from the best makes everything ten 
        times easier. The Terra Learning mentors and lead instructors are
         all here to make your Internship experience unforgettable.</p>

            </div>

            <div className='benefit_card'>
               <img src={icon4} alt="" />              
            <h4>Be a part of a fast-growing startup</h4>
           <p> During the bootcamp, all Terra Learning finalists will have the opportunity to build a 
           fast-paced start-up.</p>
            </div>
                
            </div>
    </div>
    </div>
  )
}

export default SubSection
