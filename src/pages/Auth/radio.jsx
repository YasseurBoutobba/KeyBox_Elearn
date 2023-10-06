// const CostumRadio = ({onChange, value}) => {
//     return (
//         <>
//         <h2>Account Type :</h2>
//         <div className="flex  gap-10">
//   <div className="inline-flex items-center">
//     <label
//       className="relative flex cursor-pointer items-center rounded-full p-3"
//       htmlFor="ripple-on"
//       data-ripple-dark="true"
//     >
//       <input
//         id="ripple-on"
//         name="ripple"
//         type="radio"
//         onChange={onChange}
//         className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-mainBlue transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-mainBlue checked:before:bg-mainBlue hover:before:opacity-10"
//         checked
//       />
//       <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-mainBlue opacity-0 transition-opacity peer-checked:opacity-100">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-3.5 w-3.5"
//           viewBox="0 0 16 16"
//           fill="currentColor"
//         >
//           <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
//         </svg>
//       </div>
//     </label>
//     <label
//       className="mt-px cursor-pointer select-none font-light text-gray-700"
//       htmlFor="ripple-on"
//     >
//       Child
//     </label>
//   </div>
//   <div className="inline-flex items-center">
//     <label
//       className="relative flex cursor-pointer items-center rounded-full p-3"
//       htmlFor="ripple-off"
//     >
//       <input
//         id="ripple-off"
//         name="ripple"
//         type="radio"
//         onChange={onChange}
//         className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-mainBlue transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-mainBlue checked:before:bg-mainBlue hover:before:opacity-10"
//       />
//       <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-mainBlue opacity-0 transition-opacity peer-checked:opacity-100">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-3.5 w-3.5"
//           viewBox="0 0 16 16"
//           fill="currentColor"
//         >
//           <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
//         </svg>
//       </div>
//     </label>
//     <label
//       className="mt-px cursor-pointer select-none font-light text-gray-700"
//       htmlFor="ripple-off"
//     >
//       Adult
//     </label>
//   </div>
// </div>
// </>
//      );
// }

// export default CostumRadio;

const CostumRadio = ({ onChange, name, label, values }) => {
  return (
    <>
      <h2>{label} :</h2>
      <div className='flex  gap-10'>
        {values.map((value, index) => (
          <div key={index} className='inline-flex items-center'>
            {/* <label
              className='relative flex cursor-pointer items-center rounded-full p-3'
              htmlFor={`${value.id}-${index}`}
              data-ripple-dark='true'
            > */}

            <input
              id={`${value.id}-${index}`}
              name={name}
              type='radio'
              value={value.value}
              onChange={onChange}
              // className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-mainBlue transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-mainBlue checked:before:bg-mainBlue hover:before:opacity-10"
              // checked
            />
            <label
              className='mt-px cursor-pointer pl-2 select-none font-light text-gray-700'
              htmlFor={`${value.id}-${index}`}
            >
              {value.label}
            </label>

            {/* <div className='pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-mainBlue opacity-0 transition-opacity peer-checked:opacity-100'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-3.5 w-3.5'
                  viewBox='0 0 16 16'
                  fill='currentColor'
                >
                  <circle data-name='ellipse' cx='8' cy='8' r='8'></circle>
                </svg>
              </div> */}
            {/* </label> */}
          </div>
        ))}
      </div>
    </>
  )
}

export default CostumRadio
