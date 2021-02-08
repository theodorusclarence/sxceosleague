import { NextSeo } from 'next-seo';
import Image from 'next/image';

export default function Home() {
    return (
        <>
            <NextSeo />
            <section className=''>
                <div className='grid h-screen overflow-hidden text-white parent'>
                    <main className=' bg-gradient-to-br from-spurple-500 to-spurple-600'>
                        <div className='relative z-10 flex items-center justify-center h-full layout-left'>
                            <article className='z-10 flex flex-col items-start mx-auto md:transform md:translate-x-16 lg:translate-x-28'>
                                <h1 className='text-6xl md:text-8xl'>
                                    Coming Soon
                                </h1>
                                <h3>StudentsxCEOs League</h3>
                            </article>
                            <figure className='absolute -bottom-12 left-8 w-44 md:w-72 md:left-auto md:-right-32 animate-float'>
                                <Image
                                    width={997}
                                    height={1000}
                                    layout='responsive'
                                    src='/images/blur-triangle.png'
                                    alt='illustration'
                                />
                            </figure>
                            <figure className='absolute right-0 bottom-12 md:hidden w-44 animate-float float-delay-2'>
                                <Image
                                    width={261}
                                    height={366}
                                    layout='responsive'
                                    src='/images/blur-triangle-blue.png'
                                    alt='illustration'
                                />
                            </figure>
                            <figure className='absolute w-32 top-12 -right-12 md:-right-20 md:w-52 '>
                                <Image
                                    width={534}
                                    height={366}
                                    layout='responsive'
                                    src='/images/quarter-circle.png'
                                    alt='illustration'
                                />
                            </figure>
                            <figure className='absolute top-0 hidden md:block md:w-32 left-48'>
                                <Image
                                    width={306}
                                    height={1128}
                                    layout='responsive'
                                    src='/images/long-illustration-2.png'
                                    alt='illustration'
                                />
                            </figure>
                            <figure className='absolute z-0 -left-12 w-60 float-delay top-1/4 md:top-auto md:bottom-28 md:left-4 md:w-96 animate-float'>
                                <Image
                                    width={1026}
                                    height={1026}
                                    layout='responsive'
                                    src='/images/blur-circle.png'
                                    alt='illustration'
                                />
                            </figure>
                            <div className='absolute bottom-0 z-20 grid grid-cols-3 gap-2 px-8 py-2 transform translate-y-1/2 bg-white rounded-full social md:gap-4 md:py-12 md:px-6 md:grid-cols-1 md:grid-rows-3 md:right-0 md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:translate-x-1/2 '>
                                <a
                                    rel='noopener noreferer'
                                    target='_blank'
                                    href='#'
                                >
                                    <img
                                        className='w-8 h-8 md:w-10 md:h-10'
                                        src='/images/logo-ig.svg'
                                    />
                                </a>
                                <a
                                    rel='noopener noreferer'
                                    target='_blank'
                                    href='#'
                                >
                                    <img
                                        className='w-8 h-8 md:w-10 md:h-10'
                                        src='/images/logo-linkedin.svg'
                                    />
                                </a>
                                <a
                                    rel='noopener noreferer'
                                    target='_blank'
                                    href='#'
                                >
                                    <img
                                        className='w-8 h-8 md:w-10 md:h-10'
                                        src='/images/logo-mail.svg'
                                    />
                                </a>
                            </div>
                        </div>
                    </main>
                    <asid className='bg-gradient-to-r from-sgreen-500 to-sgreen-600'>
                        <div className='relative flex flex-col items-center justify-end h-full layout-right'>
                            <figure className='w-8 md:w-28'>
                                <Image
                                    width={460}
                                    height={1132}
                                    layout='responsive'
                                    src='/images/long-illustration.png'
                                    alt='illustration'
                                />
                            </figure>
                        </div>
                    </asid>
                </div>
                <style jsx>{`
                    article {
                        max-width: 13rem;
                    }
                    .parent {
                        grid-template-rows: 80% 20%;
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
