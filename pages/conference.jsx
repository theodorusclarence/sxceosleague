import Image from 'next/image';
import { NextSeo } from 'next-seo';

import Nav from '@/components/Nav';
import PurpleLabel from '@/components/PurpleLabel';
import ScrollDownArrow from '@/components/ScrollDownArrow';
import TimelineList from '@/components/TimelineList';
import Footer from '@/components/Footer';
import CloudinaryImg from '@/components/CloudinaryImg';
import ButtonLink from '@/components/ButtonLink';

import { conferenceTimeline } from '@/data/conference';

const title = 'Conference - StudentsxCEOs League';
const description =
    'An adapted version of contributing and sharing your potential idea in policy-making recommendation with students all over Indonesia.';
const url = 'https://sxceosleague.com/conference';

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
                <section className='relative bg-watusi'>
                    <figure className='select-none pointer-events-none absolute w-[700px] left-1/4 -bottom-40 md:left-1/2 md:w-[1200px] md:bottom-auto md:top-1/2 transform md:-translate-y-1/2 md:pl-10 md:pt-80'>
                        {/* Triangle Illustration */}
                        <CloudinaryImg
                            src='images/conference/bg-polygon-2_lzflrw.png'
                            width={1400}
                            height={1400}
                            effect='blur:1000'
                            alt='Polygon Illustration'
                        />
                    </figure>
                    <article className='relative flex flex-col items-start justify-center min-h-screen text-black md:items-center md:justify-between md:flex-row-reverse layout'>
                        {/* Add spacing when stacking vertically */}
                        <figure className='w-20 mb-8 md:w-72 md:mb-0'>
                            {/* Logo */}
                            <CloudinaryImg
                                src='images/logo/conference_xlk6uv.png'
                                width={396}
                                height={403}
                                alt='Logo-Conference'
                            />
                        </figure>
                        <div className='max-w-xl space-y-4'>
                            <PurpleLabel>StudentsxCEOs League</PurpleLabel>
                            <h1 className='text-4xl text-spurple-400 md:text-7xl'>
                                Conference
                            </h1>
                            <p className='leading-6 text-gray-900 md:leading-8'>
                                A deep analysis packed in a fruitful discussion
                                with experts in policy-making recommendations
                                with students all over Indonesia. The conference
                                will require delegates, the conference leader,
                                and panelists to discuss, collaborate, and
                                present their thoughts and ideas to reach an
                                inclusive solution.
                            </p>
                            <div className='flex space-x-2 text-center'>
                                {/* <ButtonLink
                                    href='/r/conference'
                                    className='inline-block'
                                >
                                    Register Conference
                                </ButtonLink> */}
                                <ButtonLink
                                    href='/conference/handbook'
                                    className='inline-block !text-gray-700'
                                    outline
                                >
                                    Download Handbook
                                </ButtonLink>
                            </div>
                        </div>
                        <ScrollDownArrow />
                    </article>
                </section>
                {/* Chambers Section */}
                <section className='bg-gradient-to-r from-geraldine to-goldentainoi'>
                    <article className='min-h-screen py-16 space-y-8 layout'>
                        <h2 className='text-center text-white mb-14'>
                            Chambers
                        </h2>
                        <div className='flex flex-col p-8 md:p-16 md:x-16 md:py-20 rounded-xl bg-beige lg:flex-row md:space-x-8 md:items-center'>
                            <div className='w-full space-y-4'>
                                <h3>
                                    Workforce Employment Policy After the
                                    COVID-19 Pandemic
                                </h3>
                                <p className='leading-6 md:leading-8'>
                                    Employment is one of the issues that is
                                    often been discussed during the pandemic. A
                                    lot of changes happened especially for the
                                    requirement of workers. A new skill set,
                                    adaptability, and change management will be
                                    the future tools to survive in the work
                                    field even after the pandemic. This Chamber
                                    will discuss how Indonesia should evaluate
                                    its employment policies to prepare a
                                    workforce environment that is sovereign,
                                    fair, skilful and just.
                                </p>
                            </div>
                            <div className='w-full mt-8 lg:w-1/2'>
                                <figure>
                                    <Image
                                        className='bg-gray-500 rounded-xl'
                                        src={'/images/conference/chamber-1.jpg'}
                                        width={800}
                                        height={533}
                                        alt='Chamber 1'
                                    />
                                </figure>
                            </div>
                        </div>
                        <div className='flex flex-col p-8 md:p-16 md:x-16 md:py-20 rounded-xl bg-beige lg:flex-row md:space-x-8 md:items-center pre-event'>
                            <div className='w-full space-y-4'>
                                <h3>
                                    Indonesia’s Readiness on Embracing
                                    Digitalization on the Industry 4.0 Era
                                </h3>
                                <p className='leading-6 md:leading-8'>
                                    The era of disruption that we are facing
                                    demands various changes in the fabric of our
                                    society, one of which is digitization. The
                                    utilization of big data plays its role in
                                    the interconnected society where the
                                    internet becomes a necessity. This condition
                                    leads to the development of Industry 4.0 in
                                    Indonesia. Big data and the Internet of
                                    Things (IoT) combined allow industries to do
                                    real-time monitoring and help in the
                                    decision-making process. However, privacy,
                                    security, and technology problems await to
                                    be solved. This Chamber will discuss how
                                    Indonesia's readiness is to welcome Industry
                                    4.0 in terms of human resources, technology,
                                    bureaucracy, and regulatory framework along
                                    with how to tackle its challenges.
                                </p>
                            </div>
                            <div className='w-full mt-8 lg:w-1/2'>
                                <figure>
                                    <Image
                                        className='bg-gray-500 rounded-xl'
                                        src={'/images/conference/chamber-2.jpg'}
                                        width={800}
                                        height={533}
                                        alt='Chamber 2'
                                    />
                                </figure>
                            </div>
                        </div>
                        <div className='flex flex-col p-8 md:px-16 md:py-20 rounded-xl bg-beige lg:flex-row md:space-x-8 md:items-center pre-event'>
                            <div className='w-full space-y-4'>
                                <h3>
                                    The Implementation of Green Industrial
                                    Policy in Indonesia
                                </h3>
                                <p className='leading-6 md:leading-8'>
                                    Climate change has been the main concern for
                                    every state as the destruction of the
                                    environment happens time by time. Increased
                                    sea level, submerged islands, polluted air
                                    and water, and severely injured ecosystems
                                    are several impacts that occur as
                                    consequences. Green Industrial Policy has
                                    been increasing all around the world,
                                    especially to the country with a huge number
                                    of industries in it. This chamber will
                                    discuss the implementation of the Green
                                    Industrial Policy in Indonesia, its impact,
                                    and how to make it sustainable as a way to
                                    preserve the environment.
                                </p>
                            </div>
                            <div className='w-full mt-8 lg:w-1/2'>
                                <figure>
                                    <Image
                                        className='object-cover bg-gray-500 rounded-xl'
                                        src={'/images/conference/chamber-3.jpg'}
                                        width={800}
                                        height={733}
                                        alt='Chamber 3'
                                    />
                                </figure>
                            </div>
                        </div>
                    </article>
                </section>

                {/* Prize Section */}
                <section className='bg-watusi'>
                    <article className='min-h-screen py-16 space-y-8 layout'>
                        <div
                            className='py-12 bg-beige rounded-3xl'
                            style={{
                                boxShadow:
                                    '0px 4px 126px 6px rgba(201, 103, 103, 0.35)',
                            }}
                        >
                            <h2 className='text-center mb-14'>
                                Prize for Each Chamber
                            </h2>
                            <ul className='text-center'>
                                <figure className='w-56 mx-auto -mt-20 md:-mt-20 md:w-96'>
                                    <Image
                                        width={1139}
                                        height={1129}
                                        layout='responsive'
                                        src='/images/conference/prize-1.png'
                                        alt='Prize 1'
                                    />
                                </figure>
                                <figure className='w-56 mx-auto -mt-20 md:-mt-40 md:w-96'>
                                    <Image
                                        width={1139}
                                        height={1129}
                                        layout='responsive'
                                        src='/images/conference/prize-2.png'
                                        alt='Prize 2'
                                    />
                                </figure>
                                <figure className='w-56 mx-auto -mt-20 md:-mt-40 md:w-96'>
                                    <Image
                                        width={1139}
                                        height={1129}
                                        layout='responsive'
                                        src='/images/conference/prize-3.png'
                                        alt='Prize 3'
                                    />
                                </figure>
                                <figure className='w-56 mx-auto -mt-20 md:-mt-40 md:w-96'>
                                    <Image
                                        width={1139}
                                        height={1129}
                                        layout='responsive'
                                        src='/images/conference/prize-4.png'
                                        alt='Prize 4'
                                    />
                                </figure>
                            </ul>
                        </div>
                    </article>
                </section>

                {/* Agenda Section */}
                <section className='bg-watusi'>
                    <article className='min-h-screen py-16 space-y-8 layout'>
                        <h2 className='text-center mb-14'>Agenda</h2>
                        <div className='p-8 bg-gray-900 text-watusi md:p-16 md:x-16 md:py-20 rounded-xl'>
                            <div className='flex flex-col-reverse mx-2 md:flex-row md:space-x-16 md:items-center'>
                                <div className='w-full space-y-4 md:ml-4 md:w-2/3'>
                                    <h3>Coaching Clinic Session</h3>
                                    <p className='leading-6 md:leading-8'>
                                        The delegates will have a coaching
                                        clinic based on their respective
                                        chamber. The coaching clinic will be
                                        given by our speakers to give a brief
                                        introduction in regards to the problem
                                        and will be followed by a Question &
                                        Answer session.
                                    </p>
                                </div>
                                <div className='w-full mt-8 md:w-1/2'>
                                    <p className='mb-4 text-6xl font-bold text-center uppercase md:text-8xl'>
                                        Day 1
                                    </p>
                                </div>
                            </div>
                            <hr className='w-full h-2 mx-auto my-8 border-0 rounded bg-gradient-to-r from-spurple-500 to bg-spurple-600' />
                            <div className='flex flex-col mx-2 md:flex-row md:space-x-16 md:items-center'>
                                <div className='w-full mt-8 md:w-1/2'>
                                    <p className='mb-4 text-6xl font-bold text-center uppercase md:text-8xl'>
                                        Day 2
                                    </p>
                                </div>
                                <div className='w-full space-y-4 md:w-2/3'>
                                    <h3>Group Discussion Session</h3>
                                    <PurpleLabel className='inline-block'>
                                        Session 1
                                    </PurpleLabel>
                                    <p className='leading-6 md:leading-8 md:mr-8'>
                                        This session starts by discussing a
                                        selected topic moderated by the
                                        Conference Leader and each delegate will
                                        present their idea/point in a form of a
                                        speech. Then, continue with one session
                                        of group discussion. The final agenda of
                                        this season will be a presentation from
                                        the delegates regarding the related
                                        issues
                                    </p>
                                    <PurpleLabel className='inline-block'>
                                        Session 2
                                    </PurpleLabel>
                                    <p className='leading-6 md:leading-8 md:mr-8'>
                                        The participants in each chamber will be
                                        divided again into several groups. Each
                                        group will have a discussion about the
                                        solution regarding the topic of the
                                        corresponding chamber and produce a
                                        pre-resolution paper. At the end of the
                                        session, every group has to present
                                        their proposed solution to the speaker.
                                    </p>
                                    <PurpleLabel className='inline-block'>
                                        Session 3
                                    </PurpleLabel>
                                    <p className='leading-6 md:leading-8 md:mr-8'>
                                        In this final session, the speaker will
                                        provide clarifications based on the
                                        previous presentation and ideal
                                        solutions based on the specified case.
                                        Delegates will also be given the
                                        opportunity to ask their question and
                                        start the discussion
                                    </p>
                                </div>
                            </div>
                            <hr className='w-full h-2 mx-auto my-8 border-0 rounded bg-gradient-to-r from-spurple-500 to bg-spurple-600' />
                            <div className='flex flex-col-reverse mx-2 md:flex-row md:space-x-16 md:items-center'>
                                <div className='w-full space-y-4 md:ml-4 md:w-2/3'>
                                    <h3>Final Pitching Round</h3>
                                    <PurpleLabel className='inline-block'>
                                        Session 1
                                    </PurpleLabel>
                                    <p className='leading-6 md:leading-8'>
                                        All delegates will discuss a fixed
                                        resolution paper consist of all
                                        recommendations and solutions regarding
                                        the main topic on each chamber and there
                                        will be a final presentation to
                                        represent 3 days discussion
                                    </p>
                                    <PurpleLabel className='inline-block'>
                                        Session 2
                                    </PurpleLabel>
                                    <p className='leading-6 md:leading-8'>
                                        Selected Delegates will be challenged to
                                        find a good, proper, and applicable
                                        solution for a new study case given by a
                                        panelist. Afterward, the following
                                        session will be filled by pitching
                                        sessions and Q&A for the solution
                                        proposed by selected delegates.
                                    </p>
                                </div>
                                <div className='w-full mt-8 md:w-1/2'>
                                    <p className='mb-4 text-6xl font-bold text-center uppercase md:text-8xl'>
                                        Day 3
                                    </p>
                                </div>
                            </div>
                        </div>
                    </article>
                </section>
                {/* Timeline Section */}
                <section className='bg-watusi'>
                    <article className='py-16 layout'>
                        <h2 className='mb-5 text-center text-tundora'>
                            Timeline
                        </h2>
                        {conferenceTimeline.map((val) => (
                            <TimelineList
                                key={val.eventDate}
                                eventDate={val.eventDate}
                                eventName={val.eventName}
                            />
                        ))}
                    </article>
                </section>
            </main>
            <Footer />
        </div>
    );
}
