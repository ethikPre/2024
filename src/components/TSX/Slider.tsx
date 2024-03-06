import  { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import style from '../style/slider.module.scss'
import Slide from "./Slide"
import Navbar from '../../uiComponents/Navbar'
import json from '../../imgRef/ethikref.json'

function Slider() {
  const [currentSlide,setCurrentSlide] = useState<number>(0);
  const [currentKey,setCurrentKey] = useState<string>('')
  const nav = useNavigate();
  const auth = localStorage.getItem("auth")

  useEffect(()=>{
    if(auth!= "true"){
      nav("/confirm")
    }
  },[])

  const sliderStyle = {
    right: `${100*currentSlide}vw`
  }

  addEventListener("keydown",(e)=>{
    if(e.key== "ArrowLeft" || e.key == "ArrowRight"){
      setCurrentKey(e.key)
    }
  })

  return (
    auth == "true"?
    
    <main className={style.wrapper}>
      <div style={sliderStyle} className={style.sliderBox}>
        {
          json.map((e)=>{
            return(
              <>
              <Slide img={e.img}/>
              </>
            )
          })
        }
        

      </div>
      <Navbar currentKey={currentKey} setCurrentKey={setCurrentKey} setSlide={setCurrentSlide} slide={currentSlide} slidesCount={json.length}/>
    </main>
    
    :
    <></>
  )
}

export default Slider
