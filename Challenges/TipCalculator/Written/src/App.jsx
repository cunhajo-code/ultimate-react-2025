import { useState } from "react";
import "./styles.css";
// import { useState } from "react";

function App() {
  return (
    <div>
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
    <div>
      <BillInput
        billInput={billInput}
        setBillInput={setBillInput}
        setBillAmount={setBillAmount}
      >
        Enter the bill amount...
      </BillInput>
      <SelectPercentage percentage={pct1} onPctChange={setPct1}>
        How did guest 1 find the service?
      </SelectPercentage>
      <SelectPercentage percentage={pct2} onPctChange={setPct2}>
        How did guest 2 find the service?
      </SelectPercentage>
      <Output
        billAmount={billAmount}
        calcTipPct={calcTipPct}
        calcTip={calcTip}
        totalBillAmount={totalBillAmount}
      />
      <Reset />
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
    <div className="container">
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

function SelectPercentage({ children, percentage, onPctChange }) {
  return (
    <div>
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
  );
}

function Output({ billAmount, calcTipPct, calcTip, totalBillAmount }) {
  return (
    <h4>
      Your suggested total bill is ${billAmount ? billAmount.toFixed(2) : "-"} +{" "}
      {calcTip === null || calcTip === 0 ? "-" : calcTip.toFixed(2)} ({" "}
      {calcTipPct === null || calcTipPct === 0 ? "-" : calcTipPct} % Tip) = $
      {!totalBillAmount ? "-" : totalBillAmount.toFixed(2)}
    </h4>
  );
}

function Reset() {
  return <button>Reset</button>;
}

export default App;
