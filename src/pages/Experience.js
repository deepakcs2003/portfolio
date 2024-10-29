import React from 'react';
import { Building2, Calendar, MapPin, ExternalLink, Briefcase, ArrowUpRight } from 'lucide-react';

const experienceData = [
  {
    id: 1,
    role: "Contributor",
    company: "GirlScript Summer of Code ",
    location: "Online",
    duration: "Oct 2024 - Present",
    type: " Part-time",
    description: [
      "open source "
    ]
  },
  {
    id: 2,
    role: "Board Member",
    company: "CodeChef Wce Chapter",
    location: "Walchand College of engineering",
    duration: "May 2023 - May 2024 ",
    type: "Full-time",
    description: [
      "Cp executer"
    ]
  }
];

const Experience = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b bg-[#090517] py-16 px-4 sm:px-6 lg:px-8 mt-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Briefcase className="w-8 h-8 text-[#4F46E5]" />
          <h2 className="text-3xl font-bold text-white">Experience</h2>
        </div>
        
        <div className="space-y-8">
          {experienceData.map((experience) => (
            <div 
              key={experience.id} 
              className="group relative bg-[#1F2937] rounded-xl p-6 sm:p-8 hover:bg-[#374151] transition-all duration-300 ease-in-out border border-gray-800 hover:border-[#4F46E5] shadow-lg hover:shadow-[#4F46E5]/10"
            >
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#4F46E5] to-[#A855F7] rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <div className="flex-grow">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-[#4F46E5] transition-colors duration-300">
                      {experience.role}
                    </h3>
                    
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#4F46E5]/10 text-[#4F46E5]">
                      {experience.type}
                    </span>
                  </div>
                  
                  <div className="mt-2 text-lg font-semibold text-[#D1D5DB] group-hover:text-white transition-colors duration-300">
                    {experience.company}
                  </div>
                  
                  <div className="mt-2 flex flex-col sm:flex-row sm:items-center gap-3 text-sm text-[#9CA3AF]">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#3B82F6]" />
                      {experience.duration}
                    </div>
                    <div className="hidden sm:block text-[#4F46E5]">•</div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#FBBF24]" />
                      {experience.location}
                    </div>
                  </div>
                  
                  <ul className="mt-4 space-y-3">
                    {experience.description.map((item, index) => (
                      <li 
                        key={index} 
                        className="flex items-start gap-3 text-[#D1D5DB] group-hover:text-white transition-colors duration-300"
                      >
                        <ArrowUpRight className="w-5 h-5 mt-1 text-[#4F46E5]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;