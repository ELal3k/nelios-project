import { ChevronDownIcon } from "@heroicons/react/24/solid"
import Image from "next/image"
import Card from "@/components/Card"
import SideBar from "@/components/SideBar"
export default function Home() {
  return (
    <main className="flex mt-16 items-start gap-6 self-stretch">
      <SideBar />
      <section className="w-full">
        <div className="flex justify-between items-center">
          <p>139 διαθέσιμα πακέτα διακοπών</p>
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
        </div>
        <article className="mt-4">
          <ul className="grid lg:grid-cols-3 grid-cols-1 gap-8">
            <li>
              <Card />
            </li>
            <li>
              <Card />
            </li>
            <li>
              <Card />
            </li>
            <li>
              <Card />
            </li>
            <li>
              <Card />
            </li>
            <li>
              <Card />
            </li>
            <li>
              <Card />
            </li>
            <li>
              <Card />
            </li>
            <li>
              <Card />
            </li>
            <li>
              <Card />
            </li>{" "}
            <li>
              <Card />
            </li>
            <li>
              <Card />
            </li>
          </ul>
        </article>
      </section>
    </main>
  )
}
