import React from 'react';
import Todo from './Todo';
import TodoList from "./TodoList";
import TodoForm from "./Form";



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

  handleAdd = (task) => {
    //set state
    // change todos
    //make a copy of todos
    //add a new todo to the end
    const newTodo = {
      task: task,
      id: Date.now(),
      completed: false
    }
    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTodo]
    });
  }

  handleClear = () => {
    //set state
    //loop through all todos
    //remove all todos that have completed === true
    //save filtered todos to state

    this.setState({
      ...this.state,
      todos: this.state.todos.filter(todo => {
        return (todo.completed === false);
      })
    });
  }

  handleToggle = (clickedId) => {
    //set state
    // change todos
    // find the todo we clicked on
    // flip the value of completed for that todo
    // keep all other todos the same

    this.setState({
      ...this.state,
      todos: this.state.todos.map(todo => {
        if(todo.id === clickedId){
          return {
            ...todo,
            completed : !todo.completed
          }
        }

        return todo;
      })
    });
  }

  render() {
    const { todos } = this.state;
    console.log(todos);
    return (
      <div>
        <h1>Todos</h1>
        <TodoList handleToggle={this.handleToggle} todos={todos} />
        <TodoForm handleAdd={this.handleAdd} />
        <button onClick={this.handleClear}>Clear</button>
      </div>
    )
  }
}
