import { useEffect, useState } from 'react';
import { NextSeo } from 'next-seo';
import Nav from '@/components/Nav';

export default function link() {
    const [links, setLinks] = useState([]);
    useEffect(() => {
        fetch('/api/links')
            .then((res) => res.json())
            .then((data) => setLinks(data));
    }, []);
    return (
        <>
            <NextSeo />
            <Nav />
            <main>
                {/* only styling for background color here */}
                <section className='bg-gradient-to-r from-spurple-500 to-spurple-600'>
                    {/* layouting here (flex, paddings, margins, etc) pt-16 to make gap for navbar */}
                    <article className='pt-16 layout'>
                        <pre>{JSON.stringify(links, null, 2)}</pre>
                    </article>
                </section>
            </main>
        </>
    );
}
