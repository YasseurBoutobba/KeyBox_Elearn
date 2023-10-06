import { Link } from "react-router-dom";
import { BsPerson, BsBarChart, BsFolder2Open,  } from "react-icons/bs"
import pacmen from './assets/icons/pacmenicon.png'
import logout from './assets/icons/logouticon.png'
import logo from './assets/Logo.png'
import {BiMessageDetail} from 'react-icons/bi'
const SideNavBar = () => {
    return ( 
        <div className=" bg-darkBlue fixed px-8 py-6 h-[100dvh] flex flex-col justify-between text-gray-100 "> 
            <img className=" w-[80px]" src={logo} alt="" />
            <ul className=" w-full flex flex-col justify-between gap-8 text-xl font-meduim">
                <li>
                    <Link to={'/main/'} className=" flex items-center gap-4 ">
                        <BsPerson />
                        <snap>User</snap>
                    </Link>
                </li>
                <li>
                    <Link to={'/main/leader-bord'} className=" flex items-center gap-4 ">
                        <BsBarChart />
                        <snap>Leader Board</snap>
                    </Link>
                </li>
                <li>
                    <Link className=" flex items-center gap-4 ">
                        <BsFolder2Open />
                        <snap>Courses</snap>
                    </Link>
                </li>
                <li>
                    <Link className=" flex items-center gap-4 ">
                        <img src={pacmen} alt="" />
                        <snap>Challenges</snap>
                    </Link>
                </li>
                <li>
                    <Link to={'/main/formuc'} className=" flex items-center gap-4 ">
                        <BiMessageDetail/>
                        <snap>Forum</snap>
                    </Link>
                </li>
            </ul>
            <div >
                <Link to="/" className=" flex items-center justify-between">
                    <span>Log out</span>
                    <img src={logout} alt="" />
                </Link>
            </div>
            
        </div>
     );
}
 
export default SideNavBar;