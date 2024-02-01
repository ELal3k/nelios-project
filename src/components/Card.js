import Image from "next/image"

export default function Card({ cardData }) {
  const { imageSrc, txtSmall, title, price } = cardData
  return (
    <div className="flex flex-col rounded-md bg-white shadow-xl">
      <Image
        src={imageSrc}
        style={{
          width: "100%",
          height: "auto",
          borderRadius: "12px",
        }}
        width={500}
        height={500}
        alt="Card Picture"
      />

      <div className="flex flex-col px-6 pb-6 pt-5">
        <p className="text-small_text_12 font-lightplus text-my_gray">
          {txtSmall}
        </p>
        <h2 className="text-h6 font-semibold text-my_black uppercase">
          {title}
        </h2>
        <div className="flex flex-wrap justify-between items-center">
          <p>
            <span className="text-small_text_12 text-my_black font-semibold">
              ΑΠΟ
            </span>{" "}
            <span className="text-h6 text-my_black font-semibold">
              {price} €
            </span>
          </p>
          <button className="btn-primary">Κράτηση</button>
        </div>
      </div>
    </div>
  )
}
