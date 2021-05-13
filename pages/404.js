import { NextSeo } from 'next-seo';

import ClosedPage from '@/components/ClosedPage';

export default function NotFoundPage() {
    return (
        <>
            <NextSeo title='Page Not Found - StudentsxCEOs League' />
            <ClosedPage title='Page Not Found' />
        </>
    );
}
