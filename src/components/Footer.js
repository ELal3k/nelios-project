import { PaperAirplaneIcon } from "@heroicons/react/24/outline"

export default function Footer() {
  return (
    <footer className="mt-64 pb-11">
      <div className="rounded-lg absolute lg:mx-0 mx-5">
        <img src="/footer-img.png" />
      </div>
      <div className="relative text-center">
        <div className="flex flex-col justify-center gap-4 items-center lg:pt-40 sm:pt-20 pt-10">
          {" "}
          <h2 className="uppercase lg:text-h4 sm:text-h6 text-text_on_image font-semibold">
            Δε βρηκατε αυτο που ψαχνετε;
          </h2>
          <button className="flex justify-center items-center gap-4 sm:h-12 h-8 border border-text_on_image text-button text-text_on_image px-6 py-4 rounded-lg">
            <p>Επικοινωνήστε μαζί μας</p>
            <PaperAirplaneIcon className="h-6 -rotate-45 pb-2" />
          </button>
        </div>
      </div>
    </footer>
  )
}
