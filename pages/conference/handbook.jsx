import { NextSeo } from 'next-seo';
import ButtonLink from '@/components/ButtonLink';
import { useState } from 'react';
import Nav from '@/components/Nav';

const title = 'Conference Handbook - StudentsxCEOsLeague';
const description =
    'The biggest annual event held by StudentsxCEOs East Java, which is aimed to become a development platform for selected Indonesian students to gain insights and create innovative solutions through real problems identification, which will serve specific companies & NGOs.';
const url = 'https://sxceosleague.com/conference/handbook';

export default function HandBookPage() {
    const [loading, setLoading] = useState(true);
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
            <main className='bg-watusi'>
                <article className='min-h-screen mt-16 text-center py-14 text-spurple-500 layout'>
                    <h1>Conference Handbook</h1>

                    <figure className='relative flex items-center justify-center max-w-xs mx-auto mt-4 sm:max-w-md'>
                        {loading ? (
                            <img src='/images/loader.svg' alt='Loading' />
                        ) : null}
                        <iframe
                            className='absolute inset-0 w-full h-full'
                            src={`https://drive.google.com/file/d/1c7HNQ-7K4xtmKQJJMxbX-lQZqfWqe7UM/preview`}
                            onLoad={() => setLoading(false)}
                        />
                    </figure>

                    <div className='flex flex-col justify-center sm:flex-row'>
                        <ButtonLink
                            className='mt-4 !text-gray-700 sm:mr-4'
                            outline
                            href='https://drive.google.com/file/d/1c7HNQ-7K4xtmKQJJMxbX-lQZqfWqe7UM/view'
                        >
                            Download Handbook
                        </ButtonLink>
                        <ButtonLink className='mt-4' href='/r/conference'>
                            Register Now
                        </ButtonLink>
                    </div>

                    <style jsx>{`
                        figure {
                            height: 28rem;
                        }

                        @media (min-width: 640px) {
                            figure {
                                height: 39rem;
                            }
                        }
                    `}</style>
                </article>
            </main>
        </>
    );
}
