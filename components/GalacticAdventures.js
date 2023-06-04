import styles from '@/styles/CursorSelection.module.css';


export default function GalacticAdventures({ mb }) {
  return (
    <div className={`mb-${mb} flex flex-col text-gray-400`}>
      <div className={`flex flex-row mt-12 items-start`}>
        <div className={`text-xs mt-1.5 mr-2 tracking-wider uppercase w-1/4`}>
          May - Aug 2023
        </div>
        <div className={`flex flex-col text-md w-3/4`}>
          <h1 className={`text-gray-300 mb-2`}>Software Engineer Intern - ServiceNow</h1>
          <p className="text-sm leading-relaxed">
            Mobile Builders team
          </p>
        </div>
      </div>

      <div className={`flex flex-row mt-12`}>
        <div className={`text-xs mt-1.5 mr-2 tracking-wider uppercase w-1/4`}>
          May - Aug 2022
        </div>
        <div className={`flex flex-col text-md w-3/4`}>
          <h1 className={`text-gray-300 mb-2`}>Software Engineer Intern - ServiceNow</h1>
          <p className="text-sm leading-relaxed">
            Resolved multiple defects for the Mobile App Builder and Mobile Card Builder, web applications for making mobile apps.
            Placed 5th in intern hackathon by using the Mobile App Builder to create Fluid, a task management app for stories and defects.
          </p>
        </div>
      </div>

      <div className={`flex flex-row mt-12`}>
        <div className={`text-xs mt-1.5 mr-2 tracking-wider uppercase w-1/4`}>
          May - Aug 2021
        </div>
        <div className={`flex flex-col text-md w-3/4`}>
          <h1 className={`text-gray-300 mb-2`}>Software Engineer Intern - Intuit</h1>
          <p className="text-sm leading-relaxed">
            Integrated native support of Tealium for Adobe Analytics to enable website data metric analysis.
            Used AWS Lambda and AWS Athena to create lambda function that periodically retrieves and transforms data from AWS Data Lake into LeanIX objects.
          </p>
        </div>
      </div>

      <div className={`flex flex-row mt-16`}>
        <div className={`text-xs mt-1.5 mr-2 tracking-wider uppercase w-1/4`}>
          2023 - 2024
        </div>
        <div className={`flex flex-col text-md w-3/4`}>
          <h1 className={`text-gray-300 mb-2`}>University of Illinois Urbana-Champaign</h1>
          <p className="italic">Master of Computer Science</p>
        </div>
      </div>

      <div className={`flex flex-row mt-8`}>
        <div className={`text-xs mt-1.5 mr-2 tracking-wider uppercase w-1/4`}>
          2020 - 2023
        </div>
        <div className={`flex flex-col text-md w-3/4`}>
          <h1 className={`text-gray-300 mb-2`}>University of Illinois Urbana-Champaign</h1>
          <p className="italic">B.S. in Statistics and Computer Science</p>
        </div>
      </div>
    </div>
  );
};