 
export function TaskPage(props) {
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const date = new Date(props.year, props.month, props.day);
  const dayIndex = date.getDay();
  return (
    <div>
      <h1>{dayNames[dayIndex]}, {props.monthList[props.month]} {props.day}</h1>
      <button onClick={props.goBack}>Назад</button>
    </div>
  );
}

