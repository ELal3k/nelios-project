import CardGrid from "@/components/CardGrid"
import SideBar from "@/components/SideBar"
import Dropdown from "@/components/Dropdown"
import MobileFilterBtn from "@/components/MobileFilterBtn"

export default function Home() {
  return (
    <main className="flex mt-16 items-start gap-6 self-stretch">
      <SideBar />
      <section className="w-full">
        <article className="flex lg:flex-row flex-col gap-4 justify-between items-center lg:px-0 px-20">
          <h2 className="text-center">139 διαθέσιμα πακέτα διακοπών</h2>
          <div className="flex sm:flex-row flex-col lg:w-auto w-full sm:justify-between items-center gap-2">
            <MobileFilterBtn />
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
