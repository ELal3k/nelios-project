import Image from "next/image"

export default function Card({ cardData }) {
  const { name, rating, meal_plan, city, price, photo } = cardData
  return (
    <div className="flex flex-col rounded-lg bg-white shadow-xl h-full">
      <img src={photo} className=" rounded-md h-3/5" />
      {/* <Image
        src={photo}
        style={{
          width: "100%",
          height: "auto",
          borderRadius: "6px",
        }}
        width={500}
        height={500}
        alt="Card Picture"
      /> */}

      <div className="flex flex-col gap-2 px-6 pb-6 pt-5 h-full justify-between">
        <div>
          <p className="text-small_text_12 font-lightplus text-my_gray">
            rating:{rating}
          </p>
          <h2 className="text-h6 font-semibold text-my_black uppercase flex flex-col">
            <div>{name}</div>
            <div>{city}</div>
          </h2>
        </div>

        <div className=" text-my_black flex gap-1 ">
          <p>Meal Plan:</p>
          <p>{meal_plan}</p>
        </div>

        <div className="flex flex-wrap justify-between items-center">
          <p>
            <span className="text-small_text_12 text-my_black font-semibold">
              ΑΠΟ
            </span>{" "}
            <span className="text-h7 text-my_black font-semibold">
              {price} €
            </span>
          </p>
          <button className="btn-primary">Κράτηση</button>
        </div>
      </div>
    </div>
  )
}
