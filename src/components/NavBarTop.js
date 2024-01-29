import { ChevronRightIcon } from "@heroicons/react/24/solid"

export default function NavBarTop() {
  return (
    <nav className="flex justify-center mt-6">
      <ul className="flex items-center text-small_text_12 text-center">
        <li className="flex items-center text-my_black">
          <span className="mr-1">Αρχική</span>
          <ChevronRightIcon className="h-4 w-4 text-accent_green" />
        </li>
        <li className="flex items-center text-my_black">
          <span className="mx-1">Ελλάδα</span>
          <ChevronRightIcon className="h-4 w-4 text-accent_green" />
        </li>
        <li className="flex items-center text-my_gray">
          <span className="ml-1">Πακέτα</span>
        </li>
      </ul>
    </nav>
  )
}
