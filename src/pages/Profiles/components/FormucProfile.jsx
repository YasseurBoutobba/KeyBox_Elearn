import ava from '../assets/Ava.png'
import facebook from "../assets/icons/facebook.png"
import instagram from '../assets/icons/instagram.png'
import github from '../assets/icons/github.png'
import award from '../assets/award.png'
const FormucProfile = () => {
    return ( 
        <div className=' fixed flex flex-col items-center gap-2 bg-gray-50 py-4 px-10 rounded-xl shadow-md'>
            <img className='w-[100px]' src={ava} alt="" />
            <h1 className=' font-bold text-lg mb-4'>@Tameur_Merad</h1>
            <div className=' flex gap-2 py-4 text-2xl font-semibold text-mainBlue items-center border-t-[1px] border-gray-400 border-b-[1px]'>
                <img src={award} alt="" />
                125 [ 8 ]
            </div>
            <div className=' flex items-center justify-center gap-6 w-full py-4'>   
                <img className=' w-[20px]' src={github} alt="" />              
                <img className=' w-[20px]' src={instagram} alt="" />
                <img className=' w-[20px]' src={facebook} alt="" />
            </div>
        </div>
     );
}
 
export default FormucProfile;
