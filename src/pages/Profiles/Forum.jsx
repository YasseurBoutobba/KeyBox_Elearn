
import vector4 from "./assets/icons/vector4.png"

import vector1 from "./assets/icons/vector1.png"
import vector2 from "./assets/icons/vector2.png"
import arrowUpRight from './assets/icons/arrow-up-right.png'

import CommentCard from "./components/comment"
import FormucProfile from "./components/FormucProfile"

const Forum = () => {
    return (   
        <div className=" flex justify-between">
            <div className=" mainthing w-[70%] flex flex-col gap-10 overflow-x-hidden">
                <div className="filter-bar flex items-center justify-between ">
                    <div className=" flex items-center gap-4 ">
                        <div className=" flex gap-2 items-center py-2 px-3 text-sm bg-mainBlue text-gray-50 rounded-3xl" ><img src={vector1} alt="" />New</div>
                        <div className=" flex gap-2 items-center py-2 px-3 text-sm bg-gray-200 rounded-3xl"><img src={arrowUpRight} alt="" />top</div>
                        <div className=" flex gap-2 items-center py-2 px-3 text-sm bg-gray-200 rounded-3xl"><img src={vector2} alt="" />chikour</div>
                        <div className=" flex gap-2 items-center py-2 px-3 text-sm bg-gray-200 rounded-3xl"><img src={vector4} alt="" />closed</div>
                    </div>
                    <button className="py-4 px-5 rounded-2xl bg-mainBlue text-gray-100 font-semibold ">
                        <img src="" alt="" />
                        <span>Ask a question</span>
                    </button>
                    
                </div>
                <div className=" flex flex-col gap-4">
                    <CommentCard />
                    <CommentCard />
                    <CommentCard />
                </div>
            </div>
            <div className=" w-[25%] ">
                <FormucProfile />
            </div>
        </div>
      );
}
 
export default Forum; 
