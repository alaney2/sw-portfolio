import Skills from '@/components/Skills';
import { useCursor } from "@/components/CursorProvider";
import { borderColors } from '@/components/helpers';


export default function GalacticAdventures() {
  const { cursor } = useCursor();

  return (
    <div className={`flex flex-col text-gray-400`}>
      <a href="https://www.cs.illinois.edu" target="_blank" rel="noopener noreferrer" className='md:mt-16'>
        <div className={`flex flex-col md:flex-row rounded-xl xl:px-6 py-4 border-2 border-transparent ${borderColors[cursor]} hover:border-opacity-50 transition duration-300`}>
          <div className={`text-xs mb-2 md:mb-0 mt-1.5 mr-4 xl:mr-6 tracking-wider uppercase md:w-1/4`}>
            2023 - 2024
          </div>
          <div className={`flex flex-col text-md md:w-3/4`}>
            <h1 className={`text-gray-300 mb-2`}>University of Illinois Urbana-Champaign</h1>
            <p className="italic">Master of Computer Science</p>
          </div>
        </div>
      </a>

      <a href="https://www.cs.illinois.edu" target="_blank" rel="noopener noreferrer" className='md:mt-4'>
        <div className={`flex flex-col md:flex-row rounded-xl xl:px-6 py-4 border-2 border-transparent ${borderColors[cursor]} hover:border-opacity-50 transition duration-300`}>
          <div className={`text-xs mb-2 md:mb-0 mt-1.5 mr-4 xl:mr-6 tracking-wider uppercase md:w-1/4`}>
            2020 - 2023
          </div>
          <div className={`flex flex-col text-md md:w-3/4`}>
            <h1 className={`text-gray-300 mb-2`}>University of Illinois Urbana-Champaign</h1>
            <p className="italic mb-1">B.S. in Statistics and Computer Science</p>
            {/* <p className="text-xs">Major GPA: 3.88; Graduated with highest distinction</p> */}
          </div>
        </div>
      </a>

      <a href="https://fremontunified.org/msjhs/" target="_blank" rel="noopener noreferrer" className='md:mt-4'>
        <div className={`flex flex-col md:flex-row rounded-xl xl:px-6 py-4 border-2 border-transparent ${borderColors[cursor]} hover:border-opacity-50 transition duration-300`}>
          <div className={`text-xs mb-2 md:mb-0 mt-1.5 mr-4 xl:mr-6 tracking-wider uppercase md:w-1/4`}>
            2016 - 2020
          </div>
          <div className={`flex flex-col text-md md:w-3/4`}>
            <h1 className={`text-gray-300 mb-2`}>Mission San Jose High School</h1>
            {/* <p className="italic mb-1">B.S. in Statistics and Computer Science</p> */}
            {/* <p className="text-xs">Major GPA: 3.88; Graduated with highest distinction</p> */}
          </div>
        </div>
      </a>

      <a href="https://www.servicenow.com" target="_blank" rel="noopener noreferrer" className='md:mt-24 mt-10'>
        <div className={`flex flex-col md:flex-row rounded-xl xl:px-6 py-6 border-2 border-transparent ${borderColors[cursor]} md:hover:border-opacity-50 transition duration-300`}>
          <div className={`text-xs mb-2 md:mb-0 mt-1.5 mr-4 xl:mr-6 tracking-wider uppercase md:w-1/4`}>
            May - Aug 2023
          </div>
          <div className={`flex flex-col text-md md:w-3/4`}>
            <h1 className={`text-gray-300 mb-3`}>Software Engineer Intern - ServiceNow</h1>
            <p className="text-sm leading-relaxed mb-5">
              Resolved defects and completed stories for the Mobile App Builder. 
            </p>
            <div className="w-full">
              <Skills skills={['Seismic', 'Tectonic', 'JavaScript', 'Git', 'ServiceNow']} />
            </div>
          </div>
        </div>
      </a>
      
      <a href="https://www.servicenow.com" target="_blank" rel="noopener noreferrer" className='md:mt-10'>
        <div className={`flex flex-col md:flex-row rounded-xl xl:px-6 py-6 border-2 border-transparent ${borderColors[cursor]} hover:border-opacity-50 transition duration-300`}>
          <div className={`text-xs mb-2 md:mb-0 mt-1.5 mr-4 xl:mr-6 tracking-wider uppercase md:w-1/4`}>
            May - Aug 2022
          </div>
          <div className={`flex flex-col text-md md:w-3/4`}>
            <h1 className={`text-gray-300 mb-3`}>Software Engineer Intern - ServiceNow</h1>
            <p className="text-sm leading-relaxed mb-5">
              Resolved multiple defects for the Mobile App Builder and Mobile Card Builder, web applications for making mobile apps.
              Placed 5th in intern hackathon by using the Mobile App Builder to create Fluid, a task management app for stories and defects.
            </p>
            <div className="w-full">
              <Skills skills={['Seismic', 'Tectonic', 'JavaScript', 'Git', 'ServiceNow']} />
            </div>
          </div>
        </div>
      </a>

      <a href="https://www.intuit.com" target="_blank" rel="noopener noreferrer" className='md:mt-10'>
        <div className={`flex flex-col md:flex-row rounded-xl xl:px-6 py-6 border-2 border-transparent ${borderColors[cursor]} hover:border-opacity-50 transition duration-300`}>
          <div className={`text-xs mb-2 md:mb-0 mt-1.5 mr-4 xl:mr-6 tracking-wider uppercase md:w-1/4`}>
            May - Aug 2021
          </div>
          <div className={`flex flex-col text-md md:w-3/4`}>
            <h1 className={`text-gray-300 mb-3`}>Software Engineer Intern - Intuit</h1>
            <p className="text-sm leading-relaxed mb-5">
              Integrated native support of Tealium for Adobe Analytics to enable website data metric analysis.
              Used AWS Lambda and AWS Athena to create lambda function that periodically retrieves and transforms data from AWS Data Lake into LeanIX objects.
            </p>
            <div className="w-full">
              <Skills skills={['React', 'Python', 'Java', 'SCSS', 'JavaScript', 'AWS', 'Git']} />
            </div>
          </div>
        </div>
      </a>
      
    </div>
  );
};