import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head>
                    <link
                        rel='apple-touch-icon'
                        sizes='57x57'
                        href='/favicon/apple-icon-57x57.png'
                    />
                    <link
                        rel='apple-touch-icon'
                        sizes='60x60'
                        href='/favicon/apple-icon-60x60.png'
                    />
                    <link
                        rel='apple-touch-icon'
                        sizes='72x72'
                        href='/favicon/apple-icon-72x72.png'
                    />
                    <link
                        rel='apple-touch-icon'
                        sizes='76x76'
                        href='/favicon/apple-icon-76x76.png'
                    />
                    <link
                        rel='apple-touch-icon'
                        sizes='114x114'
                        href='/favicon/apple-icon-114x114.png'
                    />
                    <link
                        rel='apple-touch-icon'
                        sizes='120x120'
                        href='/favicon/apple-icon-120x120.png'
                    />
                    <link
                        rel='apple-touch-icon'
                        sizes='144x144'
                        href='/favicon/apple-icon-144x144.png'
                    />
                    <link
                        rel='apple-touch-icon'
                        sizes='152x152'
                        href='/favicon/apple-icon-152x152.png'
                    />
                    <link
                        rel='apple-touch-icon'
                        sizes='180x180'
                        href='/favicon/apple-icon-180x180.png'
                    />
                    <link
                        rel='icon'
                        type='image/png'
                        sizes='192x192'
                        href='/favicon/android-icon-192x192.png'
                    />
                    <link
                        rel='icon'
                        type='image/png'
                        sizes='32x32'
                        href='/favicon/favicon-32x32.png'
                    />
                    <link
                        rel='icon'
                        type='image/png'
                        sizes='96x96'
                        href='/favicon/favicon-96x96.png'
                    />
                    <link
                        rel='icon'
                        type='image/png'
                        sizes='16x16'
                        href='/favicon/favicon-16x16.png'
                    />
                    <link rel='manifest' href='/favicon/manifest.json' />
                    <meta name='msapplication-TileColor' content='#ffffff' />
                    <meta
                        name='msapplication-TileImage'
                        content='/favicon/ms-icon-144x144.png'
                    />
                    <meta name='theme-color' content='#ffffff' />
                    <link
                        rel='icon'
                        href='/favicon/favicon.ico'
                        type='image/x-icon'
                    ></link>

                    {/* GOOGLE ANALYTICS */}
                    <script
                        async
                        src='https://www.googletagmanager.com/gtag/js?id=G-31S3V71Y64'
                    />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `window.dataLayer = window.dataLayer || [];
                                    function gtag(){dataLayer.push(arguments);}
                                    gtag('js', new Date());

                                    gtag('config', 'G-31S3V71Y64');
                                    `,
                        }}
                    />

                    {/* Splitbee Analytics */}
                    <script async src='https://cdn.splitbee.io/sb.js'></script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
