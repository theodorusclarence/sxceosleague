const title = 'StudentsxCEOs League';
const description = 'StudentsxCEOs League Coming Real Soon.';

const SEO = {
    title,
    description,
    canonical: 'https://sxceosleague.com',
    openGraph: {
        type: 'website',
        locale: 'en_IE',
        url: 'https://sxceosleague.com',
        title,
        description,
        images: [
            {
                url: 'https://sxceosleague.com/favicon/large-og.jpg',
                alt: title,
                width: 1200,
                height: 1200,
            },
        ],
    },
};

export default SEO;

// EXAMPLES
{
    /* 
    const title = 'Next.js Tailwind Starter';
    const description = 'your description';
    const url = 'https://theodorusclarence.com';

    <NextSeo
    title={title}
    description={description}
    canonical={url}
    openGraph={{
        url,
        title,
        description,
    }}
/>;  */
}
