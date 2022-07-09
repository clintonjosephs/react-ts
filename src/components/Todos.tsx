import Todo from '../models/todo';
import TodosItem from './TodosItem';
import classes from './css/Todos.module.css';

const Todos: React.FC<{ items: Todo[], onRemoveTodo: (id: string) => void }> = (props) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodosItem item={item} key={item.id} onRemoveTodo={props.onRemoveTodo}/>
      ))}
    </ul>
  );
};

export default Todos;
