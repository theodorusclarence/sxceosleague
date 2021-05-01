import Image from 'next/image';
import Slider from 'react-slick';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

export default function SquareCarousel({ className, images }) {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: (
            <button className='w-9 h-9'>
                <MdKeyboardArrowLeft className='text-4xl text-spurple-800' />
            </button>
        ),
        nextArrow: (
            <button className='w-9 h-9'>
                <MdKeyboardArrowRight className='text-4xl text-spurple-800' />
            </button>
        ),
    };

    return (
        <>
            <Slider {...settings} className={`${className} block`}>
                {images.map((image, index) => (
                    <figure key={image}>
                        {/* <img key={image} src={image} alt={`Image ${index}`} /> */}
                        <Image
                            className='bg-gray-400'
                            src={image}
                            width={800}
                            height={1000}
                            alt={`Image ${index}`}
                        />
                    </figure>
                ))}
            </Slider>
        </>
    );
}
