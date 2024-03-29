import reactImage from './assets/react.png'
import viteImage from './assets/vite.png'
import jsImage from './assets/js.png'
import htmlImage from './assets/html.png'
import tailwindImage from './assets/tailwind.png'
import cssImage from './assets/css.png'
import gitImage from './assets/git.png'
import githubImage from './assets/github.png'
import vscodeImage from './assets/vscode.png'
import eslintImage from './assets/eslint.png'
import restapiImage from './assets/restapi.png'
import vercelImage from './assets/vercel.png'
import { SkillDetails } from './SkillDetails'

const skillSetArray = [
  {
    skill: 'REACT',
    image: reactImage
  },
  {
    skill: 'VITE',
    image: viteImage
  },
  {
    skill: 'JAVASCRIPT',
    image: jsImage
  },
  {
    skill: 'HTML',
    image: htmlImage
  },
  {
    skill: 'TAILWIND CSS',
    image: tailwindImage
  },
  {
    skill: 'CSS',
    image: cssImage
  },
  {
    skill: 'GIT',
    image: gitImage
  },
  {
    skill: 'GITHUB',
    image: githubImage
  },
  {
    skill: 'REST API',
    image: restapiImage
  },
  {
    skill: 'ESLINT',
    image: eslintImage
  },
  {
    skill: 'VS CODE',
    image: vscodeImage
  },
  {
    skill: 'Vercel',
    image: vercelImage
  }
]
export const Skillset = () => {
  return (
    <>
      <div className="flex flex-col px-4 text-[#371064] items-center mt-16 bg-indigo-100 pt-8 pb-10 lg:mx-8 md:mx-8 mx-2 rounded-2xl border border-violet-200">
        <div className="font-bold lg:text-3xl md:text-2xl text-xl">
          SKILL SET
        </div>

        <div className="flex flex-wrap gap-4 mt-8 w-full justify-center font-bold lg:text-xl md:text-lg text-md">
          {skillSetArray.map((skillObj, i) => {
            return <SkillDetails key={i} skillDetails={skillObj} />
          })}
        </div>
      </div>
    </>
  )
}
