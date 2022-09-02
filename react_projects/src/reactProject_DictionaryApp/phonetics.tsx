import { useEffect, useState } from "react"

export const Phonetics = (props) => {

  let a = props.list
  console.log(props.list)


  const arrayWithPhoneticText = (a || []).filter((object) => object.text && object.audio)


  const runAudio = (audio) => {
    const playAudio = new Audio(audio)
    playAudio.play()
  }

  return (
    <>
      <div className="phonetics-container">

        {arrayWithPhoneticText.map((object, i) => {
          return <div className="textAudio-container" key={i}>
            <div onClick={() => runAudio(object.audio)} className="audio"><span className=" audio material-symbols-outlined">
              volume_down_alt
            </span></div>
            <div className="text"> {object.text}</div>
          </div>
        })}

      </div>


    </>
  )
}