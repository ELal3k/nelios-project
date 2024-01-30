export default function SideBar() {
  return (
    <aside className="flex flex-col items-start gap-6 p-6 bg-translucent_bg w-80 rounded-xl mt-16">
      <h2 className="text-h5 font-semibold text-my_black pb-6">ΦΙΛΤΡΑ</h2>

      <div className="flex flex-col divide-y w-full gap-6">
        <div className="flex flex-col items-start gap-6 self-stretch ">
          <h3>ΕΥΡΟΣ ΤΙΜΗΣ</h3>
          <form>Φορμα</form>
          <form>RANGE</form>
          <form>RADIO</form>
        </div>

        <div className="flex flex-col items-start gap-6 self-stretch pt-6">
          <h3>ΕΥΡΟΣ ΤΙΜΗΣ</h3>
          <form>Φορμα</form>
          <form>RANGE</form>
          <form>RADIO</form>
        </div>

        <div className="flex flex-col items-start gap-6 self-stretch pt-6">
          <h3>ΕΥΡΟΣ ΤΙΜΗΣ</h3>
          <form>Φορμα</form>
          <form>RANGE</form>
          <form>RADIO</form>
        </div>
      </div>
    </aside>
  )
}
