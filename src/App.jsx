import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState();
  const [input, setInput] = useState();
  const [bool, setBool] = useState(false);

  useEffect(() => {
    let timer;
    if (bool && count > 0) {
      timer = setTimeout(() => {
        setCount(count - 1);
      }, 1500);
    }
    return () => clearTimeout(timer);
  }, [count, bool]);

  function handleSubmit() {
    setCount(Number(input));
    setBool(true);
  }

  return (
    <div className="bg-[#000] h-screen w-screen main">
      {!bool ? (
        <div className="input flex p-3 flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-white gap-3">
          <input
            type="number"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="outline-none border-none bg-slate-600 p-3 text-white"
            placeholder="Enter value"
          />
          <button
            type="submit"
            className="p-2 border-2 border-white bg-black text-white rounded-lg hover:bg-white hover:border-black hover:text-black"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      ) : (
        <div className="relative time h-screen w-screen flex justify-center items-center overflow-hidden">
          {/* Rotating Line */}
          <div
            className={`${
              count === 0 ? "" : "line"
            } rounded-[50%] z-[-1] md:z-[1] h-[500px] md:h-[300px] `}
          ></div>

          {/* Rotating Countdown Timer */}
          <div
            className={`timer text-white text-6xl h-[60%] md:h-screen w-[90%] md:w-[50%] rounded-[50%] text-center justify-center items-center absolute flex top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
          >
            {count !== 0 ? (
              <h1>{count}</h1>
            ) : (
              count === 0 && <h2 className="text-xl md:text-6xl">Time's up!</h2>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
