import ButtonLink from '@/components/ButtonLink';
import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import PurpleLabel from '@/components/PurpleLabel';
import ScrollDownArrow from '@/components/ScrollDownArrow';
import { NextSeo } from 'next-seo';
import Image from 'next/image';

const title = 'IBL Case Challenge - StudentsxCEOs League';
const description =
    'A series of events ranging from challenges to an in-depth discussion session to warm you up before participating in our main events.';
const url = 'https://sxceosleague.com/ibl-case-challenge';

export default function Conference() {
    return (
        <div className='relative overflow-x-hidden'>
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
            <main>
                {/* HERO SECTION */}
                <section
                    className='relative'
                    style={{ background: 'rgba(238, 252, 242, 1)' }}
                >
                    <figure className='select-none pointer-events-none absolute w-120 left-1/4 -bottom-40 md:left-1/2 md:w-[1200px] md:bottom-auto md:top-1/2 transform md:-translate-y-1/2 md:pl-10 md:pt-80'>
                        {/* Triangle Illustration */}
                        <Image
                            src='/images/circle-group.png'
                            width={1000}
                            height={850}
                            priority
                            loading='eager'
                            layout='responsive'
                            alt='rectangle Illustration'
                        />
                    </figure>
                    <article className='relative flex flex-col items-start justify-center min-h-screen text-black md:items-center md:justify-between md:flex-row-reverse layout'>
                        {/* Add spacing when stacking vertically */}
                        <figure className='w-16 mb-8 md:w-64 md:mb-0'>
                            {/* Logo */}
                            <Image
                                src='/images/ibl-cc-logo.png'
                                width={216}
                                height={485}
                                priority
                                loading='eager'
                                layout='responsive'
                                alt='Logo-Conference'
                            />
                        </figure>
                        <div className='max-w-xl space-y-4'>
                            <PurpleLabel>StudentsxCEOs League</PurpleLabel>
                            <h1 className='text-5xl text-spurple-400 md:text-7xl'>
                                IBL Case Challenge
                            </h1>
                            <p className='leading-6 text-gray-900 md:leading-8'>
                                Case based competition that will encourage each
                                participant to see themself as a leader, who is
                                responsible for solving a business problem of a
                                company in a creative and innovative way with a
                                high level of realization and practice.
                            </p>
                            {/* <ButtonLink href='/' className='inline-block'>
                                Button
                            </ButtonLink> */}
                        </div>
                        <ScrollDownArrow />
                    </article>
                </section>
                {/* JP MORGAN Section */}
                <section
                    style={{
                        background:
                            'linear-gradient(90deg, #51FEE9 0%, #6CCAFF 100%)',
                    }}
                >
                    <article className='relative py-24 md:pt-36 layout'>
                        <h2 className='mb-10 text-center text-white'>
                            Case Contributor
                        </h2>

                        <h1
                            style={{
                                background:
                                    'linear-gradient(90deg, #F44E61 0%, #FA8A97 100%)',
                            }}
                            className='max-w-xl p-4 mx-auto text-center text-white rounded-2xl'
                        >
                            Soon to be Announced
                        </h1>

                        {/* Coming Soon */}
                        {/* <div className='relative px-10 py-20 space-x-3 sm:py-28 md:py-40 md:space-y-5 rounded-2xl bg-beige lg:mt-52'>
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
                        </div> */}
                    </article>
                </section>
                {/* prize section */}
                <section
                    className='bg-watusi'
                    style={{ background: 'rgba(234, 251, 240, 1)' }}
                >
                    <article className='min-h-screen py-16 space-y-8 layout'>
                        <h2 className='text-center mb-14'>Total Prize</h2>
                        <div
                            className='p-8 shadow-lg text-watusi md:p-16 md:x-16 md:py-20 rounded-xl'
                            style={{ background: 'rgba(238, 252, 242, 1)' }}
                        >
                            <div className='grid grid-cols-3 gap-x-8'>
                                <figure>
                                    <Image
                                        src='/prize-1.svg'
                                        height={300}
                                        width={300}
                                    />
                                </figure>
                            </div>
                        </div>
                    </article>
                </section>
            </main>
            <Footer />
        </div>
    );
}
