import { useState } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import entrylevel from '../../assets/img/entry-level.5391141f.svg';
import spurt from '../../assets/img/spurt.cf7df5f5.svg';
import keytrust from '../../assets/img/keytrust.24708d27.svg';
import reina from '../../assets/img/reina.8230ab87.svg'
import  trinipick from '../../assets/img/trinipicks.4a3cff02.svg'
const LogoSlider = () => {
    const logos = [entrylevel, spurt , trinipick, reina, keytrust,  ];
    
    const [settings] = useState({
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 2000,
        cssEase: 'linear',
        pauseOnHover: false,
        pauseOnFocus: false,
        focusOnSelect: false,
        accessibility: false,
        mobileFirst: true,
        rtl: true,  
    });

    return (
        <div className='py-5 overflow-hidden'>
            <h1 className='text-center text-lg'>We’ve got our footprint</h1>
            <Slider {...settings}>
                {logos.map((logo, index) => (
                    <div key={index} className="flex justify-center items-center">
                        <img src={logo} alt="logo" className="hover:scale-110 transition duration-300" />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default LogoSlider;
