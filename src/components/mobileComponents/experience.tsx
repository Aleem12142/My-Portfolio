import React from 'react'

const MobileExperience = () => {
   // My Experience here
   const experience = [
    {
      compName: "PN Dockyard",
      dateStart: "Jan 2022",
      dateEnd: "Dec 2024",
      position: "Supervisor A-Grade Welder",
      description: "This is the first step to my practical life.",
      work: ['Worked hard there official projects ', 'contributed in the team task']
  },
]
  return (
    <div className='w-full p-5'>
      <h2 className="scroll-m-20 border-b border-blue-500 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Experience
      </h2>
      <div className="mt-4 divide-y-2 divide-blue-200">
    {experience.map((item,i)=>(
        <div key={i} className="py-4 flex flex-wrap md:flex-nowrap">
          <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
            <span className="font-semibold title-font text-gray-700">
              {item.position}
            </span>
            <span className="mt-1 text-blue-500 text-sm">{`${item.dateStart} - ${item.dateEnd}`}</span>
          </div>
          <div className="md:flex-grow">
            <h2 className="text-xl font-medium text-gray-900 title-font mb-2 uppercase">
              {item.compName}
            </h2>
            <ul className='ml-4 list-disc text-gray-500 mr-1'>
                {item.work.map((workItem,i)=>(
                   <li key={i}>{workItem}</li>
                ))}
            </ul>
          </div>
        </div>
    ))}
    </div>
    </div>
  )
}

export default MobileExperience
