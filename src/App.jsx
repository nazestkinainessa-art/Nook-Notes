import { useState } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

function App() {
  let days = Array(42).fill(null);
  const weekDays = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth());;
  let day = new Date(year, month, 1);
  let startsFrom = day.getDay() === 0 ? 6 : day.getDay() - 1;
  let daysInMonth = new Date(year, month + 1, 0).getDate();
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const monthShort = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]
  let today = new Date();
  let [selectedDay, setSelectedDay] = useState(null);
  return (
    <div className="app-wrapper">
      <header className="header">Nook Notes</header>
      <main className="main">
        <div className="main__container">
          <section className="calendar">
            <div className="calendar__nav">
              <div className=""> 
              </div>
              <div className="">
                <h3></h3>
              </div> 
              <div className="calendar__month-selector">
                <LeftOutlined onClick={() => {
                  if (month === 0) {
                    setMonth(11);
                    setYear(year - 1);
                  }
                  else {
                    setMonth(month - 1);
                  }
                }}
                />
                <h2>{monthShort[month]} {year}</h2>
                <RightOutlined onClick={() => {
                  if (month === 11) {
                    setMonth(0);
                    setYear(year + 1)
                  }
                  else {
                    setMonth(month + 1);
                  }
                }}
                />
              </div>
              <div className="calendar__grid">
                {weekDays.map((day, index) => (
                  <div key={index} className="calendar__weekday">
                    {day}
                  </div>
                ))}
                {days.map((item, index) => {
                  let dayNumber = index - startsFrom + 1;
                  let isToday =
                  dayNumber === today.getDate() &&
                  month === today.getMonth() &&
                  year === today.getFullYear() ;
                  let isSelected = dayNumber === selectedDay;
                  let dayClass = "calendar__day"; 
                  if (isToday) dayClass += " calendar__day--today"; 
                  if (isSelected) dayClass += " calendar__day--selected";
                  return (
                    <div 
                    key={index} 
                    className={dayClass} 
                    onClick={() => {
                      if (dayNumber > 0 && dayNumber <= daysInMonth) {
                        setSelectedDay(dayNumber);
                      }
                    }}
                    >
                      {dayNumber > 0 && dayNumber <= daysInMonth ? dayNumber : ""}
                      </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
        <section className="main__task"></section>
      </main>
    </div>
  );
}

export default App;
