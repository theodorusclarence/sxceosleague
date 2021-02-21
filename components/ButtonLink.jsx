import UnstyledLink from './UnstyledLink';

export default function ButtonLink(props) {
    const { children, className, ...other } = props;

    return (
        <UnstyledLink
            className={`${className} inline-block py-2 px-4 bg-gradient-to-r from-sorange-600 to-sorange-400 hover:from-sorange-400 text-gray-700 rounded-lg font-bold`}
            {...other}
        >
            {children}
        </UnstyledLink>
    );
}
