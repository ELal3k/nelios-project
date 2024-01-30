export default function Range() {
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
          id="min"
          placeholder="€"
          className="px-4 py-3 border border-field_border rounded-lg text-my_black"
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
          id="max"
          placeholder="€"
          className="px-4 py-3 border border-field_border rounded-lg text-my_black"
        />
      </div>
    </form>
  )
}
