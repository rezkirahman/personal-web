import { React } from 'react'
import { Link } from 'react-scroll'
import { BiHomeAlt, BiUser } from 'react-icons/bi'
import { BsClipboardData, BsBriefcase, BsChatSquare } from 'react-icons/bs'

export default function Nav() {
    return (
        <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
            <div className='container mx-auto backdrop-blur-sm max-w-[460px] rounded-full'>
                <div className='w-full bg-white/60 h-[96px] rounded-full mx-auto flex justify-between text-2xl items-center px-5 mix-blend-multiply'>
                    <Link to='home' activeClass='active' spy={true} duration={500} className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center rounded-full text-slate-600 active:text-black'>
                        <BiHomeAlt />
                    </Link>
                    <Link to='about' activeClass='active' spy={true} duration={500} className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center rounded-full text-slate-600 active:text-black'>
                        <BiUser />
                    </Link>
                    <Link to='work' activeClass='active' spy={true} duration={500} className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center rounded-full text-slate-600 active:text-black'>
                        <BsBriefcase />
                    </Link>
                    <Link to='contact' activeClass='active' spy={true} duration={500} className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center rounded-full text-slate-600 active:text-black'>
                        <BsChatSquare />
                    </Link>
                </div>
            </div>
        </nav>
    )
}