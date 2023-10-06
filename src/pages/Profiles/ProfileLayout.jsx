import { Outlet } from "react-router-dom";
import SideNavBar from "./SideNavbar";
import TopNavBar from "./TopNavbar";

const Profile = () => {
    return ( 
        <div className="w-screen h-screen relative flex">
            <div>
                <SideNavBar />
            </div>
            <div>
                <TopNavBar />
            </div>
            <div className="pl-[280px] w-full pr-[40px] pt-[100px] background">
                <Outlet/>
            </div>
            
        </div>
     );
}
 
export default Profile;