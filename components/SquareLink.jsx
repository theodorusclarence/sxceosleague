import UnstyledLink from './UnstyledLink';

export default function SquareLink(props) {
    const { className, ...other } = props;

    return (
        <UnstyledLink
            className={`${className} block p-4 text-base font-bold text-center transition bg-black border border-white w-72 bg-opacity-20 hover:bg-spurple-400 hover:bg-opacity-100`}
            {...other}
        />
    );
}
