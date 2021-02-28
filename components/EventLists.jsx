import Image from 'next/image';
import Slider from 'react-slick';
import { MdArrowForward } from 'react-icons/md';
import UnstyledLink from './UnstyledLink';
import { eventsData } from '@/data/data';

export default function EventLists() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <>
            {/* Show Carousel on Smaller Size */}
            <div className='hidden space-y-20 md:block'>
                {eventsData.map((event) => (
                    <EventCard key={event.id} event={event} />
                ))}
            </div>
            <Slider {...settings} className='block md:hidden'>
                {eventsData.map((event) => (
                    <EventCard key={event.id} event={event} />
                ))}
            </Slider>
        </>
    );
}

function EventCard({ event: { title, excerpt, route, id } }) {
    return (
        <div className='grid items-center max-w-lg grid-cols-1 gap-4 px-2 mx-auto md:mx-0 md:max-w-none md:px-0 md:grid-cols-2 event__card group'>
            <EventImage id={id} />
            <div className='mt-4 space-y-2 event__card-text'>
                <h3>{title}</h3>
                <p className='max-w-lg mb-4 leading-7 text-gray-800'>
                    {excerpt}
                </p>
                <UnstyledLink
                    href={route}
                    className='block py-1 view-container'
                >
                    <div className='inline-flex items-center space-x-2 font-bold text-gray-900 view'>
                        <p>View More </p>
                        <span className='inline'>
                            <MdArrowForward />
                        </span>
                    </div>
                </UnstyledLink>
            </div>
            <style jsx>{`
                /* 768 md: */
                @media (min-width: 48rem) {
                    .event__card:nth-child(2) .event__card-text {
                        grid-column: 1;
                        grid-row: 1;
                    }
                }
            `}</style>
        </div>
    );
}

function EventImage({ id }) {
    return (
        <div
            className={`mt-6 mr-6 w-80 md:w-72 xl:w-120 lg:w-96 bg-gradient-to-r 
        ${
            id === 1
                ? 'from-sorange-600 to-sorange-500'
                : id === 2
                ? 'from-spurple-500 to-spurple-600'
                : 'from-sred-500 to-sred-600 '
        } 
        rounded-2xl`}
        >
            <figure className='overflow-hidden transform translate-x-6 -translate-y-6 w-80 md:w-72 lg:w-96 xl:w-120 rounded-2xl'>
                <Image
                    src={`/images/events/img${id}.jpg`}
                    alt='illustration'
                    width={493}
                    height={280}
                    priority
                    layout='responsive'
                />
            </figure>
            <style jsx>{`
                @media (min-width: 320px) and (max-width: 370px) {
                    div,
                    figure {
                        width: 16rem;
                    }
                }

                @media (min-width: 370px) and (max-width: 400px) {
                    div,
                    figure {
                        width: 18.5rem;
                    }
                }
            `}</style>
        </div>
    );
}
