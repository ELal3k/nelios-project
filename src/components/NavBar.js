import { MagnifyingGlassIcon } from "@heroicons/react/24/solid"

export default function NavBar() {
  return (
    <nav className="flex flex-col items-center gap-2 justify-center mt-16">
      <label
        htmlFor="toggle"
        className="inline-flex gap-5 items-center cursor-pointer bg-background p-1 border border-stroke rounded-3xl"
      >
        <input id="toggle" type="checkbox" className="hidden peer bg-red-500" />
        <span className="px-4 py-2 font-medium rounded-3xl bg-white peer-checked:bg-background text-accent_green peer-checked:text-my_gray drop-shadow-xl peer-checked:drop-shadow-none">
          Εκδρομές
        </span>
        <span className="px-4 py-2  font-medium rounded-3xl bg-background peer-checked:bg-white text-my_gray peer-checked:text-accent_green drop-shadow-none peer-checked:drop-shadow-xl">
          Ξενοδοχεία
        </span>
      </label>
      <div>
        {" "}
        <ul className="grid grid-cols-5 justify-center items-center divide-x divide-stroke bg-background border border-stroke rounded-xl p-2">
          <li className="px-8 py-2 flex flex-col">
            <p className="text-small_text_12 font-medium">Προορισμός</p>
            <p className="text-field_text_14 font-lightplus">Ελλάδα</p>
          </li>
          <li className="px-8 py-2 text-field_text_14 font-lightplus">
            Check In
          </li>
          <li className="px-8 py-2 text-field_text_14 font-lightplus">
            Check Out
          </li>
          <li className="px-8 py-2 text-field_text_14 font-lightplus">
            Αριθμός ατόμων
          </li>

          <button className="btn-primary flex items-center justify-between w-full">
            <MagnifyingGlassIcon className="w-4" />

            <p>Αναζήτηση</p>
          </button>
        </ul>
      </div>
    </nav>
  )
}
