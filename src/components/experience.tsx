import React from 'react'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  

const Experience = () => {

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
    <Card data-aos="zoom-in-up" className='h-[85vh] overflow-y-auto'>
    <CardHeader>
      <CardTitle className='text-2xl font-semibold tracking-tight uppercase'>Experience</CardTitle>
    </CardHeader>
    <CardContent className="space-y-2">
        {/* data here */}
      <div className="-my-8 divide-y-2 divide-gray-100">
    {experience.map((item,i)=>(
        <div key={i} className="py-8 flex flex-wrap md:flex-nowrap">
          <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
            <span className="font-semibold title-font text-gray-700">
              {item.position}
            </span>
            <span className="mt-1 text-gray-500 text-sm">{`${item.dateStart} - ${item.dateEnd}`}</span>
          </div>
          <div className="md:flex-grow">
            <h2 className="text-xl font-medium text-gray-900 title-font mb-2 uppercase">
              {item.compName}
            </h2>
            <ul className='ml-4 list-disc mr-1'>
                {item.work.map((workItem,i)=>(
                   <li key={i}>{workItem}</li>
                ))}
            </ul>
          </div>
        </div>
    ))}
    </div>
    </CardContent>
  </Card>
  )
}

export default Experience
