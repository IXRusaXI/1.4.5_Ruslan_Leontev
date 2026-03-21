import style from './App.module.scss';
import { TodoList } from './../widgets/TodoList/TodoList.tsx';

const App = () => {
  return (
    <div className={style.container}>
      <TodoList />
    </div>
  );
};

export default App;
