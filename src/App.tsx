import React from 'react';
import './App.css';
import Todo from './Todo';
import { observer } from "mobx-react-lite"

interface Props{
  todo: Todo;
}
const TodoView = observer((props: Props) => (
  <li>
    <input
      type="checkbox"
      checked={props.todo.finished}
      onClick={() => props.todo.toggle()}
    />
    {`${props.todo.title}: ${props.todo.finished}`}
  </li>
));
function App() {
  return <TodoView todo={new Todo('Hello World')}/>;
}

export default App;
