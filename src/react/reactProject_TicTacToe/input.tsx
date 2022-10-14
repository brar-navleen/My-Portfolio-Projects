import React from 'react'
import { buttonShadowEffect } from '../common/tailwind_constants'
export const Input = () => {
  const [player, setPlayer] = React.useState('X')
  const [cellValues, setCellValues] = React.useState(
    [['', '', ''],
      ['', '', ''],
      ['', '', '']
    ])

  const [result, setResult] = React.useState('')

  const displayPlayer = (row, column) => {
    setPlayer(prevPlayer => {
      if (prevPlayer === 'X') {
        return 'O'
      } else {
        return 'X'
      }
    })

    const newCellVals = [
      [...cellValues[0]],
      [...cellValues[1]],
      [...cellValues[2]]
    ]
    if (newCellVals[row][column] === '') {
      newCellVals[row][column] = player
    }
    setCellValues(newCellVals)

    if (newCellVals[row][0] === newCellVals[row][1] && newCellVals[row][1] === newCellVals[row][2]) {
      setResult(`${player} Wins!`)
    } else if (newCellVals[0][column] === newCellVals[1][column] && newCellVals[1][column] === newCellVals[2][column]) {
      setResult(`${player} Wins!`)
    } else if (newCellVals[1][1] === player && newCellVals[0][0] === newCellVals[1][1] && newCellVals[1][1] === newCellVals[2][2]) {
      setResult(`${player} Wins!`)
    } else if (newCellVals[1][1] === player && newCellVals[0][2] === newCellVals[1][1] && newCellVals[1][1] === newCellVals[2][0]) {
      setResult(`${player} Wins!`)
    } else if (newCellVals.map(rowArray => rowArray.every(e => e !== '')).every(e => e)) {
      setResult("It's a Draw!")
    }
  }

  const resetGame = () => {
    setCellValues(
      [['', '', ''],
        ['', '', ''],
        ['', '', '']
      ])

    setPlayer('X')

    setResult('')
  }

  return (
    <>
      <div className="flex justify-center">
        <div className="w-[50%] text-black text-[54px] mt-[20px] text-center">Tic Tac Toe</div>
      </div>

      <div className="flex justify-center text-[40px] p-[20px]">Current Player:&nbsp;
        <div>{player}</div>
      </div>

      <div className="flex justify-center mb-6">
        <table className='border-collapse'>
          <tbody>
            <tr>
              <td className='w-[130px] h-[130px] text-[50px] text-center border-4' onClick={() => displayPlayer(0, 0)}>{cellValues[0][0]}</td>
              <td className='w-[130px] h-[130px] text-[50px] text-center border-4' onClick={() => displayPlayer(0, 1)}>{cellValues[0][1]}</td>
              <td className='w-[130px] h-[130px] text-[50px] text-center border-4' onClick={() => displayPlayer(0, 2)}>{cellValues[0][2]}</td>
            </tr>

            <tr>
              <td className='w-[130px] h-[130px] text-[50px] text-center border-4' onClick={() => displayPlayer(1, 0)}>{cellValues[1][0]}</td>
              <td className='w-[130px] h-[130px] text-[50px] text-center border-4' onClick={() => displayPlayer(1, 1)}>{cellValues[1][1]}</td>
              <td className='w-[130px] h-[130px] text-[50px] text-center border-4' onClick={() => displayPlayer(1, 2)}>{cellValues[1][2]}</td>
            </tr>

            <tr>
              <td className='w-[130px] h-[130px] text-[50px] text-center border-4' onClick={() => displayPlayer(2, 0)}>{cellValues[2][0]}</td>
              <td className='w-[130px] h-[130px] text-[50px] text-center border-4' onClick={() => displayPlayer(2, 1)}>{cellValues[2][1]}</td>
              <td className='w-[130px] h-[130px] text-[50px] text-center border-4' onClick={() => displayPlayer(2, 2)}>{cellValues[2][2]}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex justify-center text-[38px] p-[4px]">{result}</div>

      <div className="flex justify-center">
        <button className={`text-3xl px-6 rounded-[10px] bg-zinc-300 shadow-zinc-400 hover:shadow-zinc-400 py-2 ${buttonShadowEffect}`} onClick={() => resetGame()}>RESTART</button>
      </div>
    </>
  )
}
