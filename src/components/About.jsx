
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'


export default function About() {
    const [ref, inView] = useInView({
        threshold: 0.5
    });
    return (
        <section className="section" id="about" ref={ref}>
            <div className="container mx-auto text-white text-center">
                <div className='mb-6 '>
                    <motion.div
                        variants={fadeIn('down', 0.5)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.7 }}
                    >
                        <h2 className='text-6xl mb-6 text-center font-bold text-secondary'>About me</h2>
                    </motion.div>
                    <div className='max-w-6xl mx-auto'>
                        <motion.h2
                            variants={fadeIn('down', 0.4)}
                            initial="hidden"
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.7 }}
                            className='text-2xl font-bold mb-3'
                        >
                            I'm Front-end Developer & UI/UX Designer with over 3 years of experience
                        </motion.h2>
                        <motion.h2
                            variants={fadeIn('down', 0.3)}
                            initial="hidden"
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.7 }}
                            className='text-center'
                        >
                            For over 2 years design has been a part of my world. On this fast and mind-blowing journey, I decided to become a full-time product designer.
                            With a constant goal of pushing design boundaries and maintaining high standards for usability & user experience, I consistently work with startups and clients to help them build amazing and impressive digital products.
                        </motion.h2>
                    </div>
                </div>
                <div className=' lg:flex gap-6 lg:gap-10 mb-12 mx-auto px-6 justify-center lg:text-left'>
                    <div className='bg-white/10  px-8 py-4 rounded-xl mb-3 lg:w-3/12'>
                        <div className='text-[40px] mb-2 text-secondary font-bold'>
                            {inView ? <CountUp start={0} end={13} duration={3} /> : 0}
                        </div>
                        <h3 className='text-sm font-bold'>
                            years of experience
                        </h3>
                    </div>
                    <div className='bg-white/10  px-8 py-4  rounded-xl mb-3 lg:w-3/12'>
                        <div className='text-[40px] mb-2 text-secondary font-bold'>
                            {inView ? <CountUp start={0} end={40} duration={3} /> : 0}
                            <span>+</span>
                        </div>
                        <h3 className='text-sm font-bold'>
                            Project Completed
                        </h3>
                    </div>
                    <div className='bg-white/10  px-8 py-4  rounded-xl mb-3 lg:w-3/12'>
                        <div className='text-[40px] mb-2 text-secondary font-bold'>
                            {inView ? <CountUp start={0} end={10} duration={3} /> : 0}
                            <span>+</span>
                        </div>
                        <h3 className='text-sm font-bold'>
                            satisfied clients
                        </h3>
                    </div>
                </div>
                <motion.div
                    variants={fadeIn('up', 0.2)}
                    initial="hidden"
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.7 }}
                    className='flex justify-center'
                >
                    <button className='btn-lg-primary'>See my portfolio</button>
                </motion.div>
            </div>
        </section>
    )
}