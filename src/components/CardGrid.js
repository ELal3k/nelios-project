"use client"
import Card from "@/components/Card"
import { useAppContext } from "@/context"
export default function CardGrid({ cardData }) {
  const { sortPriceOption } = useAppContext()

  const sortCards = (option) => {
    if (option === "ascending") {
      return [...cardData].sort((a, b) => a.price - b.price)
    } else if (option === "descending") {
      return [...cardData].sort((a, b) => b.price - a.price)
    }
    return cardData
  }

  const sortedCards = sortCards(sortPriceOption)

  return (
    <ul className="grid lg:grid-cols-3 lg:mx-0 mx-20 grid-cols-1 gap-8">
      {sortedCards.map((card) => (
        <li key={card.id}>
          <Card cardData={card} />
        </li>
      ))}
    </ul>
  )
}
