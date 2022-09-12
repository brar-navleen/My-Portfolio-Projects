import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import './App.css'
import {Main as ProjectCurrencyConvertor} from './react_project_currencyConvertor/main'
import { Main as ProjectWeatherApp } from './react_project_WeatherApp/main'
import { Main as ProjectDictionaryApp } from './reactProject_DictionaryApp/main'
import { Main as ProjectSimonSays } from './reactProject_SimonSays/main'
import { Main as ProjectHangman } from './reactProject_Hangman/main'
import { Main as ProjectAnalogSVGClock } from './reactProject_AnalogSVGClock/main'
import { Main as ProjectLCD } from './reactProject_LCDClock/main'
import { Main as ProjectTicTacToe } from './reactProject _TicTacToe/main'
import { Main as ProjectTipCalculator } from './reactProject_TipCalculator/main'
import { Main as ProjectRPS } from './reactProject_RPS/main'
import { Main as ProjectTodoList } from './reactProject_TODOList/main'
import { Main as Project47 } from './project_q47/main'
import { Main as Project46 } from './project_q46/main'
import { Main as Project44 } from './project_q44/main'
import { Main as Project43 } from './project_q43/main'
import { Main as Project42 } from './project_q42/main'
import { Random as Project41 } from './project_q41/random'
import { MainComponent as Project40 } from './project_q40/mainComponent'

const Links = () => {
  return (
    <div className="link-container">
      <h1>My React Projects</h1>
      <a href="./project_q40">Project: Hello &quot;First Name&quot;</a>
      <a href='./project_q41'>Project 41: Generate Random Numbers</a>
      <a href="./project_q42">Project 42: Generate random number between range</a>
      <a href='./project_q43'>Project 43: Generate count of random numbers within range</a>
      <a href="./project_q44">Project 44: Generate many strings with random characters</a>
      <a href='./project_q46'>Project 46: Calculator</a>
      <a href='./project_q47'>Project 47: Counter</a>
      <a href="./reactProject_TODOList">Project: TODO List</a>
      <a href="./RockPaperScissors" >React Project: Rock Paper Scissors</a>
      <a href="./TipCalculator">React Project: Tip Calculator</a>
      <a href='./TicTacToe'>React Project: Tic Tac Toe</a>
      <a href="./LCDClock">React Project: LCD Clock</a>
      <a href="./AnalogSVGClock">React Project: Analog SVG Clock</a>
      <a href="./HangmanGame">React Project: Hangman Game</a>
      <a href="./SimonSaysGame">React Project: Simon Says </a>
      <a href="./Dictionary">React Project: Dictionary</a>
      <a href="./WeatherApp">React Project: Weather Forecast Application</a>
      <a href="./CurrencyConvertor">React Project: Currency Convertor</a>
    </div>
  )
}

function App () {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Links />} />
          <Route path="project_q40" element={<Project40 />} />
          <Route path='project_q41' element={<Project41 />} />
          <Route path="project_q42" element={<Project42 />} />
          <Route path='project_q43' element={<Project43 />} />
          <Route path='project_q44' element={<Project44 />} />
          <Route path='project_q46' element={<Project46 />} />
          <Route path='project_q47' element={<Project47 />} />
          <Route path='reactProject_TODOList' element={<ProjectTodoList />} />
          <Route path="RockPaperScissors" element={<ProjectRPS />} />
          <Route path='TipCalculator' element={<ProjectTipCalculator />} />
          <Route path='TicTacToe' element={<ProjectTicTacToe />} />
          <Route path="LCDClock" element={<ProjectLCD />} />
          <Route path="AnalogSVGClock" element={<ProjectAnalogSVGClock />} />
          <Route path='HangmanGame' element={<ProjectHangman />} />
          <Route path="SimonSaysGame" element={<ProjectSimonSays />} />
          <Route path="Dictionary" element={<ProjectDictionaryApp />} />
          <Route path="WeatherApp" element={<ProjectWeatherApp/>}/>
          <Route path="CurrencyConvertor" element={<ProjectCurrencyConvertor/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App