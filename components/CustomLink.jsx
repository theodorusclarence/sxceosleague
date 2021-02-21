import UnstyledLink from './UnstyledLink';

export default function CustomLink(props) {
    const { children, className, ...other } = props;

    return (
        <UnstyledLink
            className={`${className} inline-block py-2 px-4 bg-sgreen-500 text-gray-900 rounded-lg font-bold`}
            {...other}
        >
            {children}
        </UnstyledLink>
    );
}
