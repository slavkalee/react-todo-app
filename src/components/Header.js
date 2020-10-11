import moment from "moment";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setDate(new Date());
    }, 1000);
  }, []);

  const dayNum = (date) => moment(date).format("DD");
  const month = (date) => moment(date).format("MMMM").slice(0, 3);
  const fullYear = (date) => moment(date).format("YYYY");
  const dayOfWeek = (date) => moment(date).format("dddd");
  const time = (date) => moment(date).format("HH : mm : ss");

  return (
    <header>
      <div className="overlay">
        <div className="left">
          <div className="header-title">Your Things</div>
          <div className="date">
            {`${month(date)} ${dayNum(date)}, ${fullYear(date)}`}
          </div>
        </div>

        <div className="right">
          <div className="time">{time(date)}</div>
          <div className="day-of-week">{dayOfWeek(date)}</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
