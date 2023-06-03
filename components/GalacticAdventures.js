import styles from '@/styles/CursorSelection.module.css';


export default function GalacticAdventures({ mb }) {
  return (
    <div className={`mb-${mb} flex flex-col`}>
      <div className={`flex flex-row mt-8`}>
        <div className={`text-[10px] mr-4 tracking-wider uppercase`}>
          MAY - AUG 2023
        </div>
        <div className={`flex flex-col text-sm`}>
          <h1>Software Engineer Intern - ServiceNow</h1>
          <p>Mobile Builders Team</p>
        </div>
      </div>

      <div className={`flex flex-row mt-8`}>
        <div className={`text-[10px] mr-4 tracking-wider uppercase`}>
          May - Aug 2022
        </div>
        <div className={`flex flex-col text-sm`}>
          <h1>Software Engineer Intern - ServiceNow</h1>
          <p>Mobile Builders Team</p>
        </div>
      </div>

      <div className={`flex flex-row mt-8`}>
        <div className={`text-[10px] mr-4 tracking-wider uppercase`}>
          May - Aug 2021
        </div>
        <div className={`flex flex-col text-sm`}>
          <h1>Software Engineer Intern - Intuit</h1>
          <p>Platform Acceleration Team</p>
        </div>
      </div>

      <div className={`flex flex-row mt-16`}>
        <div className={`text-[10px] mr-4 tracking-wider uppercase`}>
          2023 - 2024
        </div>
        <div className={`flex flex-col`}>
          <h1>University of Illinois Urbana-Champaign</h1>
          <p>Master of Computer Science</p>
        </div>
      </div>

      <div className={`flex flex-row mt-8`}>
        <div className={`text-[10px] mr-4 tracking-wider uppercase`}>
          2020 - 2023
        </div>
        <div className={`flex flex-col`}>
          <h1>University of Illinois Urbana-Champaign</h1>
          <p>Statistics and Computer Science</p>
        </div>
      </div>
    </div>
  );
};