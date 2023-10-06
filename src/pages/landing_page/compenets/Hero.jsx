import heroImg from '../assets/heroImg.png'
import partner1 from '../assets/partner1.png'
import partner2 from '../assets/partner2.png'
import partner3 from '../assets/partner3.png'
import usthb from '../assets/usthb.png'
import stilioo from '../assets/stilioo.png'
import circle from '../assets/circle.png'
import abischool from '../assets/abischool.png'
const Hero = () => {
    return ( 
    <div className=' relative'>

       <div className=' flex justify-between items-center h-[80dvh]'>
        <div className='  flex flex-col justify-center items-start gap-6 w-[50%] ' data-aos="fade-right" data-aos-once="true">
            <h1 className=' text-4xl font-bold '>Make your key to the future !​</h1>
            <p className=' leading-6'>KEYBOX est un centre d’apprentissage technologique spécialisé en robotique. Pour but de la vulgarisation du domaine de la robotique et le rendre plus accessible pour tt les amateurs et les amoureux de la création et d’invention</p>
            <button className=' px-4 py-2 bg-mainBlue text-gray-100 rounded-lg text-xl hover:scale-[1.08] transition'>Get started</button>
            <div>
                <p className=' capitalize mb-6'>trusted by : </p>
                <div className=' flex items-center gap-4'>
                    <img className=' w-[40px]' src={abischool} alt="" />
                    <img className=' w-[40px]' src={stilioo} alt="" />
                    <img className=' w-[40px]' src={usthb} alt="" />
                    <img className=' w-[40px]' src={partner1} alt="" />
                    <img className=' w-[40px]' src={partner2} alt="" />
                    <img className=' w-[40px]' src={partner3} alt="" />
                </div>
            </div>
        </div>
        <div data-aos="fade-left" data-aos-once="true">
            <img src={heroImg} alt="" />
        </div>
        <img className=' absolute z-[-1] top-3 left-[-10%] w-[60px]' src={circle} alt="" />
        <img className=' absolute z-[-1] top-0 left-[40%] w-[60px]' src={circle} alt="" />
        <img className=' absolute z-[-1] top-1 left-[10%] w-[60px]' src={circle} alt="" />
        <img className=' absolute z-[-1] bottom-3 left-[40%] w-[60px]' src={circle} alt="" />
        <img className=' absolute z-[-1] bottom-3 right-1 w-[60px]' src={circle} alt="" />

       </div>
    </div>

     );
}
 
export default Hero;