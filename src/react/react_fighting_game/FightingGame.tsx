import playerA from './assets/playerA.gif'
import playerB from './assets/playerB.gif'
import attackImage from './assets/punch.png'
import lifelineImage from './assets/first-aid-kit.png'
import { buttonShadowEffect } from '../common/tailwind_constants'
import { useState } from 'react'

export const FightingGame = () => {
  const [round, setRound] = useState(3)
  const [isPlayerATurn, setIsPlayerATurn] = useState(true)
  const [playerAHealth, setPlayerAHealth] = useState(100)
  const [playerBHealth, setPlayerBHealth] = useState(100)

  const reducePlayerBHealth = () => {
    setIsPlayerATurn(prev => !prev)
    setPlayerBHealth(prev => prev - (Math.floor(Math.random() * (10)) + 20))

  }

  const reducePlayerAHealth = () => {
    setIsPlayerATurn(prev => !prev)
    setPlayerAHealth(prev => prev - (Math.floor(Math.random() * (10)) + 20))
  }

  const addHealthToPlayerA = () => {
    setIsPlayerATurn(prev => !prev)
    setPlayerAHealth(prev => prev + (Math.floor(Math.random() * (10)) + 20))
  }

  const addHealthToPlayerB = () => {
    setIsPlayerATurn(prev => !prev)
    setPlayerBHealth(prev => prev + (Math.floor(Math.random() * (10)) + 20))
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-6 lg:text-2xl sm:text-xl text-sm sm:p-4 p-1.5 font-semibold">
        <h1>FIGHTING GAME</h1>
        <div className='flex flex-row sm:gap-4 gap-1 sm:w-4/5 w-full'>
          <div className='flex-1'>
            <div className='flex flex-row justify-between items-center'>
              <div>{playerAHealth}</div>
              {isPlayerATurn &&
                <div className='flex flex-row items-center sm:gap-2 text-indigo-600'>
                  <div className='sm:inline hidden'>PLAYER A</div>
                  <span className="material-symbols-rounded sm:text-6xl text-4xl ">
                    arrow_left
                  </span>
                </div>
              }
              {!isPlayerATurn &&
                <div className='flex flex-row items-center sm:gap-2'>
                  <div className='sm:inline hidden'>PLAYER A</div>
                  <span className="material-symbols-rounded sm:text-6xl text-4xl">
                    arrow_left
                  </span>
                </div>
              }
            </div>
            <div className='w-full bg-gradient-to-r from-lime-400 via-amber-100 to-lime-100 sm:h-1/2 h-2/6'></div>
          </div>
          <div className='flex justify-center items-center rounded-md w-14 py-2 px-5 bg-indigo-400 text-white'>{round}</div>
          <div className='flex-1'>
            <div className='flex flex-row justify-between items-center'>
              {!isPlayerATurn &&
                <div className='flex flex-row items-center gap-2 text-indigo-600'>
                  <span className="material-symbols-rounded sm:text-6xl text-4xl">
                    arrow_right
                  </span>
                  <div className='sm:inline hidden '>PLAYER B</div>
                </div>
              }
              {isPlayerATurn &&
                <div className='flex flex-row items-center gap-2'>
                  <span className="material-symbols-rounded sm:text-6xl text-4xl">
                    arrow_right
                  </span>
                  <div className='sm:inline hidden'>PLAYER B</div>
                </div>
              }
              <div>{playerBHealth}</div>
            </div>
            <div className='w-full bg-gradient-to-r from-lime-100 via-amber-100 to-lime-400 sm:h-1/2 h-2/6'></div>
          </div>
        </div>

        <div>
          <div className='flex justify-center'>
            <img className=' sm:h-auto sm:w-auto h-32 sm:ml-16' src={playerA} />
            <img className=' sm:h-auto sm:w-auto h-32' src={playerB} />
          </div>
          <div className='-mt-3.5 rounded-[50%] h-8 bg-gradient-to-b from-lime-400 via-amber-100'></div>
        </div>

        <div className='grid grid-cols-2 sm:gap-x-24 gap-x-12 lg:w-1/2 w-full'>
          <div className='h-[96px] flex gap-4 items-center justify-center'>
            <div>ATTACK</div>
            <button onClick={() => isPlayerATurn && reducePlayerBHealth()} className={`${buttonShadowEffect} sm:w-16 w-8 px-2 flex justify-center items-center bg-gradient-to-r from-rose-100  to-red-300 rounded-md shadow-[4px_4px_0px_0px_#df8889] hover:shadow-[2px_2px_0px_0px_#df8889]`}>
              <img src={attackImage} />
            </button>
          </div>

          <div className='h-[96px] gap-4 flex items-center justify-center'>
            <button onClick={() => !isPlayerATurn && reducePlayerAHealth()} className={`${buttonShadowEffect} sm:w-16 w-8 px-2 bg-gradient-to-r from-red-300  to-rose-100 flex justify-center items-center rounded-md shadow-[4px_4px_0px_0px_#df8889] hover:shadow-[2px_2px_0px_0px_#df8889]`}>
              <img className='-scale-x-100' src={attackImage} />
            </button>
            <div>ATTACK</div>
          </div>

          <div className='h-[96px] flex gap-4 items-center justify-center'>
            <div>LIFELINE</div>
            <button onClick={() => isPlayerATurn && addHealthToPlayerA()} className={`${buttonShadowEffect} sm:w-16 w-8 px-2.5 bg-gradient-to-b from-blue-100  to-blue-300 rounded-md shadow-[4px_4px_0px_0px_#7eb6f5] hover:shadow-[2px_2px_0px_0px_#7eb6f5]`}>
              <img src={lifelineImage} />
            </button>
          </div>

          <div className='h-[96px] flex gap-4 items-center justify-center'>
            <button onClick={() => !isPlayerATurn && addHealthToPlayerB()} className={`${buttonShadowEffect} sm:w-16 w-8 px-2.5 bg-gradient-to-b from-blue-100  to-blue-300 rounded-md shadow-[4px_4px_0px_0px_#7eb6f5] hover:shadow-[2px_2px_0px_0px_#7eb6f5]`}>
              <img src={lifelineImage} />
            </button>
            <div>LIFELINE</div>
          </div>
        </div>

        <div className='flex flex-col gap-4 items-center'>
          <button className={`${buttonShadowEffect} bg-indigo-400 px-5 py-1.5 rounded-md text-white`}>RESTART</button>
          <div>LET&apos;S PLAY!</div>
        </div>
      </div>

    </>
  )
}
