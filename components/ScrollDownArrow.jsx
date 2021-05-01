import { IoArrowDownOutline } from 'react-icons/io5';

export default function ScrollDownArrow({ colorClass = 'text-gray-700' }) {
    return (
        <figure
            className='absolute cursor-pointer bottom-2 md:bottom-10 left-1/2'
            style={{ transform: 'translateX(-50%)' }}
            onClick={(e) => {
                e.preventDefault();
                window.scrollBy({
                    top: window.innerHeight - 60,
                    left: 0,
                    behavior: 'smooth',
                });
            }}
        >
            <IoArrowDownOutline
                className={`${colorClass} w-8 h-8 md:w-10 md:h-10 animate-float`}
            />
        </figure>
    );
}
