import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Education = () => {
  // My Education here
  const education = [
    {
      uniName: "Govt. Post Graduate College Chishtian",
      field: "FSC Pre Engineering",
      date: "Jun 2020",
      description: "This is the first step to my engineering life.",
    },
    {
      uniName: 'Pakistan Navy Polytechnic Institute',
      field: 'Diploma of Associate Engineering',
      date: 'Jan 2023',
      description: 'This is the next step to my engineering life.',
    },
    {
      uniName: 'Governor House Karachi',
      field: 'Certified AI, Metaverse, and Web 3.0 Developer & Solopreneur',
      date: 'Learning',
      description: 'This is the first step to my developer life.',
    },
  ];
  return (
    <Card data-aos="zoom-in-up" className="h-[85vh] overflow-y-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold tracking-tight uppercase">
          Education
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {/* Intermediate */}
        <div className="-my-8 divide-y-2 divide-gray-100">
          {education.map((item, i) => (
            <div key={i} className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700">
                  {item.field}
                </span>
                <span className="mt-1 text-gray-500 text-sm">{item.date}</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-xl font-medium text-gray-900 title-font mb-2 uppercase">
                  {item.uniName}
                </h2>
                <p className="leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Education;
