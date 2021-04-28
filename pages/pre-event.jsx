import { NextSeo } from 'next-seo';
import Image from 'next/image';

import Nav from '@/components/Nav';
import ButtonLink from '@/components/ButtonLink';

export default function PreEvent() {
    return (
        // add wrapper to avoid overflow-x
        <div className='relative overflow-x-hidden'>
            <NextSeo />
            <Nav />
            <main>
                <section className='relative bg-beige'>
                    <figure className='absolute w-[700px] left-1/4 -bottom-40 md:left-1/2 md:w-[1200px] md:bottom-auto md:top-1/2 transform md:-translate-y-1/2'>
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
                    <article className='relative flex flex-col items-start justify-center min-h-screen text-black md:items-center md:justify-between md:flex-row-reverse layout'>
                        {/* Add spacing when stacking vertically */}
                        <figure className='w-20 mb-8 md:w-72 md:mb-0'>
                            {/* //* Logo */}
                            <Image
                                src='/images/logo/pre-event.png'
                                width={325}
                                height={471}
                                priority
                                loading='eager'
                                layout='responsive'
                                alt='Logo'
                            />
                        </figure>
                        <div className='max-w-xl space-y-4'>
                            <h1 className='text-spurple-400'>Pre Event</h1>
                            <p className='leading-8'>
                                A series of events ranging from challenges to an
                                in-depth discussion session to warm you up
                                before participating in our main events.
                            </p>
                            <ButtonLink href='/' className='inline-block'>
                                Register
                            </ButtonLink>
                        </div>
                    </article>
                </section>
                <section className='bg-gradient-to-r from-sorange-700 to-sorange-500'>
                    <article className='min-h-screen py-12 layout'>
                        <h2 className='text-center'>Pre Event Agenda</h2>
                    </article>
                </section>
            </main>
        </div>
    );
}
