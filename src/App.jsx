import { Routes, Route, Link } from "react-router-dom";
import State from "./example/State";
import Effect from "./example/Effect";
import Useref from "./example/UseRef";
import Memo from "./example/Memo";
import Callback from "./example/Callback";

export default function App() {
  return (
    <>
      <div className="bg-gray-50">
      <Link to='/'  >
        <button className="p-2 bg-black rounded-lg text-white">
          Home
        </button>
        </Link>
        <Link to='/effect'  >
        <button className="p-2 bg-black rounded-lg text-white">
          UseEffect
        </button>
        </Link>
        <Link to='/useref'>
        <button className="p-2 bg-black rounded-lg text-white">
          UseRef
        </button>
        </Link>

        <Link to='/usememo'>
        <button className="p-2 bg-black rounded-lg text-white">
          UseMemo
        </button>
        </Link>
        <Link to='/callback'>
        <button className="p-2 bg-black rounded-lg text-white">
        Callback
        </button>
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<State />} />
        <Route path="/effect" element={<Effect />} />
        <Route path="/useref" element={<Useref />} />
        <Route path="/usememo" element={<Memo />} />
        <Route path="/callback" element={<Callback/>} />
      </Routes>
    </>
  );
}
