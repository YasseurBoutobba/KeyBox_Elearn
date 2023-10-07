import { useNavigate } from 'react-router-dom'
import ramzi from './assets/ramzi.png'
import {AiOutlineEdit} from 'react-icons/ai'
import { useEffect, useState } from 'react'
import axios from 'axios'
import {base_url} from '../../utils/base_url'

export const User = () => {

    const [opinions,setOpinions] = useState([])

    const navigate = useNavigate()

    const user = JSON.parse(localStorage.getItem('junctionData'))

    useEffect(()=>{

        const getOpinions = async () => {
            const response = await axios.get(`${base_url}/api/auth/get/${user.id}`);
            setOpinions(response.data.opinion)
        };
        getOpinions();

        const getUserFromLocalStorage = localStorage.getItem('junctionData')
        if (getUserFromLocalStorage === undefined || getUserFromLocalStorage === null  ) {
            navigate('/login')
        }
    },[])

  return (
    <div className="w-full  flex gap-12">
       <div className="bg-[#5CD2E6] flex  flex-col gap-5 rounded-[30px] py-16 items-center  min-w-[350px]">
            <div><img src={ramzi} className='w-20 h-20 rounded-[50%]'/></div>
            <div className='font-bold'>{user?.userName} </div>
            <div> {user?.role} </div>
            <div className='flex gap-4 items-center'>
                <div> {user?.email} </div>
                <AiOutlineEdit/>
            </div>
            <div className='flex gap-4 items-center'>
                <div> {user?.mobile} </div>
                <AiOutlineEdit/>
            </div>
            <div className='bg-white px-3 w-[260px] text-center text-black py-2 rounded-xl'>Advanced robotic student</div>
            <div className='bg-white px-3 w-[260px] text-center text-black py-2 rounded-xl'>Ai developer</div>
       </div>
       <div className="bg-white rounded-[30px] flex-grow py-10 px-8 min-w-[300px]" >
            <div className='font-bold'>Teachers opinion</div>
            {
                opinions && opinions.map((item,key)=>(
                    <div key={key} className='py-5'>
                        <div className='flex gap-3 items-center'>
                            <img src={`${item?.image}`} className='w-5 h-5 rounded-[40%]' />
                            <div className='font-bold text-[14px]'>{item?.writer?.userName}</div>
                        </div>
                        <div className='text-[12px] py-2 mx-4 w-[400px]'>
                            {item?.description}
                        </div>
                    </div>
                ))
            }

       </div>
    </div>
  )
}
