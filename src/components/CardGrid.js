import Card from "@/components/Card"
export default function CardGrid() {
  return (
    <ul className="grid lg:grid-cols-3 lg:mx-0 mx-20 grid-cols-1 gap-8">
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
  )
}