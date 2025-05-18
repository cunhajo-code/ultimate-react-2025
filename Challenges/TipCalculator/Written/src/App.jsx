import { useState } from "react";
import "./styles.css";
// import { useState } from "react";

function App() {
  return (
    <div className="app-container">
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [billInput, setBillInput] = useState("");
  const [billAmount, setBillAmount] = useState(null);
  const [pct1, setPct1] = useState("");
  const [pct2, setPct2] = useState("");

  const calcTipPct = (pct1 + pct2) / 2;
  const calcTip = billAmount * (calcTipPct / 100);
  const totalBillAmount = billAmount + calcTip;

  return (
    <div className="calculator">
      <BillInput
        billInput={billInput}
        setBillInput={setBillInput}
        setBillAmount={setBillAmount}
      >
        Enter the bill amount...
      </BillInput>
      <SelectPercentage
        percentage={pct1}
        onPctChange={setPct1}
        themeClass="odd "
      >
        How did guest 1 find the service?
      </SelectPercentage>
      <SelectPercentage
        percentage={pct2}
        onPctChange={setPct2}
        themeClass="even "
      >
        How did guest 2 find the service?
      </SelectPercentage>
      <Output
        billAmount={billAmount}
        calcTipPct={calcTipPct}
        calcTip={calcTip}
        totalBillAmount={totalBillAmount}
      />
      <Reset
        setBillInput={setBillInput}
        setBillAmount={setBillAmount}
        setPct1={setPct1}
        setPct2={setPct2}
        promptText="Are you sure you want to reset the tip calculator...?"
      />
    </div>
  );
}

function BillInput({ billInput, setBillInput, setBillAmount, children }) {
  function isValidCurrencyInput(value) {
    return /^\d*\.?\d{0,2}$/.test(value);
  }

  function handleBillBlur() {
    if (isValidCurrencyInput(billInput)) {
      const num = Number(billInput);

      if (num > 0) {
        setBillAmount(num);
        setBillInput(num.toFixed(2));
      } else {
        setBillAmount(null);
        setBillInput("");
      }
    } else {
      setBillAmount(null);
      setBillInput("");
    }
  }

  return (
    <div className="section input-section">
      <div className="input-row">
        <label htmlFor="bill">How much was the bill?</label>
        <input
          type="text"
          inputMode="decimal"
          value={billInput}
          onChange={(e) => setBillInput(e.target.value)}
          onBlur={handleBillBlur}
          placeholder={children}
        />
      </div>
    </div>
  );
}

function SelectPercentage({ children, percentage, onPctChange, themeClass }) {
  return (
    <div className={`section select-section ${themeClass}`}>
      <div className="select-row">
        <label>{children}</label>
        <select
          value={percentage}
          onChange={(e) => onPctChange(Number(e.target.value))}
        >
          <option value="" disabled hidden>
            -- Select tip percentage --
          </option>
          <option value={0}>Dissatisfied (0%)</option>
          <option value={5}>Okay(5%)</option>
          <option value={10}>Good(10%)</option>
          <option value={15}>Above Average(15%)</option>
          <option value={20}>Excellent (20%)</option>
        </select>
      </div>
    </div>
  );
}

function Output({ billAmount, calcTipPct, calcTip, totalBillAmount }) {
  return (
    <div className="section output-section">
      <h4 className="output-text">
        Your suggested total bill is{" "}
        <span className="num">${billAmount ? billAmount.toFixed(2) : "-"}</span>{" "}
        +{" "}
        <span className="num">
          {calcTip === null || calcTip === 0 ? "-" : calcTip.toFixed(2)}
        </span>
        {" ("}
        <span className="num">
          {calcTipPct === null || calcTipPct === 0 ? "-" : calcTipPct}
        </span>{" "}
        % Tip) = $
        <span className="num total">
          {!totalBillAmount ? "-" : totalBillAmount.toFixed(2)}
        </span>
      </h4>
    </div>
  );
}

function Reset({ setBillInput, setBillAmount, setPct1, setPct2, promptText }) {
  function resetCalculator() {
    if (window.confirm(promptText)) {
      setBillInput("");
      setBillAmount(null);
      setPct1("");
      setPct2("");
    }
  }

  return (
    <div className="reset-section">
      <button id="reset" onClick={resetCalculator}>
        Reset
      </button>
    </div>
  );
}

export default App;
