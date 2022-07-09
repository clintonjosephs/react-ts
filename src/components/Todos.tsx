import Todo from '../models/todo';

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map(({ text, id }) => (
        <li key={id}>{text}</li>
      ))}
    </ul>
  );
};

export default Todos;
