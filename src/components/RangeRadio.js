export default function RangeRadio() {
  return (
    <form className="flex flex-col gap-4">
      <div className="flex gap-2">
        <input type="radio" id="max50" name="priceRange" value="max50" />
        <label
          htmlFor="max50"
          className="text-field_text_14 text-my_black font-lightplus"
        >
          Εώς 50€
        </label>
      </div>

      <div className="flex gap-2">
        <input
          type="radio"
          id="min50-max100"
          name="priceRange"
          value="min50-max100"
          className="border border-field_border"
        />
        <label
          htmlFor="min50-max100"
          className="text-field_text_14 text-my_black font-lightplus"
        >
          50 - 100€
        </label>
      </div>

      <div className="flex gap-2">
        <input
          type="radio"
          id="min150-max500"
          name="priceRange"
          value="min150-max500"
        />
        <label
          htmlFor="min150-max500"
          className="text-field_text_14 text-my_black font-lightplus"
        >
          150 - 500€
        </label>
      </div>
    </form>
  )
}
