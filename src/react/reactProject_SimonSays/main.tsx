import { parseISO } from 'date-fns'
import { Input } from './input'

export const id = 'react-simonsaysgame'
export const title = 'SIMON SAYS GAME'
export const description = <div>
  <p>Want to test your memory? Try out this famous memory game by repeating the same pattern played by Simon.
    This famous memory game App is the online version of the Simon electronic game with its 5 illuminated square buttons.
    The objective of the game is to mimic Simon&apos;s moves in the exact order. </p>
  <p className='my-2'>To start the game hit the play button. This will let Simon have his turn (try remembering the order of the blue flashes).
    When Simon is done, a text will be shown telling you that it is your turn to repeat the same pattern. If you try to press
    any of the buttons while Simon is showing you the pattern then those clicks won&apos;t count.</p>
  <p>On your turn just repeat Simon&apos;s moves in the exact order. The game will keep track of your button presses. Each time
    you correctly match the pattern (indicated by green color), you win the round. If you click out of order (indicated by red), you loose.</p>
</div>
export const skills = ['ReactJS', 'Vite', 'Tailwind CSS', 'ESLint', 'Git', 'Github', 'VS Code', 'Responsive Web Design']
export const date = parseISO('2022-08')
export const link = './SimonSaysGame'
export const githubLink = 'https://github.com/brar-navleen/My-Portfolio-Projects/tree/main/src/react/reactProject_SimonSays'

export const Main = () => {
  return (
    <>
      <Input />
    </>
  )
}
