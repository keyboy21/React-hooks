import React,{ useState } from "react";

function getRandomInt() {
  return Math.floor(Math.random() * 100);
}

const State = () => {
  const [Counter, setCounter] = useState(() => getRandomInt());
  const [Name, setName] = useState({
    firstName: "Yusuf",
    lastName: "Khan",
    id: Date.now(),
  });

  function increment() {
    setCounter((prev) => prev + 1);
    setCounter((prev) => prev + 1);
  }

  function decrement() {
    setCounter(Counter - 1);
  }

  const changeName = () => {
    setName((prev) => {
      return {
        ...prev,
        firstName: "Yunus",
      };
    });
  };
  return (
    <div>
      <div className="flex flex-col items-center bg-orange-100">
          <h1 className="text-2xl mb-3">Son</h1>

          <div className="flex gap-5">
            <button
              onClick={increment}
              className="p-2 bg-green-600 rounded-lg text-white"
            >
              Qo'shish
            </button>
            <button
              onClick={decrement}
              className="p-2 bg-red-600 rounded-lg text-white"
            >
              Ayirish
            </button>
            <button
              onClick={changeName}
              className="p-2 bg-blue-600 rounded-lg text-white"
            >
              Ism o'zgartirish
            </button>
          </div>
          <hr className="h-px w-full bg-stone-900 my-6" />
          <p className="text-blue-600 text-3xl">{Counter}</p>
          <p>{JSON.stringify(Name, "", 4)}</p>
        </div>
    </div>
  );
};



export default State;
