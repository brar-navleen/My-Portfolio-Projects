import { Input } from './input'
import './style.css'

export const title = 'TIP CALCULATOR'
export const description = 'The application calculates the amount to be paid per person upon entering net amount and tip percentage '
export const skills = ['React', 'JavaScript', 'CSS', 'Tailwind', 'HTML']
export const date = 'Sept 24 - Sept 27, 2022'
export const link = './TipCalculator'
export const githubLink = 'https://github.com/Navleenkaursandhu/notebook/tree/main/react_projects/src/reactProject_TipCalculator'

export const Main = () => {
  return (
    <div className='tip-calculator'>
      <Input />
    </div>
  )
}
