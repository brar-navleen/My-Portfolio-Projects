import { parseISO } from 'date-fns'
import { CoverPage } from './CoverPage'

export const title = 'Daily Diary'
export const description = <div>
  Whether you are looking for a tool to record your daily activities, jotting down notes, recording daily musings,
  setting up a schedule, keeping track of appointments, important deadlines or events and much more,
  this daily diary has you covered. Each day has a lot of writing space that you need with well organized pages.
  Designed with a focus on <span className='bg-cyan-100 px-2'>privacy</span>, your information is never sent to
  any external servers and is stored locally so that it can be retrieved any time you visit the App using the same computer.
</div>
export const skills = ['ReactJS', 'Vite', 'Tailwind CSS', 'CSS', 'Local Storage API', 'ESLint', 'Git', 'Github', 'VS Code', 'Responsive Web Design']
export const date = parseISO('2022-09')
export const link = './DailyDiary'
export const githubLink = 'https://github.com/brar-navleen/My-Portfolio-Projects/tree/main/src/react/react_project_DailyDiary'

export const Main = () => {
  return (
    <div className="flex lg:flex-row flex-col lg:justify-center lg:items-center items-center lg:m-[33px] p-[10px] font-applyOregano">
      <CoverPage />
    </div>
  )
}
