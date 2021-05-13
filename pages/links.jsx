import { NextSeo } from 'next-seo';

import { links } from '@/data/links';

import Nav from '@/components/Nav';
import ButtonLink from '@/components/ButtonLink';
import SquareLink from '@/components/SquareLink';
import CloudinaryImg from '@/components/CloudinaryImg';

const title = 'Links StudentsxCEOs League';
const description =
    'Link shortcut for StudentsxCEOs League – a platform for selected Indonesian students to gain insights and create innovative solutions.';
const url = 'https://sxceosleague.com/links';

export default function link() {
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
            <section className=''>
                <div className='grid h-screen overflow-hidden text-white parent'>
                    <main className='bg-gradient-to-br from-spurple-500 to-spurple-600'>
                        <div className='relative z-10 flex items-center justify-center h-full layout-left'>
                            <article className='z-10 flex flex-col items-center mx-auto mt-4 md:transform md:translate-x-16 lg:translate-x-28'>
                                <figure className='w-12 mb-5 md:w-[77px]'>
                                    <CloudinaryImg
                                        src='images/logo/logo_hkanxt.png'
                                        width={77}
                                        height={113}
                                        alt='Logo'
                                    />
                                </figure>
                                <div className='space-y-4'>
                                    {links.map((link) => (
                                        <SquareLink
                                            key={link.url}
                                            href={link.url}
                                        >
                                            {link.label}
                                        </SquareLink>
                                    ))}
                                </div>
                                <ButtonLink href='/' className='mt-8'>
                                    Go to Website
                                </ButtonLink>
                            </article>
                            {/* Floating orange triangle illustration */}
                            <figure className='absolute select-none -bottom-12 left-8 w-44 md:w-72 md:left-auto md:-right-32 animate-float'>
                                <CloudinaryImg
                                    src='images/blur-triangle_sjw1xv.png'
                                    width={997}
                                    height={1000}
                                    alt='illustration'
                                />
                            </figure>
                            {/* Mobile Only: Floating green triangle illustration */}
                            <figure className='absolute right-0 select-none bottom-12 md:hidden w-44 animate-float float-delay-2'>
                                <CloudinaryImg
                                    src='images/blur-triangle-blue_b3zpkh.png'
                                    width={261}
                                    height={366}
                                    alt='illustration'
                                />
                            </figure>
                            {/* Desktop Only: Orange long illustration */}
                            <figure className='absolute top-0 hidden select-none md:block md:w-32 left-48'>
                                <CloudinaryImg
                                    src='images/long-illustration-2_jyu4aw.png'
                                    width={128}
                                    height={509}
                                    alt='illustration'
                                />
                            </figure>
                            {/* Floating blue circle illustration */}
                            <figure className='absolute z-0 select-none -left-12 w-60 float-delay top-1/4 md:top-auto md:bottom-28 md:left-4 md:w-96 animate-float'>
                                <CloudinaryImg
                                    src='images/blur-circle_q4fb7r.png'
                                    width={1026}
                                    height={1026}
                                    alt='illustration'
                                />
                            </figure>
                            <div className='absolute bottom-0 z-20 grid grid-cols-3 gap-2 px-8 py-2 transform translate-y-1/2 bg-white rounded-full social md:gap-4 md:py-12 md:px-6 md:grid-cols-1 md:grid-rows-3 md:right-0 md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:translate-x-1/2 '>
                                <a href='https://instagram.com/studentsxceosleague?igshid=zpjn1z16yw1g'>
                                    <img
                                        className='w-8 h-8 md:w-10 md:h-10'
                                        src='/images/logo-ig.svg'
                                    />
                                </a>
                                <a href='https://www.linkedin.com/company/studentsxceos-league/'>
                                    <img
                                        className='w-8 h-8 md:w-10 md:h-10'
                                        src='/images/logo-linkedin.svg'
                                    />
                                </a>
                                <a href='mailto:sxceosleague@gmail.com'>
                                    <img
                                        className='w-8 h-8 md:w-10 md:h-10'
                                        src='/images/logo-mail.svg'
                                    />
                                </a>
                            </div>
                        </div>
                    </main>
                    <aside className='bg-gradient-to-b md:bg-gradient-to-r from-sgreen-500 to-sgreen-600'>
                        <div className='relative flex flex-col items-center justify-end h-full layout-right'>
                            {/* Purple long illustration */}
                            <figure className='w-8 select-none md:w-28'>
                                <CloudinaryImg
                                    src='images/long-illustration_o7arvw.png'
                                    width={460}
                                    height={1132}
                                    alt='illustration'
                                />
                            </figure>
                        </div>
                    </aside>
                </div>
                <style jsx>{`
                    article {
                        max-width: 13rem;
                    }
                    .parent {
                        grid-template-rows: 90% 10%;
                    }

                    .social {
                        box-shadow: 17px 25px 95px rgba(85, 56, 143, 0.35);
                    }

                    @media (min-width: 768px) {
                        .parent {
                            grid-template-rows: auto;
                            grid-template-columns: 70% 30%;
                        }

                        article {
                            max-width: 20rem;
                        }

                        .layout-left {
                            max-width: 1000px;
                            margin-left: auto;
                        }

                        .layout-right {
                            max-width: 1430px;
                            margin-right: auto;
                        }
                    }
                `}</style>
            </section>
        </>
    );
}
