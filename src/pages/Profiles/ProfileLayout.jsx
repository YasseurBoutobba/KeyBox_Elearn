import { Outlet, useNavigate } from "react-router-dom";
import SideNavBar from "./SideNavbar";
import TopNavBar from "./TopNavbar";
import { useEffect } from "react";

const Profile = () => {
    const navigate = useNavigate()

    useEffect(()=>{
        const getUserFromLocalStorage = localStorage.getItem('junctionData')
        if (getUserFromLocalStorage === undefined || getUserFromLocalStorage === null  ) {
            navigate('/login')
        }
    },[])

    const userData = JSON.parse( localStorage.getItem('junctionData') )
    console.log(userData);

    return ( 
        <div className="w-screen min-h-screen relative flex bg-[#EAEEF7]">
            <div>
                <SideNavBar />
            </div>
            <div>
                <TopNavBar />
            </div>
            <div className="pl-[280px] w-full pr-[40px] pt-[100px] ">
                <Outlet/>
            </div>
            
        </div>
     );
}
 
export default Profile;