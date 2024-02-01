"use client"

import Slider from "./Slider"
import Range from "./Range"
import RangeRadio from "./RangeRadio"
import Filters from "./Filters"
import { useAppContext } from "@/context"
import { XMarkIcon } from "@heroicons/react/24/solid"

export default function MobileMenu() {
  const { setShowFilter } = useAppContext()
  return (
    <div className="fixed lg:hidden w-full h-screen flex justify-center backdrop-blur-md z-30">
      {" "}
      <div className=" fixed flex flex-col gap-6 p-6 bg-translucent_bg w-80 rounded-xl h-full">
        <div className="flex justify-between items-center">
          <h2 className="text-h5 font-semibold text-my_black ">ΦΙΛΤΡΑ</h2>
          <button
            className=" bg-translucent_bg drop-shadow-xl p-3 rounded-full"
            onClick={() => setShowFilter(false)}
          >
            <XMarkIcon className="h-5 text-my_black" />
          </button>
        </div>

        <div className="flex flex-col divide-y w-full gap-6">
          <div className="flex flex-col items-start gap-6 self-stretch">
            <h3 className="text-h7 text-my_black font-semibold uppercase">
              Ευρος τιμης
            </h3>
            <Range />
            <Slider />
            <RangeRadio />
          </div>

          <div className="flex flex-col items-start gap-6 self-stretch pt-6">
            <Filters />
          </div>

          <div className=" bg-white p-2 rounded-lg border-2 border-stroke">
            <button className="btn-primary w-full">Εφαρμογή</button>
          </div>
        </div>
      </div>
    </div>
  )
}
