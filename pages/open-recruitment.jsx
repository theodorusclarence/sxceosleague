import { NextSeo } from 'next-seo';
import ButtonLink from '@/components/ButtonLink';

const title = 'Open Recruitment StudentsxCEOsLeague';
const description = 'Join us on StudentsXCEOsLeague Volunteers';
const url = 'https://sxceosleague.com/open-recruitment';

export default function OpenRecruitmentPage() {
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

                    <figure className='relative max-w-xs mx-auto mt-4 sm:max-w-md'>
                        <iframe
                            className='absolute inset-0 w-full h-full'
                            src={`https://drive.google.com/file/d/1IExrmqtgE3EdxO_WGVySk7LWNE5s3KED/preview`}
                        />
                    </figure>

                    <div className='flex justify-center'>
                        <ButtonLink
                            className='mt-4 mr-4'
                            outline
                            href='https://drive.google.com/file/d/1IExrmqtgE3EdxO_WGVySk7LWNE5s3KED/view'
                        >
                            Download Guidebook
                        </ButtonLink>
                        <ButtonLink
                            className='mt-4'
                            href='https://bit.ly/SxCStaff'
                        >
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
