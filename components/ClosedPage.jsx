import Image from 'next/image';
import ButtonLink from '@/components/ButtonLink';

export default function ClosedPage({ title }) {
    return (
        <div className='relative overflow-hidden'>
            <figure className='select-none pointer-events-none absolute w-[700px] left-1/4 -bottom-40 md:left-1/2 md:w-[1200px] md:bottom-auto md:top-1/2 transform md:-translate-y-1/2'>
                {/* //* Circle Illustration */}
                <Image
                    src='/images/events/bg-circle.png'
                    width={1200}
                    height={1200}
                    priority
                    loading='eager'
                    layout='responsive'
                    alt='Circle Illustration'
                />
            </figure>
            <section className='bg-beige'>
                <div className='relative flex flex-col items-center justify-center min-h-screen space-y-4 text-center '>
                    <h1>{title}</h1>
                    <ButtonLink href='/'>Back To Home</ButtonLink>
                </div>
            </section>
        </div>
    );
}
