import ArrowLeftRight from "./assets/svg/ArrowLeftRightSvg";

function App() {
  return (
    <div className="min-h-screen p-4 flex justify-center items-center bg-[#4e148c]">
      <div className="bg-white p-10 rounded-xl">
        <h1 className="text-3xl font-semibold mb-10">
          Currency Converter By Fer
        </h1>
        <div className="flex flex-col gap-2.5 mb-10">
          <label htmlFor="enter-amount" className="text-xl">
            Ingresar cantidad
          </label>
          <input
            id="enter-amount"
            type="text"
            className="border border-gray-400 p-2 rounded-xl"
          />
        </div>

        <div className="flex justify-around items-center mb-14">
          <div className="flex flex-col gap-1.5 items-center">
            <label className="text-xl" htmlFor="from">
              De
            </label>
            <select
              id="from"
              className="p-1.5 rounded-xl border border-gray-300"
            ></select>
          </div>

          <ArrowLeftRight />

          <div className="flex flex-col gap-1.5 items-center">
            <label className="text-xl" htmlFor="to">
              A
            </label>
            <select
              id="to"
              className="p-1.5 rounded-xl border border-gray-300"
            ></select>
          </div>
        </div>

        <button className="cursor-pointer p-2.5 flex items-center justify-center text-white text-2xl rounded-xl w-full bg-[#4e148c]">
          Convertir divisa
        </button>
      </div>
    </div>
  );
}

export default App;
