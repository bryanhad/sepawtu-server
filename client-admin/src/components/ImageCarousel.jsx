import { useState } from "react"
import {GrFormNext, GrFormPrevious} from 'react-icons/gr'

export default function ImageCarousel({imgArr, className}) {
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
    <div className={`relative ${className} w-full h-full overflow-hidden flex items-center`}>
        <img src={imgArr[currentIndex].imgUrl} alt="" className="relative z-[1] w-full h-full object-cover"/>
        <button onClick={goPrev} className="absolute left-0 top-[50%] translate-y-[-50%] p-2 text-xl z-[5]">
            <GrFormPrevious/>
        </button>
        <button onClick={goNext} className="absolute right-0 top-[50%] translate-y-[-50%] p-2 text-xl z-[5]">
            <GrFormNext/>
        </button>
        <p className="absolute bottom-0 left-[50%] translate-x-[-50%] z-[2] translate-y-[-10px] bg-white/70 p-2">
            {currentIndex+1} / {imgArr.length}
        </p>
    </div>
  )
}
