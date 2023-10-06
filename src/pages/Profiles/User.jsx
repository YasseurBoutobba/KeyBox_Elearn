import ramzi from './assets/ramzi.png'
import {AiOutlineEdit} from 'react-icons/ai'


export const User = () => {
  return (
    <div className="w-full flex-grow flex gap-20">
       <div className="bg-[#5CD2E6] flex flex-col gap-3 rounded-[30px] py-16 items-center  min-w-[300px]">
            <div><img src={ramzi} className='w-20 h-20 rounded-[50%]'/></div>
            <div>Ramzi Gamech </div>
            <div>Student </div>
            <div className='flex gap-10 items-center'>
                <div>Email </div>
                <AiOutlineEdit/>
            </div>
       </div>
       <div className="" ></div>
    </div>
  )
}
