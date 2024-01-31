import { AdjustmentsVerticalIcon } from "@heroicons/react/24/outline"

export default function MobileFilterBtn() {
  return (
    <button className="btn-secondary lg:hidden gap-2 border-accent_green text-accent_green">
      <AdjustmentsVerticalIcon className="h-5" />
      <p>Φίλτρα</p>
    </button>
  )
}
