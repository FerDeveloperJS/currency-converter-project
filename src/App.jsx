import { useState } from "react";
import ArrowLeftRight from "./assets/svg/ArrowLeftRightSvg";
import currencyCodes from "./utils/currencyCodes";
import ArrowRightSvg from "./assets/svg/ArrowRightSvg";

function App() {
  const [from, setFrom] = useState("");
  const [currentConversion, setCurrentConversion] = useState("");

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

        <div className="flex justify-around items-center mb-10">
          <div className="flex flex-col gap-1.5 items-center">
            <label className="text-xl" htmlFor="from">
              De
            </label>
            <select
              id="from"
              className="p-1.5 rounded-xl border border-gray-300"
            >
              {currencyCodes.map((currencyCode) => (
                <option key={currencyCode}>{currencyCode}</option>
              ))}
            </select>
          </div>

          <ArrowLeftRight />

          <div className="flex flex-col gap-1.5 items-center">
            <label className="text-xl" htmlFor="to">
              A
            </label>
            <select id="to" className="p-1.5 rounded-xl border border-gray-300">
              {currencyCodes
                .slice()
                .reverse()
                .map((currencyCode) => (
                  <option key={currencyCode}>{currencyCode}</option>
                ))}
            </select>
          </div>
        </div>

        <div className="text-xl mb-14 flex justify-center gap-3.5 items-center">
          <div>{from}</div>
          <ArrowRightSvg />
          <div>{currentConversion}</div>
        </div>

        <button
          className="cursor-pointer p-2.5 flex items-center justify-center text-white text-2xl rounded-xl w-full bg-[#4e148c]"
          onClick={() => {
            const fromValue = document.querySelector("#from").value;
            const toValue = document.querySelector("#to").value;
            const amountValue = document.querySelector("#enter-amount").value;
            if (amountValue !== "") {
              fetch(
                `https://v6.exchangerate-api.com/v6/92dacbc0ef8c5b6b1c5db51d/pair/${fromValue}/${toValue}/${amountValue}`
              )
                .then((res) => res.json())
                .then((data) => {
                  const conversion = data.conversion_result;
                  setFrom(`${amountValue} ${fromValue}`);
                  setCurrentConversion(`${conversion} ${toValue}`);
                });
            }
          }}
        >
          Convertir divisa
        </button>
      </div>
    </div>
  );
}

export default App;
