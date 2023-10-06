import insta from "../assets/insta.png"
import facebook from "../assets/facebook.png"
import call from '../assets/call.png'
import location from '../assets/location.png'
import messege from "../assets/messege.png"
import logo from "../assets/Logo.png"
const Footer = () => {
    return ( 
        <footer data-aos="fade-up" className=" container mx-auto md:container sm:container lg:container pt-14 pb-4 relative text-gray-100">
            <div className="flex items-center justify-between ">
                <div className=" absolute px-10 py-2 rounded-full bg-gray-50 top-[-40px] right-[50%] translate-x-[50%]">
                <img className="w-[80px]" src={logo} alt="" />
                </div>
            <div className=" w-[50%] mb-6">
                <p>Fondée en 2021, KEYBOX est née de la passion pour la technologie et la robotique. Notre mission est d'amener le futur à portée de main en proposant des solutions logicielles et matérielles de pointe ainsi que des programmes de formation adaptés à tous les âges.</p>
                <div className=" flex gap-4 items-center mt-6">
                    <img src={insta}alt="" />
                    <img src={facebook} alt="" />
                </div>
            </div>
            <div>
                <h1 className=" text-xl font-semibold mb-4">Address</h1>
                <ul className="flex flex-col gap-2">
                    <li className=" flex items-center gap-4">
                        <img src={location} alt="" />
                        <p className=" underline">       Cité 20 Aout Oued Rommane, Alachour ALGER</p>
                    </li>
                    <li className=" flex items-center gap-4">
                        <img src={call} alt="" />
                        <p className=" underline">       +213-541464290</p>
                    </li>
                    <li className=" flex items-center gap-4">
                        <img src={messege} alt="" />
                        <p className=" underline">       contact@keybox.dz</p>
                    </li>
                </ul>
            </div>
            </div>
            <p>2023 KEYBOX</p>
            
        </footer>
     );
}
 
export default Footer;