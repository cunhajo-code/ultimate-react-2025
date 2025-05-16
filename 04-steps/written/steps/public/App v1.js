import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  // using an in line anynomous function in the setter instead of explicitly setting by the current state value
  function handlePrevious() {
    if (step > 1) setStep((val) => val - 1);
  }

  function handleNext() {
    if (step < 3) setStep((val) => val + 1);
  }

  return (
    <>
      {/* again using an in line anynomous function in the setter instead of explicitly setting by the current state value 
          when setting to a fixed value, can be set directly
      */}
      <button className="close" onClick={() => setIsOpen((val) => !val)}>
        &times;
      </button>

      {isOpen && (
        // returns both as long as both are true, so when iSopen = true returns JSX,
        // otherwise retruns only false which is not rendered.
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}{" "}
          </p>
          <button
            style={{ backgroundColor: "#7950f2" }}
            onClick={handlePrevious}
          >
            Previous
          </button>
          <div className="buttons">
            <button style={{ backgroundColor: "#7950f2" }} onClick={handleNext}>
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
