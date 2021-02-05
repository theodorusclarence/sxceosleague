import Nav from '@/components/Nav';
import { NextSeo } from 'next-seo';

export default function Home() {
    return (
        <>
            <NextSeo />
            <section className='bg-spurple'>
                <main className='flex flex-col items-center justify-center min-h-screen text-white layout'>
                    <h3>StudentsxCEOs League</h3>
                    <h1 className='text-8xl'>Coming Soon</h1>
                </main>
            </section>
        </>
    );
}
