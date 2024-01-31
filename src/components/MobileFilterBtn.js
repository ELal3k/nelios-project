"use client"
import { useAppContext } from "@/context"
import { AdjustmentsVerticalIcon } from "@heroicons/react/24/outline"

export default function MobileFilterBtn() {
  const { setShowFilter } = useAppContext()
  return (
    <button
      className="btn-secondary lg:hidden gap-2 border-accent_green text-accent_green"
      onClick={() => setShowFilter((prev) => !prev)}
    >
      <AdjustmentsVerticalIcon className="h-5" />
      <p>Φίλτρα</p>
    </button>
  )
}
