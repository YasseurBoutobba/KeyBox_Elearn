import aboutUs from "../assets/aboutUs.png"
import randomShape from '../assets/randomShape.png'
const AboutUs = () => {
    return ( 
        <div id="about-us" className=' py-[60px] relative'>
            <h1 data-aos="fade-up" data-aos-once="true" className=' text-4xl text-center font-bold capitalize'>about us</h1>
            <div className='flex items-center justify-between py-14 gap-8'>
                <div data-aos="fade-right">
                    <h1 className=" text-3xl font-semibold mb-2">Who is KEYBOX ?</h1>
                    <p  className=' text-xl leading-8'>Established in 2021, KEYBOX emerged from a deep-rooted passion for technology and robotics. At our core, we are driven by a singular mission: to make the future accessible to all. We accomplish this by delivering cutting-edge soft-ware and hardware solutions, complemented by customized training programs suitable for individuals of all ages.</p>
                </div>
                <img data-aos="fade-left" className=" rounded-lg" src={aboutUs} alt="" />
            </div>
            <div data-aos="fade-right" className="  flex items-center justify-around text-center">
                <div className="relative">
                    <h1 className=" font-bold text-4xl">62</h1>
                    <p className=" font-semibold text-xl">Session</p>
                    <img className=" absolute w-[100%] top-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%]" src={randomShape} alt="" />

                </div>
                <div className="relative">
                    <h1 className=" font-bold text-4xl">460</h1>
                    <p className=" font-semibold text-xl">members</p>
                    <img className=" absolute w-[100%] top-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%]" src={randomShape} alt="" />
                </div>
                <div className="relative">
                    <h1 className=" font-bold text-4xl">25</h1>
                    <p className=" font-semibold text-xl">trainer</p>
                    <img className=" absolute w-[100%] top-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%]" src={randomShape} alt="" />
                </div>
                <div className="relative">
                    <h1 className=" font-bold text-4xl">100%</h1>
                    <p className=" font-semibold text-xl">satisfction</p>
                    <img className=" absolute w-[100%] top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%]" src={randomShape} alt="" />
                </div>
            </div>
        </div>
     );
}
 
export default AboutUs;