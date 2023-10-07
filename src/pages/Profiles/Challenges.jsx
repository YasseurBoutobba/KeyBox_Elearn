import { useState } from "react";
const Challenge = () =>{
    return(
        <div className=" flex flex-col gap-4 items-center w-[250px] p-6 rounded-lg bg-gray-50 shadow-lg ">
            <div className=" flex justify-between w-full ">
                <h1 className=" font-semibold">Challenge 1</h1>
                <span className=" font-semibold">10 pts</span>
            </div>
            <p className=" text-sm text-gray-500 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet temporibus molestiae porro eos commodi minus molestias, voluptatem similique nostrum quae?</p>
            <button className=" p-2 bg-darkBlue w-full rounded-xl text-gray-100 font-bold text-lg">Solve</button>
        </div>
        
    );
}

const ChallengePopUp = ({ onClickOutSide, children }) =>{
    return (
        <div onClick={onClickOutSide} className=" bg-gray-700/40 w-screen h-screen fixed top-0 left-0 z-40 flex justify-center items-center">
            <div className=" flex flex-col gap-4 items-center w-[60%] p-6 rounded-lg bg-gray-50 shadow-lg ">
            <div className=" flex justify-between w-full ">
                <h1 className=" text-xl font-semibold">Challenge 1</h1>
                <span className=" font-semibold">10 pts</span>
            </div>
            <p className=" text-gray-500 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet temporibus molestiae porro eos commodi minus molestias, voluptatem similique nostrum quae?</p>
            <ul className="flex flex-col gap-4 w-full">
                <li className=" p-2 rounded-lg border-[1px] border-gray-400 w-full">
                    choise number one
                </li>
                <li className=" p-2 rounded-lg border-[1px] border-gray-400 w-full">
                    choise number one
                </li>
                <li className=" p-2 rounded-lg border-[1px] border-gray-400 w-full">
                    choise number one
                </li>
            </ul>
            <button className=" p-2 bg-darkBlue w-full rounded-xl text-gray-100 font-bold text-lg" onClick={onClickOutSide}>Submit</button>
        </div>
        </div>
        
    )
}

const Challenges = () => {
    const [isPopupVisible, setPopupVisible] = useState(false);

  const handleOpenPopup = () => {
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };
    return ( 
        <div className="py-6" >
            <h1 className=" text-3xl mb-6 font-bold">Challenges : </h1>
            <div onClick={handleOpenPopup} className=" cursor-pointer">
            <Challenge />

            </div>
            <br />
            {isPopupVisible && <ChallengePopUp isVisible={isPopupVisible} onClickOutSide={() => setPopupVisible(false)} />}
        </div>
     );
}
 
export default Challenges;