
import vector3 from "../assets/icons/vector3.png"

import eye from '../assets/icons/eye.png'
import arrowUp from "../assets/icons/arrow-up.png"
import ava from '../assets/Ava.png'
const CommentCard = () => {
    return ( 
        <div className="flex flex-col gap-2 bg-gray-100 py-4 px-6 rounded-2xl shadow-md">
                        <div className=" flex items-center gap-2">
                            <img src={ava} alt="" />
                            <div>
                                <p className="text-base font-semibold">Tameur Merad</p>
                                <span className=" text-sm text-gray-600">5 min ago</span>
                            </div>
                        </div>
                        <div>
                            <h1 className=" text-lg font-semibold">How to patch KDE on FreeBSD ?</h1>
                            <p className=" text-gray-700">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div className=" flex justify-between items-center">
                            <div className=" flex gap-3">
                                <span className=" text-sm bg-gray-300 text-gray-50 px-3 py-1 rounded-xl">golang </span>
                                <span className=" text-sm bg-gray-300 text-gray-50 px-3 py-1 rounded-xl">linux</span>
                                <span className=" text-sm bg-gray-300 text-gray-50 px-3 py-1 rounded-xl">overflow</span>
                            </div>
                            <div className=" flex items-center gap-4">
                                <div className=" flex items-center gap-2 text-gray-500">
                                    <img src={eye} alt="" /> 125
                                </div>
                                <div className=" flex items-center gap-2 text-gray-500">
                                    <img src={vector3} alt="" /> 15
                                </div>
                                <div className=" flex items-center gap-2 text-gray-500">
                                    <img src={arrowUp} alt="" /> 155
                                </div>
                            </div>
                            
                        </div>
                    </div>
     );
}
 
export default CommentCard;