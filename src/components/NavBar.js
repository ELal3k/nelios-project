export default function NavBar() {
  return (
    <nav className="flex justify-center mt-10">
      <label
        htmlFor="toggle"
        className="inline-flex gap-5 items-center cursor-pointer bg-background p-1 rounded-3xl"
      >
        <input id="toggle" type="checkbox" className="hidden peer bg-red-500" />
        <span className="px-4 py-2 font-medium rounded-3xl bg-white peer-checked:bg-background text-accent_green peer-checked:text-my_gray drop-shadow-xl peer-checked:drop-shadow-none">
          Εκδρομές
        </span>
        <span className="px-4 py-2  font-medium rounded-3xl bg-background peer-checked:bg-white text-my_gray peer-checked:text-accent_green drop-shadow-none peer-checked:drop-shadow-xl">
          Ξενοδοχεία
        </span>
      </label>
    </nav>
  )
}
