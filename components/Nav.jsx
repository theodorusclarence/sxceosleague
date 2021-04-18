import Image from 'next/image';
import UnstyledLink from './UnstyledLink';

export default function Nav() {
    return (
        <nav className='fixed top-0 z-50 w-full bg-white'>
            <div className='flex items-center justify-between h-16 py-2 text-black layout'>
                <UnstyledLink href='/'>
                    <figure className='w-28 md:w-40'>
                        <Image
                            src='/images/logo/nav-logo.png'
                            width={161}
                            height={51}
                            layout='responsive'
                        />
                    </figure>
                </UnstyledLink>
                <ul className='flex items-center justify-between space-x-4 md:space-x-8'>
                    <li>
                        <UnstyledLink
                            href='/'
                            className='text-sm font-bold tracking-wide transition font-primary hover:text-spurple-500 md:text-base'
                        >
                            Home
                        </UnstyledLink>
                    </li>
                    <li>
                        <UnstyledLink
                            className='inline-flex items-center justify-center px-6 py-2 text-sm font-bold tracking-wide text-white transition rounded-lg font-primary md:text-base bg-gradient-to-r from-spurple-500 to-spurple-600 hover:to-spurple-500 focus:outline-none'
                            href='https://tiny.cc/RegistrationTnD'
                        >
                            Register
                        </UnstyledLink>
                    </li>
                </ul>
            </div>
            <style jsx>{`
                nav {
                    box-shadow: 0px 4px 16px rgba(127, 47, 243, 0.15);
                }
            `}</style>
        </nav>
    );
}
