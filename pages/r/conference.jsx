import { NextSeo } from 'next-seo';
import { useState } from 'react';

import Nav from '@/components/Nav';
import ClosedPage from '@/components/ClosedPage';

export default function ConferenceRegister() {
    const [loading, setLoading] = useState(true);
    return (
        <>
            <NextSeo title='Conference Registration - StudentsxCEOs League' />
            <ClosedPage title='Conference Registration is Officially Closed' />
        </>
    );
}
