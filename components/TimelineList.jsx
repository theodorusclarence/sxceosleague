export default function TimelineList({ eventDate, eventName }) {
    return (
        <div className='max-w-3xl mx-auto mt-4'>
            <div className='grid grid-flow-row grid-cols-2 md:grid-cols-[2fr,1fr,2fr] md:gap-0 gap-4'>
                <div className='flex flex-col items-end justify-center'>
                    <div className='p-1 min-w-[7rem] md:min-w-[12rem] rounded-tl-full rounded-br-full bg-gradient-to-r from-geraldine to-goldentainoi'>
                        <div className='text-white rounded-tl-full rounded-br-full bg-gradient-to-r from-geraldine to-goldentainoi md:px-9 lg:py-3'>
                            <p className='my-0 font-bold text-center md:text-xl lg:mx-0'>
                                {eventDate}
                            </p>
                        </div>
                    </div>
                </div>
                <div className='flex-col justify-center hidden py-4 mt-4 md:px-4 sm:mt-0 md:flex'>
                    <img
                        src='/images/green-circle.svg'
                        alt='green-circle'
                        className='w-10 h-10 mx-auto my-3 md:w-16'
                    />
                </div>

                <div className='flex flex-col justify-center font-bold md:px-4 md:py-4 sm:mt-0'>
                    <p className='md:text-xl text-tundora'>{eventName}</p>
                </div>
            </div>
        </div>
        // <div className='p-4 text-tundora lg:x-16'>
        //     <div className='flex flex-col mx-2 text-center md:justify-center md:flex-row md:space-x-8 lg:space-x-24 md:items-center'>
        //         <div className='p-1 rounded-tl-full rounded-br-full bg-gradient-to-r from-geraldine to-goldentainoi'>
        //             <div className='text-white rounded-tl-full rounded-br-full bg-gradient-to-r from-geraldine to-goldentainoi md:px-9 lg:py-3'>
        //                 <p className='my-0 md:text-xl lg:mx-0 lg:text-2xl'>
        //                     {eventDate}
        //                 </p>
        //             </div>
        //         </div>
        //         <img
        //             src='/images/green-circle.svg'
        //             alt='green-circle'
        //             className='w-10 h-10 mx-auto my-3 md:w-16'
        //         />
        //         <p className='md:text-2xl'>{eventName}</p>
        //     </div>
        // </div>
    );
}
