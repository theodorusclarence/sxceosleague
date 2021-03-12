import { NextSeo } from 'next-seo';
import ButtonLink from '@/components/ButtonLink';
import { useState } from 'react';

const title = 'Staff Enrollment StudentsxCEOsLeague';
const description = 'Join us on StudentsXCEOsLeague';
const url = 'https://sxceosleague.com/open-recruitment';

export default function StaffEnrollmentPage() {
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
            <main className='bg-spurple-500'>
                <article className='min-h-screen text-center text-white py-14 sm:py-2 layout'>
                    <h1>Staff Enrollment</h1>

                    <figure className='relative flex items-center justify-center max-w-xs mx-auto mt-4 sm:max-w-md'>
                        {loading ? (
                            <img src='/images/loader.svg' alt='Loading' />
                        ) : null}
                        <iframe
                            className='absolute inset-0 w-full h-full'
                            src={`https://drive.google.com/file/d/1IExrmqtgE3EdxO_WGVySk7LWNE5s3KED/preview`}
                            onLoad={() => setLoading(false)}
                        />
                    </figure>

                    <div className='flex flex-col justify-center sm:flex-row'>
                        <ButtonLink
                            className='mt-4 sm:mr-4'
                            outline
                            href='https://drive.google.com/file/d/1IExrmqtgE3EdxO_WGVySk7LWNE5s3KED/view'
                        >
                            Download Guidebook
                        </ButtonLink>
                        <ButtonLink
                            className='mt-4'
                            href='https://bit.ly/SxCStaff'
                        >
                            Enroll Now
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
