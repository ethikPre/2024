import React, { useEffect } from 'react'
import style from './styles/navbar.module.scss'

const arrowLeft = <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M0 0h24v24H0z"/><path fill="currentColor" d="M9.586 4L3 10.586a2 2 0 0 0 0 2.828L9.586 20a2 2 0 0 0 2.18.434l.145-.068A2 2 0 0 0 13 18.586V16h7a2 2 0 0 0 2-2v-4l-.005-.15A2 2 0 0 0 20 8l-7-.001V5.414A2 2 0 0 0 9.586 4"/></g></svg>
const arrowRight = <svg className={style.arrowRight} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M0 0h24v24H0z"/><path fill="currentColor" d="M9.586 4L3 10.586a2 2 0 0 0 0 2.828L9.586 20a2 2 0 0 0 2.18.434l.145-.068A2 2 0 0 0 13 18.586V16h7a2 2 0 0 0 2-2v-4l-.005-.15A2 2 0 0 0 20 8l-7-.001V5.414A2 2 0 0 0 9.586 4"/></g></svg>

interface Nav {
    setSlide:React.Dispatch<React.SetStateAction<number>>
    slide:number
    slidesCount:number
    currentKey:string
    setCurrentKey:React.Dispatch<React.SetStateAction<string>>
}

function Navbar({setSlide,slide,slidesCount,currentKey,setCurrentKey}:Nav) {

    const handleSlideLeft = () =>{
        if(slide == 0){
            return
        }
        setSlide(slide-1);
    }

    const handleSlideRight = () =>{
        if(slide == slidesCount-1){
            return
        }
        setSlide(slide+1)
    }

    const handleKeyPress = () =>{
        if(currentKey != "ArrowRight" && currentKey!= "ArrowLeft"){
            return
        }
        setTimeout(()=>{
            if(currentKey == "ArrowRight"){
                handleSlideRight()
            }
            if(currentKey == "ArrowLeft"){
                handleSlideLeft()
            }
            setCurrentKey('')
        },100)
    }
    useEffect(()=>{
        handleKeyPress()
    },[currentKey])

    return (
    <nav className={style.nav}>
      <div className={style.navigation}>
        <button onClick={()=>{handleSlideLeft()}}>{arrowLeft}</button>
        <button onClick={()=>{handleSlideRight()}}>{arrowRight}</button>
      </div>
    </nav>
  )
}

export default Navbar
