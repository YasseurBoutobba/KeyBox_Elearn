import notificationIcon from './assets/icons/notification.png'
import coinIcon from './assets/twemoji_coin.png'
const TopNavBar = () => {
    return ( 
        <div className=" fixed flex justify-around w-[80%] h-[10vh] top-4 left-[20%]" >
            <div>
                <h1 className=' font-semibold'>Welcome, Ramzi</h1>
                <p>Have a good day !</p>
            </div>
            <div >
                <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="search" id="default-search" className=" outline-none block w-[500px] p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." required />
                </div>
            </div>    
            <div className=' flex items-center gap-10'>
                <img src={notificationIcon} alt="" />
                <div className=' flex items-center gap-2'>
                    <h1>100</h1>
                    <img src={coinIcon} alt="" />
                </div>
            </div>     
    


        </div>
     );
}
 
export default TopNavBar;