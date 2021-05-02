import Image from 'next/image';
import { NextSeo } from 'next-seo';
import Nav from '@/components/Nav';

import EventLists from '@/components/EventLists';
import Footer from '@/components/Footer';
import ScrollDownArrow from '@/components/ScrollDownArrow';
import ButtonLink from '@/components/ButtonLink';
import { rotate } from 'tailwindcss/defaultTheme';
import PurpleLabel from '@/components/PurpleLabel';

const title = 'IBL Case Challenge - StudentsxCEOs League';
const description =
    'A series of events ranging from challenges to an in-depth discussion session to warm you up before participating in our main events.';
const url = 'https://sxceosleague.com/ibl-case-challenge';

export default function ibl_case_challenge() {
    return (
        <>
            <NextSeo
                title={title}
                description={description}
                canonical={url}
                openGraph={{
                    url,
                    title,
                    description,
                }}
            />
            <Nav />
            <main className='overflow-x-hidden'>
                <section
                    className='relative bg-gradient-to-r from-spurple-500 to-spurple-600'
                    style={{ background: 'rgba(238, 252, 242, 1)' }}
                >
                    {/* ibl-cc-logo */}
                    <figure className='absolute z-20 invisible w-32 transform translate-y-20 pointer-events-none md:z-30 translate-x-44 lg:visible right-12 md:top-52 md:right-72 md:w-48 lg:right-80'>
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
                    <figure className='absolute bottom-0 right-0 z-10 w-64 transform translate-y-10 pointer-events-none lg:w-120 lg:z-20 lg:-translate-y-36 lg:right-5'>
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
                        className='absolute bottom-0 right-0 transform pointer-events-none lg:z-10 lg:translate-x-120 lg:bottom-40 w-60 lg:w-120 '
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
                        <div className='max-w-xl space-y-5'>
                            <PurpleLabel>StudentsxCEOs League</PurpleLabel>

                            <h1 className='text-4xl text-spurple-400 md:text-5xl'>
                                StudentsxCEOs League
                                <br />
                                IBL Case Challenge
                            </h1>
                            <p className='leading-6 text-gray-900 md:leading-8 md:text-lg'>
                                Case based competition that will encourage each
                                participant to see themself as a leader, who is
                                responsible for solving a business problem of a
                                company in a creative and innovative way with a
                                high level of realization and practice.
                            </p>
                        </div>

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
                >
                    <article className='relative py-24 md:pt-36 layout'>
                        <h2 className='mb-10 text-center text-white md:mb-20'>
                            Case Contributor
                        </h2>
                        <div className='relative px-10 py-20 space-x-3 sm:py-28 md:py-40 md:space-y-5 rounded-2xl bg-beige lg:mt-52'>
                            <div className='absolute top-0 left-0'>
                                <figure className='overflow-hidden transform -translate-y-5 translate-x-11 md:-translate-y-10 lg:-translate-y-36 W-1/2 w-72 md:w-72 lg:w-96 xl:w-120 rounded-2xl'>
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
                                            width: 14rem;
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
                            <div className='space-y-5'>
                                <h2 className='mt-24 mb-4 sm:mt-0'>
                                    JP Morgan
                                </h2>

                                <PurpleLabel>Total Prize: xxxx</PurpleLabel>

                                <p className='max-w-4xl'>
                                    J.P. Morgan is a global leader in financial
                                    services, offering solutions to the world's
                                    most important corporations, governments and
                                    institutions in more than 100 countries. As
                                    announced in early 2018, JPMorgan Chase will
                                    deploy $1.75 billion in philanthropic
                                    capital around the world by 2023. JP Morgan
                                    also leads volunteer service activities for
                                    employees in local communities by utilizing
                                    our many resources, including those that
                                    stem from access to capital, economies of
                                    scale, global reach and expertise.
                                </p>

                                <ButtonLink>
                                    Register for IBL Case Challenge
                                </ButtonLink>
                            </div>
                        </div>
                    </article>
                </section>
            </main>
            <Footer />
        </>
    );
}
