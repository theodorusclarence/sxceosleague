import UnstyledLink from './UnstyledLink';
import { IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io5';
import { HiOutlineMail } from 'react-icons/hi';

export default function Footer() {
    return (
        <footer className='flex flex-col items-center justify-center pt-4'>
            <div
                style={{
                    boxShadow:
                        '13.8028px 20.2982px 77.133px rgba(85, 56, 143, 0.35)',
                }}
                className='flex items-center px-8 py-2 space-x-4 text-2xl text-white rounded-full bg-spurple-400'
            >
                <UnstyledLink href='#'>
                    <IoLogoInstagram />
                </UnstyledLink>
                <UnstyledLink href='#'>
                    <IoLogoLinkedin />
                </UnstyledLink>
                <UnstyledLink href='#'>
                    <HiOutlineMail className='text-3xl' />
                </UnstyledLink>
            </div>
            <p className='mt-4 mb-1 text-xs md:text-sm text-spurple-400'>
                © Web Interface StudentsxCEOs League
            </p>
        </footer>
    );
}
