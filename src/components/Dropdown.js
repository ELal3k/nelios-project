import { ChevronDownIcon } from "@heroicons/react/24/solid"
export default function Dropdown() {
  return (
    <label htmlFor="sldropdown">
      <select
        id="sldropdown"
        name="choice"
        className="appearance-none w-36 px-4 py-3 rounded-lg border border-field_border"
      >
        <option value="ascending">Φθηνότερα</option>

        <option value="descending">Ακριβότερα </option>
        <option value="default" selected>
          Δημοφιλή
        </option>
      </select>
      <ChevronDownIcon className="absolute top-[14px] right-1 w-6" />
    </label>
  )
}
