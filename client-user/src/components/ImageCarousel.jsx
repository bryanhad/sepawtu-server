import { useState } from "react"
import {GrFormNext, GrFormPrev} from 'react-icons/gr'

export default function ImageCarousel({imgArr}) {
    const [currentIndex, setCurrentIndex] = useState(0)

    function goNext() {
        const nextIndex = currentIndex + 1
        nextIndex > imgArr.length-1 ? setCurrentIndex(0) : setCurrentIndex(nextIndex)
    }
    function goPrev() {
        const prevIndex = currentIndex - 1
        prevIndex < 0 ? setCurrentIndex(imgArr.length-1) : setCurrentIndex(prevIndex)
    }


  return (
    <div className="relative max-w-[300px]">
        <img src={imgArr[currentIndex].imgUrl} alt="" />
        <button onClick={goNext}>
            <GrFormNext/>
        </button>
        <button onClick={goPrev}>prev</button>
    </div>
  )
}
