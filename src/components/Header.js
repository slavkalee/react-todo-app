import moment from "moment";
import React from "react";

const Header = () => {
  const date = new Date();
  const dayNum = (date) => moment(date).format("DD");
  const month = (date) => moment(date).format("MMMM").slice(0, 3);
  const fullYear = (date) => moment(date).format("YYYY");
  const dayOfWeek = (date) => moment(date).format("dddd");

  return (
    <header>
      <div className="date">
        <div className="day-number">{dayNum(date)}</div>
        <div className="month-year">
          <div className="month">{month(date)}</div>
          <div className="full-year">{fullYear(date)}</div>
        </div>
      </div>
      <div className="day-of-week">{dayOfWeek(date)}</div>
    </header>
  );
};

export default Header;
