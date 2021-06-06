import { NextSeo } from 'next-seo';
import { useState } from 'react';

import Nav from '@/components/Nav';

export default function ConferenceRegister() {
    const [loading, setLoading] = useState(true);
    return (
        <>
            <NextSeo title='IBL Case Challenge Registration - StudentsxCEOs League' />
            <Nav />
            <div className='flex items-center justify-center min-h-screen bg-beige'>
                {loading ? (
                    <img src='/images/loader.svg' alt='Loading' />
                ) : null}
                <iframe
                    id='typeform-full'
                    title='Register Conference'
                    width='100%'
                    height='100%'
                    frameBorder='0'
                    allow='camera; microphone; autoplay; encrypted-media;'
                    src='https://form.typeform.com/to/Jmg7P1eV?typeform-medium=embed-snippet'
                    onLoad={() => setLoading(false)}
                ></iframe>

                <script
                    type='text/javascript'
                    src='https://embed.typeform.com/embed.js'
                ></script>

                <style jsx>{`
                    html {
                        margin: 0;
                        height: 100%;
                        overflow: hidden;
                    }
                    iframe {
                        position: absolute;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        top: 0;
                        border: 0;
                    }
                `}</style>
            </div>
        </>
    );
}
