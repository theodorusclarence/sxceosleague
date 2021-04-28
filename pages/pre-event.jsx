import { useState } from 'react';
import { NextSeo } from 'next-seo';
import Image from 'next/image';

import Nav from '@/components/Nav';
import ButtonLink from '@/components/ButtonLink';
import Footer from '@/components/Footer';
import { tabData } from '@/data/pre-event';
import PurpleLabel from '@/components/PurpleLabel';
import { IoArrowDownOutline } from 'react-icons/io5';

const tabList = [
    { name: 'Talks and Discussion Session', id: 1 },
    { name: 'Mini Challenge', id: 2 },
    { name: 'Instagram Live Session', id: 3 },
];

export default function PreEvent() {
    const [selected, setSelected] = useState(2);
    const handleTab = (e) => {
        setSelected(e.target.value);
    };
    return (
        // add wrapper to avoid overflow-x
        <div className='relative overflow-x-hidden'>
            <NextSeo />
            <Nav />
            <main>
                {/* HERO SECTION */}
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
                                before participating in our main events. Get
                                ready to connect with fellow students and
                                leaders to establish your future career.
                            </p>
                            {/* <ButtonLink href='/' className='inline-block'>
                                Register
                            </ButtonLink> */}
                        </div>
                        <figure
                            className='absolute cursor-pointer bottom-2 md:bottom-10 left-1/2'
                            style={{ translateX: '-50%' }}
                            onClick={(e) => {
                                e.preventDefault();
                                window.scrollBy({
                                    top: window.innerHeight - 60,
                                    left: 0,
                                    behavior: 'smooth',
                                });
                            }}
                        >
                            <IoArrowDownOutline className='w-8 h-8 text-gray-700 md:w-10 md:h-10 animate-bounce' />
                        </figure>
                    </article>
                </section>
                <section className='bg-gradient-to-r from-sorange-700 to-sorange-500'>
                    <article className='min-h-screen py-16 space-y-8 layout'>
                        <h2 className='text-center'>Pre Event Agenda</h2>
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
                        <div className='flex flex-col p-8 md:x-16 md:py-12 rounded-xl bg-beige md:flex-row md:space-x-8 md:items-center'>
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
                            </div>
                            <figure className='w-full mt-8 overflow-hidden rounded-3xl md:mt-0'>
                                {/* //* Logo */}
                                <Image
                                    src='/images/events/img1.jpg'
                                    width={493}
                                    height={280}
                                    loading='eager'
                                    layout='responsive'
                                    alt='Logo'
                                />
                            </figure>
                        </div>
                    </article>
                </section>
            </main>
            <Footer />
        </div>
    );
}
