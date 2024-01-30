import Slider from "./Slider"
import Range from "./Range"
import RangeRadio from "./RangeRadio"
import Filters from "./Filters"
export default function SideBar() {
  return (
    <aside className="lg:flex hidden flex-col items-start gap-6 p-6 bg-translucent_bg w-80 rounded-xl mt-16">
      <h2 className="text-h5 font-semibold text-my_black pb-6">ΦΙΛΤΡΑ</h2>

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

        <div className="flex flex-col items-start gap-6 self-stretch pt-6">
          <Filters />
        </div>
      </div>
    </aside>
  )
}
