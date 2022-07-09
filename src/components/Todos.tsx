import Todo from '../models/todo';
import TodosItem from './TodosItem';
import classes from './css/Todos.module.css';

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodosItem item={item.text} key={item.id} />
      ))}
    </ul>
  );
};

export default Todos;
