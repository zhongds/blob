import { Component, h } from 'preact'
import { fetchToken, fetchTodolist } from './services/todo'

function getHeader(AccessToken) {
  return {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${AccessToken}`,
  }
}

export default class TodoList extends Component {
  state = { todos: [], text: '' };

  componentDidMount() {
    fetchToken().then((res) => {
      const accessToken = res.access_token
      console.log(res)
      fetchTodolist({
        headers: getHeader(accessToken)
      })
    })
  }

  setText = e => {
    this.setState({ text: e.target.value });
  };

  addTodo = () => {
    let { todos, text } = this.state;
    todos = todos.concat({ text });
    this.setState({ todos, text: '' });
  };

  render({ }, { todos, text }) {
    return (
      <form onSubmit={this.addTodo} action="javascript:">
        <input value={text} onInput={this.setText} />
        <button type="submit">Add</button>
        <ul>
          {todos.map(todo => (
            <li>{todo.text}</li>
          ))}
        </ul>
      </form>
    );
  }
}
