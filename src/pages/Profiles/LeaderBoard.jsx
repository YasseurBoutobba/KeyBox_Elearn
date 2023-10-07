import { useEffect, useState } from 'react'
import man1 from './assets/man1.png'
import man2 from './assets/man2.png'
import man3 from './assets/man3.png'
import {useNavigate } from "react-router-dom";
import axios from 'axios'
import { base_url } from '../../utils/base_url';
export const LeaderBoard = () => {

    const [users, setUsers] = useState([]);

    const navigate = useNavigate()
    let i = 0;

    useEffect(()=>{
        const getUsers = async () => {
            const response = await axios.get(`${base_url}/api/auth/users-rank`);
            setUsers(response.data);
        };
        getUsers();
        const getUserFromLocalStorage = localStorage.getItem('junctionData')
        if (getUserFromLocalStorage === undefined || getUserFromLocalStorage === null ) {
            navigate('/login')
        }
    },[])

  return (
    <>
    <div className="bg-white w-full p-6 m-4 rounded-xl">
        <div>
            <div className="flex flex-col items-center">
                <img src={man2}  className='w-13 h-13 rounded-[50%]'/>
                <div className='font-bold'>First</div>
            </div>
            <div className='flex justify-center gap-16 -mt-8'>
                <div className="flex flex-col items-center">
                    <img src={man3}  className='w-13 h-13 rounded-[50%]'/>
                    <div className='font-bold'>Second</div>
                </div>
                <div className="flex flex-col items-center">
                    <img src={man1}  className='w-13 h-13 rounded-[50%]'/>
                    <div className='font-bold'>Third</div>
                </div>
            </div>
        </div>
        <div className='flex flex-col gap-4 py-10'>
            {
                users?.map((user,key)=>{
                    i++
                    return(
                        <div key={key} className={`flex justify-around ${i!==1 ? 'bg-[#9FACDA]' : " bg-leader"}  py-2 rounded-[20px]`}>
                            <div className='font-bold text-[20px]'>{i}</div>
                            <div className='font-bold'>{user?.userName}</div>
                            <div className='font-bold'>{user?.point} point</div>
                        </div>
                    )
                    
                })
                
            }
            
        </div>
    </div>
    
    </>
  )
}