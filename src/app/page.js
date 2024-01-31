import CardGrid from "@/components/CardGrid"
import SideBar from "@/components/SideBar"
import Dropdown from "@/components/Dropdown"
import { AdjustmentsVerticalIcon } from "@heroicons/react/24/outline"
export default function Home() {
  return (
    <main className="flex mt-16 items-start gap-6 self-stretch">
      <SideBar />
      <section className="w-full">
        <article className="flex lg:flex-row flex-col justify-between items-center lg:px-0 px-20">
          <h2 className="">139 διαθέσιμα πακέτα διακοπών</h2>
          <div className="flex lg:w-auto w-full justify-between">
            <button className="btn-secondary lg:hidden gap-2 border-accent_green text-accent_green">
              <AdjustmentsVerticalIcon className="h-5" />
              <p>Φίλτρα</p>
            </button>
            <div className="relative">
              <Dropdown />
            </div>
          </div>
        </article>
        <article className="mt-4">
          <CardGrid />
          <footer className="flex justify-center mt-6">
            <button className="btn-secondary border-accent_green text-accent_green">
              Δείτε περισσότερα (127)
            </button>
          </footer>
        </article>
      </section>
    </main>
  )
}
