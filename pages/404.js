import { NextSeo } from 'next-seo';

import ClosedPage from '@/components/ClosedPage';
import Nav from '@/components/Nav';

export default function NotFoundPage() {
    return (
        <>
            <NextSeo title='Page Not Found - StudentsxCEOs League' />
            <Nav />
            <ClosedPage title='Page Not Found' />
        </>
    );
}
