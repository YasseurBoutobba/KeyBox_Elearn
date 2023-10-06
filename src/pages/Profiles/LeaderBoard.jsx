import man1 from './assets/man1.png'
import man2 from './assets/man2.png'
import man3 from './assets/man3.png'


export const LeaderBoard = () => {
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
        <div className='flex flex-col gap-8 py-10'>
            <div className='flex justify-around bg-leader py-2 rounded-[20px]'>
                <div className='font-bold text-[20px]'>1</div>
                <div className='font-bold'>yasseur ostora</div>
                <div className='font-bold'>999.999 point</div>
            </div>
            <div className='flex justify-around bg-[#9FACDA] py-2 rounded-[20px]'>
                <div className='font-bold text-[20px]'>2</div>
                <div className='font-bold'>zakaria el kabir</div>
                <div className='font-bold'>900.999 point</div>
            </div>
            <div className='flex justify-around bg-[#9FACDA] py-2 rounded-[20px]'>
                <div className='font-bold text-[20px]'>3</div>
                <div className='font-bold'>Ramzi Gameche</div>
                <div className='font-bold'>800.999 point</div>
            </div>
            <div className='flex justify-around bg-[#9FACDA] py-2 rounded-[20px]'>
                <div className='font-bold text-[20px]'>4</div>
                <div className='font-bold'>fadi seffih </div>
                <div className='font-bold'>600.999 point</div>
            </div>
        </div>
    </div>
    
    </>
  )
}
