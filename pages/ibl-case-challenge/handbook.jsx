import { NextSeo } from 'next-seo';
import ButtonLink from '@/components/ButtonLink';
import { useState } from 'react';
import Nav from '@/components/Nav';

const title = 'IBL Case Challenge Handbook - StudentsxCEOsLeague';
const description =
    'Case based competition that will encourage each participant to see themself as a leader, who is responsible for solving a business problem of a company in a creative and innovative way with a high level of realization and practice.';
const url = 'https://sxceosleague.com/ibl-case-challenge/handbook';

export default function IBLHandBookPage() {
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
            <main style={{ background: 'rgba(238, 252, 242, 1)' }}>
                <article className='min-h-screen mt-16 text-center py-14 text-spurple-500 layout'>
                    <h1>IBL Case Challenge Handbook</h1>

                    <figure className='relative flex items-center justify-center max-w-xs mx-auto mt-4 sm:max-w-md'>
                        {loading ? (
                            <img src='/images/loader.svg' alt='Loading' />
                        ) : null}
                        <iframe
                            className='absolute inset-0 w-full h-full'
                            src={`https://drive.google.com/file/d/1Dl5HuJioKlMdoToCXMYdIyP2oSxe9wXo/preview`}
                            onLoad={() => setLoading(false)}
                        />
                    </figure>

                    <div className='flex flex-col justify-center sm:flex-row'>
                        <ButtonLink
                            className='mt-4 !text-gray-700 sm:mr-4'
                            outline
                            href='https://drive.google.com/file/d/1Dl5HuJioKlMdoToCXMYdIyP2oSxe9wXo/view'
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
