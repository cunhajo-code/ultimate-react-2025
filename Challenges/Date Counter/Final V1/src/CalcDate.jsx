function CalcDate({ startDate, setStartDate, sumDays, resultDate }) {
  const today = new Date();
  const isToday = startDate.toDateString() === today.toDateString();
  const displayDate = isToday ? "Today" : startDate.toLocaleDateString();

  const dayLabel = sumDays === 1 ? "day" : "days";

  return (
    <div className="mt-4 text-center">
      <span>
        <strong>
          {`${sumDays} ${dayLabel} from ${displayDate} is = ${resultDate.toLocaleDateString()}`}{" "}
        </strong>
      </span>
    </div>
  );
}

export default CalcDate;
