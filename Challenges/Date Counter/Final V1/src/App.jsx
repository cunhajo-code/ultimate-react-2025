import { useState } from "react";
import "./styles.css";
import CounterControl from "./CounterControl";
import CalcDate from "./CalcDate";

export default function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(1);
  const [startDate, setStartDate] = useState(() => new Date());

  const sumDays = step * count;

  const resultDate = new Date(startDate);
  resultDate.setDate(startDate.getDate() + sumDays);

  const incrementStep = () => setStep((s) => s + 1);
  const decrementStep = () => setStep((s) => Math.max(1, s - 1));

  const incrementCount = () => setCount((c) => c + 1);
  const decrementCount = () => setCount((c) => c - 1);

  return (
    <div className="container mt-4">
      <CounterControl
        label="Step"
        value={step}
        onDecrement={decrementStep}
        onIncrement={incrementStep}
      />
      <CounterControl
        label="Count"
        value={count}
        onDecrement={decrementCount}
        onIncrement={incrementCount}
      />
      <CalcDate
        startDate={startDate}
        setStartDate={setStartDate}
        sumDays={sumDays}
        resultDate={resultDate}
      />
    </div>
  );
}

// function StepControl() {
//   function incrStep() {
//     setStep((s) => s + 1);
//   }

//   function decrStep() {
//     setStep((s) => s - 1);
//   }

//   return (
//     <div
//       class="d-flex justify-content-center controlSetRow"
//       id="stepController"
//     >
//       <button
//         class="btn btn-outline-primary ctrButton"
//         id="stepDecr"
//         onClick={decrStep}
//       >
//         -
//       </button>
//       <div class="mx-3 d-flex align-items-center">
//         <span class="fs-4 fw-semibold counter-label">Step: </span>
//         <span class="fs-4 fw-semibold counter-label" id="step-value">
//           {step}
//         </span>
//       </div>
//       <button
//         class="btn btn-outline-primary ctrButton"
//         id="stepIncr"
//         onClick={incrStep}
//       >
//         +
//       </button>
//     </div>
//   );
// }

// function Counter() {
//   const [count, setCount] = useState(1);

//   function incrCounter() {
//     setCount((c) => c + 1);
//   }

//   function decrCounter() {
//     setCount((c) => c - 1);
//   }

//   return (
//     <div
//       className="d-flex justify-content-center controlSetRow"
//       id="countController"
//     >
//       <button
//         className="btn btn-outline-primary ctrButton"
//         id="countDecr"
//         onClick={decrCounter}
//       >
//         -
//       </button>
//       <div className="mx-3 d-flex align-items-center">
//         <span className="fs-4 fw-semibold counter-unit">Count: </span>
//         <span className="fs-4 fw-semibold counter-label" id="count-value">
//           {count}
//         </span>
//       </div>
//       <button
//         className="btn btn-outline-primary ctrButton"
//         id="countIncr"
//         onClick={incrCounter}
//       >
//         +
//       </button>
//     </div>
//   );
// }

// function CalcDate() {
//   const today = new Date();
//   const isToday = startDate.toDateString() === today.toDateString(); // compare normalized date strings
//   const displayDate = isToday ? "Today" : startDate.toLocaleDateString();

//   const resultDate = new Date().toLocaleDateString();
//   const unitText = sumDays > 1 ? " days from " : " day form ";

//   return (
//     <div
//       className="d-flex justify-content-center controlSetRow"
//       id="dateResult"
//     >
//       <div className="mx-3 d-flex align-items-center">
//         <span id="selectedCnt" class="fs-4 fw-semibold counter-label"></span>
//         <span class="fs-4 fw-semibold counter-label">{`${sumDays} ${unitText} ${displayDate} is : ${resultDate}`}</span>
//         <span id="resultDate" class="fs-4 fw-semibold counter-label"></span>
//       </div>
//     </div>
//   );
// }
