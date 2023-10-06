import { Link } from 'react-router-dom';
import logo from '../assets/Logo.png'
const Navbar = () => {
    return ( 
        <nav className=' flex py-6 justify-between items-center '>
            <a href="/">
            <img src={ logo} alt="logo" />
            </a>
            <ul className=' flex justify-between gap-8 font-bold text-lg'>
                <li className=' relative before:content-[""] before:absolute before:bottom-0 before:left-0 before:bg-mainBlue before:h-1 hover:text-mainBlue hover:before:w-[100%] transition '><a href="/">Home</a></li>
                <li className=' relative before:content-[""] before:absolute before:bottom-0 before:left-0 before:bg-mainBlue before:h-1 hover:text-mainBlue hover:before:w-[100%] transition'><a href="#courses">Courses</a></li>
                <li className=' relative before:content-[""] before:absolute before:bottom-0 before:left-0 before:bg-mainBlue before:h-1 hover:text-mainBlue hover:before:w-[100%] transition'><a href="#partners">Partners</a></li>
                <li className=' relative before:content-[""] before:absolute before:bottom-0 before:left-0 before:bg-mainBlue before:h-1 hover:text-mainBlue hover:before:w-[100%] transition'><a href="#about-us">About Us</a></li>
            </ul>
            <div className=' flex gap-6 items-center '>
                <Link to="/login" >
                    <button className=' capitalize text-gray-500'>log in</button>
                </Link>
                <Link to="/signup">
                    <button className=' bg-mainBlue px-6 text-lg capitalize rounded-xl py-2 font-medium text-gray-100'>sign up</button>
                </Link>
            </div>
        </nav>
     );
}
 
export default Navbar;