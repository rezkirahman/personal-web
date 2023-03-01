import Logo from '../assets/logo.svg'

export default function Header() {
    return (
        <header className='py-8'>
            <div className="container mx-auto">
                <div className='flex justify-between'>
                    <img src={Logo} alt="logo" className='w-40'/>
                    <a href="#" className='btn-sm-primary lg:btn-lg-primary'>Work with me</a>
                </div>
            </div>
        </header>
    )
}