import Image from 'next/image';
import Slider from 'react-slick';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

export default function SquareCarousel({ className, ...rest }) {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: (
            <button>
                <MdKeyboardArrowLeft className='text-xl text-spurple-800' />
            </button>
        ),
        nextArrow: (
            <button>
                <MdKeyboardArrowRight className='text-xl text-spurple-800' />
            </button>
        ),
    };

    return (
        <>
            <Slider {...settings} className={`${className} block`}>
                {[1, 2, 3, 4, 5].map((item) => (
                    <img src='/images/pre-event/test-post.png' alt='' />
                ))}
            </Slider>
            {/* <figure key={item}>
                        <Image
                            src='/images/events/img1.jpg'
                            width={500}
                            height={500}
                            objectFit='cover'
                            loading='eager'
                            alt='Post'
                        />
                    </figure> */}
        </>
    );
}
