import React,{useState} from 'react';

const Callback = () => {

    const [count, setCount] = useState(0);
    const [colored, setColored] = useState(false);

    const styles = {backgroundColor: colored ? 'red' : 'white'};

  return (
    <>
       <h1 style={styles} >{count}</h1>
      <button
        onClick={() => setCount((prev) => prev + 1)}
        className="p-2 bg-green-600 rounded-lg text-white"
      >
        Qo'shish
      </button>
      <button
        onClick={() => setColored((prev) => prev = !prev)}
        className="p-2 bg-yellow-600 rounded-lg text-white"
      >
        Rangni o'zgartirish
      </button>

      
    </>
  );
}

export default Callback;
