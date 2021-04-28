export default function PurpleLabel({ className, ...rest }) {
    return (
        <span
            className={`${className} text-xs md:text-sm font-bold text-white px-4 py-2 rounded-full bg-gradient-to-r from-spurple-500 to-sred-700`}
            {...rest}
        />
    );
}
