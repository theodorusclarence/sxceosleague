import UnstyledLink from './UnstyledLink';

export default function ButtonLink(props) {
    const { children, className, ...other } = props;

    return (
        <UnstyledLink
            className={`${className} text-sm md:text-lg inline-flex items-center justify-center py-3 px-6 ${
                props.outline
                    ? 'text-sorange-400 bg-transparent hover:bg-white border-2 hover:bg-opacity-10 border-sorange-400'
                    : 'text-gray-700 bg-gradient-to-r from-sorange-600 to-sorange-400 hover:from-sorange-400 '
            } rounded-lg font-bold focus:outline-none `}
            {...other}
        >
            {children}
        </UnstyledLink>
    );
}
