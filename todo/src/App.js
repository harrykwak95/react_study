import { useState } from "react";

function App() {
  const [todo, setTodo] = useState();
  const [todoList, setTodoList] = useState([]);

  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();

    if(todo===""){
      return;
    }
    setTodoList(newTodo => [...todoList, todo])
    setTodo("");
  }
  console.log(todoList);
  return (
    <div className="App">
      <h1>TO DO LIST : {todoList.length}</h1>
      <form onSubmit={onSubmit}>
        <input value={todo} onChange={onChange}/>
        <button>submit</button>
      </form>
      <div id="list">
        {todoList.map((todo)=><p>{todo.toUpperCase()}</p>)}
      </div>
    </div>
  );
}

export default App;
