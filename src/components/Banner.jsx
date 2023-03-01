import { FaGithub, FaDribbble, FaBehance } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { fadeIn } from '../variants'
import photo from '../assets/profile.png'

export default function Banner() {
    return (
        <section className="section" id={'home'}>
            <div className="container mx-auto">
                <div className='lg:flex lg:justify-between items-center'>
                    <div className='text-white text-center lg:text-left'>
                        <motion.h1
                            variants={fadeIn('up', 0.3)}
                            initial="hidden"
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.7 }}
                            className='font-bold text-[55px] xl:text-[80px] leading'>
                            REZKI <span>RAHMAN</span>
                        </motion.h1>
                        <motion.div
                            variants={fadeIn('up', 0.4)}
                            initial="hidden"
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.7 }}
                            className='font-semibold text-[36px] xl:text-[60px] uppercase leading-[1] mb-6'>
                            <span className='mr-5'>I am a</span>
                            <TypeAnimation
                                sequence={[
                                    'Developer', 2000,
                                    'Designer', 2000,
                                ]}
                                speed={50}
                                className="text-primary100"
                                repeat={Infinity}
                                wrapper='span'
                            />
                        </motion.div>
                        <motion.p
                            variants={fadeIn('up', 0.5)}
                            initial="hidden"
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.6 }}
                            className='mb-8 max-w-2xl mx-auto lg:mx-0'>
                            Currently enjoying coffee in Jakarta, Indonesia
                        </motion.p>
                        <motion.div
                            variants={fadeIn('up', 0.7)}
                            initial="hidden"
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.7 }}
                            className='flex-1 lg:flex lg:items-center gap-8'
                        >
                            <button href="#" className='btn-lg-primary bg-secondary text-white hover:text-black mb-6 lg:mb-0'>Contact me</button>
                            <div className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
                                <span onClick={() => { window.location.replace('http://github.com/rezkirahman') }} className='cursor-pointer'><FaGithub /></span>
                                <FaDribbble />
                                <FaBehance />
                            </div>
                        </motion.div>
                    </div>
                    <motion.div
                        variants={fadeIn('down', 0.5)}
                        initial="hidden"
                        whileInView={'show'}
                    >
                        <img src={photo} alt="" className='w-[400px] mx-auto xl:w-[500px] mb-32 lg:mb-0' />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}