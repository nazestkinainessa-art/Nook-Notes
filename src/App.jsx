function App (){
  let days = Array(42).fill(null);
  const weekDays = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
  return(
  <div className = "app-wrapper"> 
  <header className="header">Nook Notes</header>
  <main className="main">
    <div className="main__container">
      <section className="main__calendar"> 
        {weekDays.map((day, index) => (
          <div key={index} className="weekday">
            {day}
          </div>
        ))}
        {days.map((item, index) => (
          <div kay={index} className="calendar">
            {index +1}
          </div>
        )) }
      </section>
    </div>
      <section className="main__task"> <p>...</p> </section>
  </main>
  </div>
  )
}

export default App;