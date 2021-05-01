import { useState } from 'react';
import { NextSeo } from 'next-seo';
import Image from 'next/image';

import Nav from '@/components/Nav';
import ButtonLink from '@/components/ButtonLink';
import Footer from '@/components/Footer';
import PurpleLabel from '@/components/PurpleLabel';
import SquareCarousel from '@/components/SquareCarousel';
import ScrollDownArrow from '@/components/ScrollDownArrow';

import {
    igLiveCarousel,
    miniChallengeCarousel,
    tabData,
    tndCarousel,
} from '@/data/pre-event';

const tabList = [
    { name: 'Talks and Discussion Session', id: '1' },
    { name: 'Mini Challenge', id: '2' },
    { name: 'Instagram Live Session', id: '3' },
];

const title = 'Pre Event - StudentsxCEOs League';
const description =
    'A series of events ranging from challenges to an in-depth discussion session to warm you up before participating in our main events.';
const url = 'https://sxceosleague.com/pre-event';

export default function PreEvent() {
    const [selected, setSelected] = useState('3');
    const handleTab = (e) => {
        setSelected(e.target.value);
    };
    return (
        // add wrapper to avoid overflow-x
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
                {/* //* HERO SECTION */}
                <section className='relative bg-beige'>
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
                            <PurpleLabel>StudentsxCEOs League</PurpleLabel>
                            <h1 className='text-5xl text-spurple-400 md:text-7xl'>
                                Pre Event
                            </h1>
                            <p className='leading-6 text-gray-900 md:leading-8'>
                                A series of events ranging from challenges to an
                                in-depth discussion session to warm you up
                                before participating in our main events.
                            </p>
                            {/* <ButtonLink href='/' className='inline-block'>
                                Register
                            </ButtonLink> */}
                        </div>
                        <ScrollDownArrow />
                    </article>
                </section>
                {/* //* TAB SECTION */}
                <section className='bg-gradient-to-r from-sorange-700 to-sorange-500'>
                    <article className='min-h-screen py-16 space-y-8 layout'>
                        <h2 className='text-center'>Pre Event Agenda</h2>
                        {/* Tab selector mobile */}
                        <div className='sm:hidden'>
                            <label htmlFor='tabs' className='sr-only'>
                                Select a tab
                            </label>
                            <select
                                id='tabs'
                                name='tabs'
                                className='block w-full px-0 font-medium bg-transparent border-0 border-b-2 border-white focus:border-white hover:border-gray-300 focus:outline-none focus:ring-0'
                                value={selected}
                                onChange={handleTab}
                            >
                                {tabList.map((tab) => (
                                    <option key={tab.id} value={tab.id}>
                                        {tab.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        {/* Tab selector desktop*/}
                        <div className='hidden sm:block'>
                            <nav
                                className='flex justify-center -mb-px space-x-8'
                                aria-label='Tabs'
                            >
                                {tabList.map((tab) => (
                                    <button
                                        key={tab.name}
                                        onClick={() => setSelected(tab.id)}
                                        className={`
                                            ${
                                                tab.id === selected
                                                    ? 'border-white text-black'
                                                    : 'border-transparent text-gray-800 hover:border-gray-300 focus:border-gray-300'
                                            } 
                                            whitespace-nowrap py-4 px-1 border-b-2 font-bold text-sm focus:outline-none
                                        `}
                                        aria-current={
                                            tab.id === selected
                                                ? 'page'
                                                : undefined
                                        }
                                    >
                                        {tab.name}
                                    </button>
                                ))}
                            </nav>
                        </div>
                        {/* Tab Content */}
                        {/* pre-event class, to give slick left arrow more space */}
                        <div className='flex flex-col p-8 md:x-16 md:py-12 rounded-xl bg-beige md:flex-row md:space-x-8 md:items-center pre-event'>
                            <div className='w-full space-y-4'>
                                <h3>{tabData[selected - 1].name}</h3>
                                <div className='flex items-center space-x-2'>
                                    <p>Timeline: </p>
                                    <PurpleLabel>
                                        {tabData[selected - 1].time}
                                    </PurpleLabel>
                                </div>
                                <p className='leading-6 md:leading-8'>
                                    {tabData[selected - 1].desc}
                                </p>
                                <ButtonLink
                                    href={tabData[selected - 1].href}
                                    className={
                                        tabData[selected - 1].href
                                            ? ''
                                            : 'select-none filter brightness-75'
                                    }
                                >
                                    {tabData[selected - 1].buttonText}
                                </ButtonLink>
                                {/* Add custom button for mini challenge */}
                                {/* //TODO MINICHALLENGE uncomment below*/}
                                {/* {selected === '2' ? (
                                    <ButtonLink
                                        href='https://drive.google.com/drive/folders/1ZGkGUhvD8ZJYICxTS34mnw15G4VmfLln?usp=sharing'
                                        className='mt-4 md:ml-4 !text-gray-700'
                                        outline={true}
                                    >
                                        Download Template
                                    </ButtonLink>
                                ) : null} */}
                            </div>
                            {/* If Talks and Discussion, then show image */}
                            {selected === '1' ? (
                                <div className='w-full mt-8 md:w-1/3'>
                                    <SquareCarousel images={tndCarousel} />
                                </div>
                            ) : null}
                            {/* If Mini Challenge, then show carousel */}
                            {/* //TODO MINICHALLENGE uncomment below*/}
                            {/* {selected === '2' ? (
                                <div className='w-full mt-8 md:w-1/3'>
                                    <SquareCarousel
                                        images={miniChallengeCarousel}
                                    />
                                </div>
                            ) : null} */}
                            {/* If IG Live, then show carousel */}
                            {selected === '3' ? (
                                <div className='w-full mt-8 md:w-1/2'>
                                    {/* <SquareCarousel images={igLiveCarousel} /> */}
                                    <figure>
                                        {/* <img key={image} src={image} alt={`Image ${index}`} /> */}
                                        <Image
                                            className='bg-gray-400'
                                            src={
                                                '/images/pre-event/ig-live.jpg'
                                            }
                                            width={800}
                                            height={1000}
                                            alt={`Image IG Live`}
                                        />
                                    </figure>
                                </div>
                            ) : null}
                        </div>
                    </article>
                </section>
            </main>
            <Footer />
        </div>
    );
}
