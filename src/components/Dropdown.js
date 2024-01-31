import { ChevronDownIcon } from "@heroicons/react/24/solid"
export default function Dropdown() {
  return (
    <label htmlFor="sldropdown">
      <select
        id="sldropdown"
        name="choice"
        className="appearance-none w-36 px-4 py-3 rounded-lg border border-field_border"
      >
        <option value="first">Φθηνότερα</option>

        <option value="third">Ακριβότερα </option>
        <option value="second" selected>
          Δημοφιλή
        </option>
      </select>
      <ChevronDownIcon className="absolute top-[14px] right-1 w-6" />
    </label>
  )
}
