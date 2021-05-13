import Image from 'next/image';
import { NextSeo } from 'next-seo';
import Nav from '@/components/Nav';

import EventLists from '@/components/EventLists';
import Footer from '@/components/Footer';
import ScrollDownArrow from '@/components/ScrollDownArrow';
import CloudinaryImg from '@/components/CloudinaryImg';

export default function HomePage() {
    return (
        <>
            <NextSeo />
            <Nav />
            <main>
                <section className='relative bg-gradient-to-r from-spurple-500 to-spurple-600'>
                    {/* Orange long illustration */}
                    <figure className='absolute z-0 w-12 pointer-events-none top-6 right-16 md:right-64 md:w-20 lg:right-96'>
                        <Image
                            src='/images/long-illustration-2.png'
                            alt='illustration'
                            width={200}
                            height={800}
                            priority
                            loading='eager'
                            layout='responsive'
                        />
                    </figure>
                    {/* Floating blue square illustration */}
                    <figure className='absolute w-32 pointer-events-none right-12 top-24 animate-float float-delay md:top-52 md:right-52 md:w-[182px] lg:right-80'>
                        <CloudinaryImg
                            src='images/blur-square_kprsco.png'
                            width={182}
                            height={181}
                            alt='illustration'
                        />
                    </figure>
                    {/* Checkered quartet illustration */}
                    <figure
                        style={{ transform: 'translateY(42.9%)' }}
                        className='absolute bottom-0 right-0 z-0 pointer-events-none w-60 md:w-96 '
                    >
                        <Image
                            src='/images/quartet-illus.png'
                            width={424}
                            height={742}
                            priority
                            loading='eager'
                            layout='responsive'
                        />
                    </figure>
                    <article className='relative flex flex-col justify-center min-h-screen space-y-4 text-white layout'>
                        {/* Logo StudentsxCEOs League */}
                        <figure className='w-12 md:w-[77px]'>
                            <CloudinaryImg
                                src='images/logo/logo_hkanxt.png'
                                width={77}
                                height={113}
                                alt='Logo'
                            />
                        </figure>
                        <h1 className='text-4xl md:text-6xl'>
                            StudentsxCEOs
                            <br />
                            League
                        </h1>
                        <p className='max-w-xl leading-7 md:text-lg'>
                            The biggest annual event held by StudentsxCEOs East
                            Java, which is aimed to become a Development
                            Platform.
                        </p>
                        {/* <ButtonLink
                            className='self-start'
                            href='https://tiny.cc/RegistrationTnD'
                        >
                            Register Talks and Discussion
                        </ButtonLink> */}
                        {/* Hide on mobile */}
                        <figure className='hidden md:block'>
                            <ScrollDownArrow colorClass='text-white' />
                        </figure>
                    </article>
                </section>
                <section className='bg-beige'>
                    <article className='relative py-24 pt-36 layout'>
                        <h2 className='text-center'>
                            What's On{' '}
                            <span className='block md:inline-block'>
                                StudentsxCEOs League
                            </span>
                        </h2>
                        <hr className='h-2 mx-auto mt-2 border-0 rounded w-60 md:w-80 bg-gradient-to-r from-sgreen-500 to bg-sgreen-600' />
                        <div className='mt-12'>
                            <EventLists />
                        </div>
                    </article>
                </section>
            </main>
            <Footer />
        </>
    );
}
