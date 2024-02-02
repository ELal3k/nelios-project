"use client"
import { useAppContext } from "@/context"

export default function Range() {
  const { minPrice, setMinPrice, maxPrice, setMaxPrice } = useAppContext()

  const handleMinChange = (e) => {
    setMinPrice(Number(e.target.value))
  }

  const handleMaxChange = (e) => {
    setMaxPrice(Number(e.target.value))
  }

  return (
    <form className="flex gap-2 max-w-full">
      <div className="flex flex-col w-1/2">
        <label
          htmlFor="min"
          className="text-small_text_12 text-my_black font-lightplus"
        >
          Από
        </label>
        <input
          name="minInput"
          type="number"
          id="min"
          placeholder="€"
          value={minPrice}
          onChange={handleMinChange}
          className="px-4 py-3 border border-field_border rounded-lg text-my_black appearance-none"
        />
      </div>

      <div className="flex flex-col w-1/2">
        <label
          htmlFor="max"
          className="text-small_text_12 text-my_black font-lightplus"
        >
          Εώς
        </label>
        <input
          name="maxInput"
          type="number"
          id="max"
          placeholder="€"
          value={maxPrice}
          onChange={handleMaxChange}
          className="px-4 py-3 border border-field_border rounded-lg text-my_black"
        />
      </div>
    </form>
  )
}
