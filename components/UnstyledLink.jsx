import Link from 'next/link';

export default function UnstyledLink(props) {
    const href = props.href;
    const isInternalLink =
        href && (href.startsWith('/') || href.startsWith('#'));

    console.log(
        '🚀 ~ file: UnstyledLink.jsx ~ line 12 ~ UnstyledLink ~ props?.className',
        props?.className
    );
    if (isInternalLink) {
        return (
            <Link href={href}>
                <a {...props} className={`${props?.className}`}>
                    {props.children}
                </a>
            </Link>
        );
    }

    return (
        <a
            className={`${props?.className}`}
            target='_blank'
            rel='noopener noreferrer'
            {...props}
        >
            {props.children}
        </a>
    );
}
