import Card from "@/components/Card"
export default function CardGrid({ cardData }) {
  return (
    <ul className="grid lg:grid-cols-3 lg:mx-0 mx-20 grid-cols-1 gap-8">
      {cardData.map((card) => (
        <li key={card.id} className=" bg-slate-400">
          <Card cardData={card} />
        </li>
      ))}
    </ul>
  )
}
