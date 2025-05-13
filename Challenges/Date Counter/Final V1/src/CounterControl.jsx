function CounterControl({ label, value, onDecrement, onIncrement }) {
  return (
    <div className="controlSetRow d-flex justify-content-center">
      <button
        className="btn btn-outline-primary ctrButton"
        onClick={onDecrement}
      >
        -
      </button>
      <div className="mx-3 d-flex align-items-center justify-content-between counter-label fs-4 fw-semibold counterText">
        <span style={{ minWidth: "100px", textAlign: "left" }}>{label}:</span>
        <span style={{ minWidth: "50px", textAlign: "right" }}>{value}</span>
      </div>
      <button
        className="btn btn-outline-primary ctrButton"
        onClick={onIncrement}
      >
        +
      </button>
    </div>
  );
}

export default CounterControl;
