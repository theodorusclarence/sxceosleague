import Image from 'next/image';
import { NextSeo } from 'next-seo';
import Nav from '@/components/Nav';

import EventLists from '@/components/EventLists';
import Footer from '@/components/Footer';
import ScrollDownArrow from '@/components/ScrollDownArrow';
import ButtonLink from '@/components/ButtonLink';
import { rotate } from 'tailwindcss/defaultTheme';

export default function ibl_case_challenge() {
    return (
        <>
            <NextSeo />
            <Nav />
            <main className='overflow-x-hidden'>
                <section
                    className='relative bg-gradient-to-r from-spurple-500 to-spurple-600'
                    style={{ background: 'rgba(238, 252, 242, 1)' }}
                >
                    {/* ibl-cc-logo */}
                    <figure className='absolute z-30 invisible w-32 transform translate-y-20 pointer-events-none translate-x-44 lg:visible right-12 md:top-52 md:right-72 md:w-48 lg:right-80'>
                        <Image
                            priority
                            loading='eager'
                            width={305}
                            height={690}
                            layout='responsive'
                            src='/images/ibl-cc-logo.png'
                            alt='illustration'
                        />
                    </figure>
                    {/*small rectangle */}
                    <figure className='absolute bottom-0 z-20 invisible transform pointer-events-none lg:visible -translate-y-36 right-5 w-120'>
                        <Image
                            src='/images/Rectangle-28.png'
                            width={360}
                            height={400}
                            priority
                            loading='eager'
                            layout='responsive'
                        />
                    </figure>
                    {/* large rectangle */}
                    <figure
                        style={{ transform: 'translateY(42.9%)' }}
                        className='absolute right-0 z-10 invisible transform pointer-events-none lg:visible translate-x-120 bottom-40 w-60 md:w-120 '
                    >
                        <Image
                            src='/images/Rectangle-29.png'
                            width={424}
                            height={742}
                            priority
                            loading='eager'
                            layout='responsive'
                        />
                    </figure>
                    <article className='relative flex flex-col justify-center min-h-screen space-y-4 text-white layout'>
                        {/* Logo StudentsxCEOs League */}
                        <div className='w-1/3 py-2 sm:w-1/4 md:w-1/5 lg:w-1/6 rounded-2xl gradient-purple'>
                            <p className='px-3 text-xs md:mx-auto'>
                                StudentsxCEOs League
                            </p>
                        </div>
                        <h1 className='text-4xl md:text-6xl text-spurple-400'>
                            IBL Case Challenge
                            <br />
                            League
                        </h1>
                        <p className='max-w-xl leading-7 text-black md:text-lg'>
                            The IBL Case Challenge is a case based competition
                            that will encourage each participant to see themself
                            as a leader, who is responsible for solving a
                            business problem of a company in a creative and
                            innovative way with a high level of realization and
                            practice. Brace yourself to meet your peers with
                            various perspectives and buckle up, as we immerse
                            into the business world and work through its problem
                            in digitalization.
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
                <section
                    style={{
                        background:
                            'linear-gradient(90deg, #51FEE9 0%, #6CCAFF 100%)',
                    }}
                    className='py-20'
                >
                    <article className='relative py-24 pt-36 layout'>
                        <h2 className='mb-20 text-center text-white'>
                            Case Contributor
                        </h2>
                        <div className='relative px-10 py-40 space-y-5 rounded-2xl bg-beige lg:mt-52'>
                            <div className='absolute top-0 left-0'>
                                <figure className='overflow-hidden transform -translate-y-5 translate-x-11 md:-translate-y-10 lg:-translate-y-36 W-1/2 w-80 md:w-72 lg:w-96 xl:w-120 rounded-2xl'>
                                    <Image
                                        src={'/images/events/img1.jpg'}
                                        alt='illustration'
                                        width={793}
                                        height={480}
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
                            <h2 className='px-5'>JP Morgan</h2>
                            <div className='flex w-1/3 py-2 ml-5 sm:w-1/4 md:w-1/4 rounded-2xl gradient-purple'>
                                <p className='mx-auto text-white text-md'>
                                    Total Prize: xxxx
                                </p>
                            </div>
                            <p className='px-5'>
                                J.P. Morgan is a global leader in financial
                                services, offering solutions to the world's most
                                important corporations, governments and
                                institutions in more than 100 countries. As
                                announced in early 2018, JPMorgan Chase will
                                deploy $1.75 billion in philanthropic capital
                                around the world by 2023. JP Morgan also leads
                                volunteer service activities for employees in
                                local communities by utilizing our many
                                resources, including those that stem from access
                                to capital, economies of scale, global reach and
                                expertise.
                            </p>
                            <ButtonLink className='ml-5'>
                                <p>Register for IBL Case Challenge</p>
                            </ButtonLink>
                        </div>
                    </article>
                </section>
            </main>
            <Footer />
        </>
    );
}
