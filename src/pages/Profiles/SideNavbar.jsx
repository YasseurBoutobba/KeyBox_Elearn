import {  NavLink, useLocation } from "react-router-dom";
import { BsPerson, BsBarChart, BsFolder2Open,  } from "react-icons/bs"
import pacmen from './assets/icons/pacmenicon.png'
import logout from './assets/icons/logouticon.png'
import logo from './assets/Logo.png'
import {BiMessageDetail} from 'react-icons/bi'
const SideNavBar = () => {
    const location = useLocation();
    let isActive = (path) => {
        return location.pathname === path;
    };
    return ( 
        <div className="  bg-darkBlue fixed px-8 py-6 h-[100dvh] flex flex-col justify-between text-gray-100 "> 
            <img className=" w-[80px]" src={logo} alt="" />
            <ul className=" w-full flex flex-col justify-between gap-8 text-xl font-meduim">
                <li>
                    < NavLink to={'/main/'} className={` flex items-center gap-4 ${isActive('/main/') ? 'text-[#00C8FF]' : ''}`}>
                        <BsPerson />
                        <snap>User</snap>
                    </ NavLink>
                </li>
                <li>
                    < NavLink to={'/main/leader-bord'}  className={`flex items-center gap-4 ${isActive('/main/leader-bord') ? 'text-[#00C8FF]' : ''}`} >
                        <BsBarChart />
                        <snap>Leader Board</snap>
                    </ NavLink>
                </li>
                <li>
                    < NavLink  path={'/main/courses'} className={`flex items-center gap-4  ${isActive('/main/courses') ? 'text-[#00C8FF]' : ''}`} >
                        <BsFolder2Open />
                        <snap>Courses</snap>
                    </ NavLink>
                </li>
                <li>
                    < NavLink path={'/main/challenges'} className={`flex items-center gap-4  ${isActive('/main/challenges') ? 'text-[#00C8FF]' : ''}`}>
                        <img src={pacmen} alt="" />
                        <snap>Challenges</snap>
                    </ NavLink>
                </li>
                <li>
                    < NavLink path={'/main/forum'}  className={`flex items-center gap-4  ${isActive('/main/forum') ? 'text-[#00C8FF]' : ''}`}>
                        <BiMessageDetail/>
                        <snap>Forum</snap>
                    </ NavLink>
                </li>
            </ul>
            <div >
                < NavLink to="/" className=" flex items-center justify-between" >
                    <span>Log out</span>
                    <img src={logout} alt="" />
                </ NavLink>
            </div>
            
        </div>
     );
}
 
export default SideNavBar;