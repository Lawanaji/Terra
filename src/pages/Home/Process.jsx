import React from 'react';
import internshipImage from '../../assets/img/product-internship.6e52e358.svg';
import productImage from '../../assets/img/product-certification.f2237aa2.svg';
import bootcampImage from '../../assets/img/product-bootcamp.441d9629.svg';

const Proudct = () => {
    const item = [
        {
            image: internshipImage,
            name: 'Internship',
            learn: 'Learn soft & hard skills in 4 weeks'
        },
        {
            image: productImage,
            name: 'Certification',
            learn: 'Get a certificate of completion from Side Hustle.'
        },
        {
            image: bootcampImage,
            name: 'Bootcamp',
            learn: 'Join a team of brilliant minds to build a startup, a strong portfolio and world class products'
        }
    ];

    return (
        <div className='w-full h-full container mx-auto px-4 m-5'>
            <div className='flex flex-col md:flex-row justify-center items-center gap-10  flex-wrap'>
                {item.map((product, index) => (
                    <div key={index} className='border border-gray-400 w-full md:w-[400px] h-[400px] rounded-3xl shadow-md flex flex-col'>
                        <img src={product.image} alt={product.name} className='w-full h-2/3 object-cover rounded-t-3xl' />
                        <div className='p-4 flex-grow'>
                            <h1 className='text-lg font-semibold'>{product.name}</h1>
                            <p className='text-sm'>{product.learn}</p>
                        </div>
                    </div>
                ))}
            </div>
                    <div className='text-center py-5'>
                        <h1 className='text-3xl md:text-4xl font-bold'>Ready to join the Internship?</h1>
                        <button className="bg-[#52A350] text-white py-2 px-6 rounded mt-5  hover:bg-[#95b268] hover:scale-105 transition duration-300 ">Sign up for FREE</button>
                    </div>
        </div>
    );
}

export default Proudct;
