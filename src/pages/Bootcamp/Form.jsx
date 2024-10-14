import React from 'react'

const Form = () => {
  return (
    <div className='w-full overflow-hidden'>
                <div className='w-full h-screen bg-white text-[#8B908B] p-[8rem] rounded-lg'>

                <h4 className='text-3xl font-bold'>Join the Terra bootcamp</h4>
                <p>Enter your details to begin your application</p>
            <form action="submit" >
                    <div className=' flex-col md:flex-row md:flex gap-5 '>
                        
                        <input type="text" name="First_Name" id="" placeholder='First Name' className='border border-[#8B908B] px-4  placeholder:px-2 rounded py-2' />
                        <input type="text" name="First_Name" id="" placeholder='Last Name ' className='border border-[#8B908B] px-4    placeholder:px-2 rounded py-2' />
                    </div>
                    <div className=' md:flex gap-5'>
                        
                        <input type="text" name="First_Name" id="" placeholder='First Name' className='border border-[#8B908B] px-4  placeholder:px-2 rounded py-2' />
                        <input type="text" name="First_Name" id="" placeholder='Last Name ' className='border border-[#8B908B] px-4    placeholder:px-2 rounded py-2' />
                    </div>
            </form>

                </div>

           
    </div>
  )
}

export default Form
