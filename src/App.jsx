import tasks from "../tasks";
console.log(tasks);

function App() {
  const inBack = tasks.filter((curItem) => curItem.state === "in_progess" || curItem.state === "backlog");
  console.log(inBack);
  const completed = tasks.filter((curItem) => curItem.state === "completed");
  console.log(completed);
  

  return (
    <>
      <h1>Task List</h1>
    </>
  )
}

export default App
