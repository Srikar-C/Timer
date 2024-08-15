import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// import React, { useState, useEffect } from "react";

// const CountdownTimer = () => {
//   const [inputValue, setInputValue] = useState(0);
//   const [countdown, setCountdown] = useState(null);
//   const [isCounting, setIsCounting] = useState(false);

//   useEffect(() => {
//     let timer;
//     if (isCounting && countdown > 0) {
//       timer = setTimeout(() => {
//         setCountdown(countdown - 1);
//       }, 1000);
//     }
//     return () => clearTimeout(timer);
//   }, [countdown, isCounting]);

//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   const startCountdown = () => {
//     setCountdown(Number(inputValue));
//     setIsCounting(true);
//   };

//   return (
//     <div>
//       {!isCounting ? (
//         <div>
//           <input
//             type="number"
//             value={inputValue}
//             onChange={handleInputChange}
//             placeholder="Enter a number"
//           />
//           <button onClick={startCountdown}>Start Countdown</button>
//         </div>
//       ) : (
//         <div>
//           <h1>{countdown}</h1>
//           {countdown === 0 && <h2>Time's up!</h2>}
//         </div>
//       )}
//     </div>
//   );
// };
