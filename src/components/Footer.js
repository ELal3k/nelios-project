import { PaperAirplaneIcon } from "@heroicons/react/24/outline"

export default function Footer() {
  return (
    <footer className="mt-64 h-[50vh] flex justify-center ">
      <div className="rounded-lg absolute mx-10">
        <img src="/footer-img.png" />
      </div>
      <div className="relative text-center">
        <div className="flex flex-col justify-center sm:gap-4 gap-0 items-center lg:pt-40 sm:pt-20 pt-8">
          {" "}
          <h2 className="uppercase lg:text-h4 sm:text-h6 text-text_on_image font-semibold">
            Δε βρηκατε αυτο που ψαχνετε;
          </h2>
          <button className="btn-secondary border-text_on_image text-text_on_image gap-4 sm:h-12 h-8">
            <p>Επικοινωνήστε μαζί μας</p>
            <PaperAirplaneIcon className="h-6 -rotate-45 pb-2" />
          </button>
        </div>
      </div>
    </footer>
  )
}
