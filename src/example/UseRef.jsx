import { useEffect, useState, useRef } from "react";

const Useref = () => {
  const [value, setValue] = useState("Hello");
  const renderCount = useRef(0);
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  useEffect(() => {
    renderCount.current++;
  }, [value]);

  return (
    <div className="container mx-auto flex justify-center bg-slate-500 mt-10">
      <div>
        <h1 onClick={handleClick} className="text-emerald-500 mb-5 text-2xl">
          Renders {renderCount.current}
        </h1>
        
        <input
          ref={inputRef}
          type="text"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
      </div>
    </div>
  );
};

export default Useref;
