"use client"
import Card from "@/components/Card"
import { useAppContext } from "@/context"
export default function CardGrid({ cardData }) {
  const { sortPriceOption, minPrice, maxPrice } = useAppContext()

  const sortAndFilterCards = () => {
    let sortedCards = [...cardData]

    if (sortPriceOption === "ascending") {
      sortedCards = sortedCards.sort((a, b) => a.price - b.price)
    } else if (sortPriceOption === "descending") {
      sortedCards = sortedCards.sort((a, b) => b.price - a.price)
    }

    return sortedCards.filter(
      (card) => card.price >= minPrice && card.price <= maxPrice
    )
  }

  const sortedAndFilteredCards = sortAndFilterCards()

  return (
    <ul className="grid lg:grid-cols-3 lg:mx-0 mx-20 grid-cols-1 gap-8">
      {sortedAndFilteredCards.map((card) => (
        <li key={card.id}>
          <Card cardData={card} />
        </li>
      ))}
    </ul>
  )
}
