import CardGrid from "@/components/CardGrid"
import SideBar from "@/components/SideBar"
import Dropdown from "@/components/Dropdown"
import MobileFilterBtn from "@/components/MobileFilterBtn"

const cardData = [
  {
    id: 1,
    imageSrc: "/card-img-1.png",
    txtSmall: "2 ημέρες / 1 νύχτα",
    title: "Καλοκαιρι στο KALOGRIA BEACH HOTEL 4*  στην Αχαΐα με το Ι.Χ σας",
    price: 158,
    meal_plan: true,
  },
  {
    id: 2,
    imageSrc: "/card-img-2.png",
    txtSmall: "2 ημέρες / 1 νύχτα",
    title: "Καλοκαιρι στο AKS PORTO HELI 4* sup. με το Ι.Χ σας",
    price: 115,
    meal_plan: true,
  },
  {
    id: 3,
    imageSrc: "/card-img-3.png",
    txtSmall: "2 ημέρες / 1 νύχτα",
    title:
      "Καλοκαιρι στο BARCELO HYDRA BEACH 5* Lux στη Θερμησια Ερμιονης με το Ι.Χ. σας",
    price: 116,
    meal_plan: false,
  },
  {
    id: 4,
    imageSrc: "/card-img-4.png",
    txtSmall: "2 ημέρες / 1 νύχτα",
    title:
      "Καλοκαιρι στο ALDEMAR OLYMPIAN VILLAGE 5* Lux στην Σκαφιδια Ηλειας με το Ι.Χ. σας",
    price: 164,
    meal_plan: false,
  },
  {
    id: 5,
    imageSrc: "/card-img-5.png",
    txtSmall: "2 ημέρες / 1 νύχτα",
    title:
      "Καλοκαιρι στο AKS HINITSA BAY 4* Sup. στο Πορτο Χελι με το Ι.Χ. σας",
    price: 120,
    meal_plan: true,
  },
  {
    id: 6,
    imageSrc: "/card-img-6.png",
    txtSmall: "4 νυχτες",
    title: "Καλοκαιρινη εκδρομη στη χιο",
    price: 494,
    meal_plan: true,
  },
  {
    id: 7,
    imageSrc: "/card-img-7.png",
    txtSmall: "5 ημερες / 4 νυχτες",
    title: "Καλοκαιρινη εκδρομη στη λημνο",
    price: 479,
    meal_plan: true,
  },
  {
    id: 8,
    imageSrc: "/card-img-8.png",
    txtSmall: "2 ημέρες / 1 νύχτα",
    title:
      "Καλοκαιρι στο CAVO ORIENT BEACH HOTEL & SUITES 4* στη Ζακυνθο με το Ι.Χ. σας",
    price: 180,
    meal_plan: false,
  },
  {
    id: 9,
    imageSrc: "/card-img-9.png",
    txtSmall: "2 ημέρες / 1 νύχτα",
    title: "Καλοκαιρι στο GALINI PALACE 5* στο Κολυμπαρι Χανιων με το Ι.Χ. σας",
    price: 118,
    meal_plan: true,
  },
  {
    id: 10,
    imageSrc: "/card-img-10.png",
    txtSmall: "2 ημέρες / 1 νύχτα",
    title:
      "Καλοκαιρι στο GRECOTEL PLAZA BEACH HOUSE 4* στην Κρητη με το Ι.Χ. σας",
    price: 180,
    meal_plan: false,
  },
  {
    id: 11,
    imageSrc: "/card-img-11.png",
    txtSmall: "2 ημέρες / 1 νύχτα",
    title: "Καλοκαιρι στο BLUE LAGOON VILLAGE 5* στη Κω με το Ι.Χ. σας",
    price: 330.67,
    meal_plan: true,
  },
  {
    id: 12,
    imageSrc: "/card-img-12.png",
    txtSmall: "8 ημέρες / 7 νύχτες",
    title: "Καλοκαιρι στο ACANDIA HOTEL 4* στη Ροδο με το Ι.Χ. σας",
    price: 855,
    meal_plan: true,
  },
]

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
          <CardGrid cardData={cardData} />
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
