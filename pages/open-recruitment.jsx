import { NextSeo } from 'next-seo';
import CloudPdfViewer from '@openbook/cloudpdf-viewer';
import { useEffect, useRef } from 'react';
import CustomLink from '@/components/CustomLink';

const title = 'Open Recruitment StudentsxCEOsLeague';
const description = 'Join us on StudentsXCEOsLeague Volunteers';
const url = 'https://sxceosleague.com/open-recruitment';

export default function OpenRecruitmentPage() {
    const viewer = useRef(null);

    useEffect(() => {
        CloudPdfViewer(
            {
                documentId: '270b2c72-7242-4b5b-a076-70abee83a21e',
                darkMode: true,
            },
            viewer.current
        ).then((instance) => {});
    }, []);

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
            <main className='min-h-screen bg-spurple-500'>
                <article className='text-center text-white layout py-14'>
                    <h1>Open Recruitment Volunteer</h1>
                    <CustomLink
                        className='mt-4'
                        href='https://theodorusclarence.com'
                    >
                        Register Now
                    </CustomLink>

                    <figure
                        className='relative max-w-xl mx-auto mt-4'
                        style={{ paddingTop: '70.72%' }}
                    >
                        {/* <div className='absolute inset-0' ref={viewer}></div> */}
                        <iframe
                            className='absolute inset-0 w-full h-full'
                            src={`https://drive.google.com/file/d/1LeSTXi-QD3nlBLOkAHCbZdAWLQ7c161d/preview`}
                        ></iframe>
                    </figure>
                </article>
            </main>
        </>
    );
}
