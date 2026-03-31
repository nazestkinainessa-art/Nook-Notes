function App() {
  let days = Array(42).fill(null);
  const weekDays = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  let year = 2026;
  let month = 2;
  let day = new Date(year, month, 1);
  let startsFrom = day.getDay() === 0 ? 6 : day.getDay() - 1;
  let daysInMonth = new Date(year, month + 1, 0).getDate();
  return (
    <div className="app-wrapper">
      <header className="header">Nook Notes</header>
      <main className="main">
        <div className="main__container">
          <section className="main__calendar">
            {weekDays.map((day, index) => (
              <div key={index} className="weekday">
                {day}
              </div>
            ))}
            {days.map((item, index) => {
              let dayNumber = index - startsFrom + 1;
              return (
                <div key={index} className="calendar">
                  {dayNumber > 0 && dayNumber <= daysInMonth ? dayNumber : ""}
                </div>
              );
            })}
          </section>
        </div>
        <section className="main__task">
          <p>...</p>
        </section>
      </main>
    </div>
  );
}

export default App;
