import { DefaultSeo } from 'next-seo';
import SEO from '@/next-seo.config';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '@/styles/globals.css';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <DefaultSeo {...SEO} />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
