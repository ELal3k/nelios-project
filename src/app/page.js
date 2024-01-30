import { ChevronDownIcon } from "@heroicons/react/24/solid"
import CardGrid from "@/components/CardGrid"
import SideBar from "@/components/SideBar"
export default function Home() {
  return (
    <main className="flex mt-16 items-start gap-6 self-stretch">
      <SideBar />
      <section className="w-full">
        <article className="flex justify-between items-center lg:px-0 px-20">
          <h2>139 διαθέσιμα πακέτα διακοπών</h2>
          <div className="relative">
            <label htmlFor="pet-select">
              <select
                name="choice"
                className="appearance-none w-36 px-4 py-3 rounded-lg border border-field_border"
              >
                <option value="first">First Value</option>
                <option value="second" selected>
                  Δημοφιλή
                </option>
                <option value="third">Third Value </option>
              </select>
              <ChevronDownIcon className="absolute top-[14px] right-1 w-6" />
            </label>
          </div>
        </article>
        <article className="mt-4">
          <CardGrid />
          <footer className="flex justify-center mt-6">
            {" "}
            <button className="flex justify-center items-center h-12 border border-accent_green text-button text-accent_green px-6 py-4 rounded-lg">
              Δείτε περισσότερα (127)
            </button>
          </footer>
        </article>
      </section>
    </main>
  )
}
