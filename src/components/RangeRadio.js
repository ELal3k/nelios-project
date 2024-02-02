"use client"
import { useAppContext } from "@/context"

export default function RangeRadio() {
  const { minPrice, setMinPrice, maxPrice, setMaxPrice } = useAppContext()

  const handleRadioChange = (e) => {
    const value = e.target.value

    switch (value) {
      case "max50":
        setMinPrice(0)
        setMaxPrice(50)
        break
      case "min50-max100":
        setMinPrice(50)
        setMaxPrice(100)
        break
      case "min150-max500":
        setMinPrice(150)
        setMaxPrice(500)
        break
      default:
        setMinPrice(0)
        setMaxPrice(1000) // Adjust the maximum value as needed
        break
    }
  }
  return (
    <form className="flex flex-col gap-4">
      <div className="flex gap-2">
        <input
          type="radio"
          id="max50"
          name="priceRange"
          value="max50"
          onChange={handleRadioChange}
        />
        <label
          htmlFor="max50"
          className="text-field_text_14 text-my_black font-lightplus"
        >
          to 50€
        </label>
      </div>

      <div className="flex gap-2">
        <input
          type="radio"
          id="min50-max100"
          name="priceRange"
          value="min50-max100"
          className="border border-field_border"
          onChange={handleRadioChange}
        />
        <label
          htmlFor="min50-max100"
          className="text-field_text_14 text-my_black font-lightplus"
        >
          from 50 to 100€
        </label>
      </div>

      <div className="flex gap-2">
        <input
          type="radio"
          id="min150-max500"
          name="priceRange"
          value="min150-max500"
          onChange={handleRadioChange}
        />
        <label
          htmlFor="min150-max500"
          className="text-field_text_14 text-my_black font-lightplus"
        >
          from 150 - 500€
        </label>
      </div>
    </form>
  )
}
