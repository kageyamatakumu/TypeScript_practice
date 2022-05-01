import axios from 'axios';
import { useState } from 'react';
import './App.css';
import { User } from './User';
import { TodoType } from './types/todo'
import { Text } from './Text'
import { UserProfile } from './UserProfile';
import { User2 } from './types/user';

const user: User2 = {
  name: 'かげ',
  hobbies: ['プログラミング', '旅行'],
}

function App() {
  const [todos, setTodos] = useState<Array<TodoType >>([])
  const onClickFetchData = () => {
    axios.get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((result) => {
        setTodos(result.data);
      });
  };
  return (
    <div className="App">
      <UserProfile user={user}/>
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo) => (
        <User key={todo.id} title={todo.title} userId={todo.userId} completed={todo.completed}/>
      ))}
      <Text color={"red"} fontSize={"20px"}/>
    </div>
  );
}

export default App;
