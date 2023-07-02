"use client"
import {  ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";

function CarouselTwo({ children: slide, autoSlide = false, autoSlideInterval = 3000 }) {
    const [curr, setCurr ] = useState(0)

    const prev = () => setCurr((curr) => (curr === 0 ? slide.length - 1 : curr - 1))
    const next = () => setCurr((curr) => (curr === slide.length - 1 ? 0 : curr + 1))

    useEffect(() => {
        if (!autoSlide) return
        const slideInterval = setInterval(next, autoSlideInterval)
        return () => clearInterval(slideInterval)
    }, [])

  return (
    <div className=" overflow-hidden relative">
      <div className="flex transition-transform ease-out duration-500"
      style={{ transform: `translateX(-${curr * 100}%)`}}
      >{slide}</div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button onClick={prev}>
        <ArrowLeftIcon className="w-8 h-8 shadow text-gray-600 bg-white/80 hover:bg-white rounded-full p-1 "/>
        </button>
        <button onClick={next}>
        <ArrowRightIcon className="w-8 h-8 shadow text-gray-600 bg-white/80 hover:bg-white rounded-full p-1"/>
        </button>
        <div className="absolute bottom-4 right-0 left-0 ">
            <div className="flex items-center justify-center gap-2">
                {slide.map((_, i) => (
                    <div className={`transition-all w-3 h-3 bg-white rounded-full ${curr === i ? "p-2" : "bg-opacity-50"}`}/>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
}

export default CarouselTwo;
