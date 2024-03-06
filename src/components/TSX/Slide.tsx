import React from 'react'
import style from '../style/slide.module.scss'

interface Slide{
    img:string
}

function Slide({img}:Slide) {
    
    const SlideStyle = {
        backgroundImage:`url(${img})`
    }

    return (
        <div style={SlideStyle} className={style.slide}>
        
        </div>
  )
}

export default Slide
