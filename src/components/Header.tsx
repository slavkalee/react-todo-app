import React, { useEffect, useState } from 'react';
import moment from 'moment';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

interface HeaderProps {
  procent: number
}

const Header: React.FC<HeaderProps> = ({ procent }) => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setDate(new Date());
    }, 1000);
  }, []);

  const dayNum = (date: Date) => moment(date).format('DD');
  const month = (date: Date) => moment(date).format('MMMM').slice(0, 3);
  const fullYear = (date: Date) => moment(date).format('YYYY');
  const dayOfWeek = (date: Date) => moment(date).format('dddd');
  const time = (date: Date) => moment(date).format('HH : mm : ss');

  return (
    <header>
      <div className="overlay">
        <div className="left">
          <div className="header-title">
            Your
            <br /> Things
          </div>
          <div className="date">
            {`${month(date)} ${dayNum(date)}, ${fullYear(date)}`}
          </div>
        </div>

        <div className="right">
          <div className="top">
            <div className="time">{time(date)}</div>
            <div className="day-of-week">{dayOfWeek(date)}</div>
          </div>
          <div className="progress">
            <div className="progress-bar">
              <CircularProgressbar
                value={procent}
                strokeWidth={10}
                styles={buildStyles({
                  strokeLinecap: 'butt',
                  pathColor: 'rgb(0, 243, 252)',
                  trailColor: '#fff',
                })}
              />
            </div>
            <div className="progress-text">
              {!procent ? '0' : procent}% done
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
