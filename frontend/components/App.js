import React from 'react';
import Todo from './Todo';
import TodoList from "./TodoList";



export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: "Organize Garage",
          id: 1528817077286,
          completed: false
        },
        {
          task: "Bake Cookies",
          id:1528817084358,
          completed: false
        }
      ]
    }
  }
  render() {
    const { todos } = this.state;
    console.log(todos);
    return (
      <div>
        <h1>Todos</h1>
        
        <TodoList todos={todos} />

        <form>
          <input/>
          <button>Add</button>
        </form>

        <button>Clear</button>
      </div>
    )
  }
}
