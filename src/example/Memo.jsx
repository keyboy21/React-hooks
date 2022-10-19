import { useState, useMemo, useEffect } from "react";

function Complexcompute(num) {
  let i = 0;

  while (i < 100000000) i++;
  return num * 2;
}

const Memo = () => {
  const [number, setNumber] = useState(24);
  const [colored,setColored] = useState(false);

  const computed = useMemo(() => Complexcompute(number), [number]);
 
  
  const styles = useMemo(() => ( {backgroundColor: colored ? 'red' : 'white'}), [colored])

  useEffect(() => {
     console.log('styles');
  }, [styles]);

  return (
    <>
      <h1 style={styles} >{computed}</h1>
      <button
        onClick={() => setNumber((prev) => prev + 1)}
        className="p-2 bg-green-600 rounded-lg text-white"
      >
        Qo'shish
      </button>
      <button
        onClick={() => setNumber((prev) => prev - 1)}
        className="p-2 bg-red-600 rounded-lg text-white"
      >
        Ayirish
      </button>
      <button
        onClick={() => setColored((prev) => prev = !prev)}
        className="p-2 bg-yellow-600 rounded-lg text-white"
      >
        Rangni o'zgartirish
      </button>
    </>
  );
};

export default Memo;
