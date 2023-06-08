import './App.css';
import {useState} from "react";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if(todo !== ""){
      setTodos([...todos, todo]);
      setTodo("");
    }
  };

  const deleteTodo = (text) => {
    const newTodos = todos.filter((todo) => {
      return todo !== text;
    });
    setTodos(newTodos);
  };

  return(
    <div className="title">
    <h1> React To-do App </h1>

    <div className="input-wrapper">
       <input type="text" 
              name="todo" 
              value={todo}
              placeholder="Create a new to-do"
              onChange={(e)=> {
                setTodo(e.target.value);
              }}
        ></input>
       <button className="add-button" onClick={addTodo}>Add</button> 

    </div>

    {todos?.length > 0 ? (
      <ul className="todolist">
        {todos.map((todo, index) => (
        <div className="todo">
          <li key={index}>{todo}</li>
          <button className="delete-button" onClick={() => {
            deleteTodo(todo);
          }}>Delete</button>
        </div>
        ))}
      </ul>
    ) : (
      <div className="empty"><p>No task found</p></div>

    )}
    </div>
  );
}

export default App;
