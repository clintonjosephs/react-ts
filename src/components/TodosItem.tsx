import React from 'react'
import classes from './css/TodoItem.module.css';

type Item = {
  id: string;
  text: string;
};

const TodosItem: React.FC<{ item: Item, onRemoveTodo: (id: string) => void}> = (props) => {
  return (
    <li className={classes.item} onClick={() => props.onRemoveTodo(props.item.id)}>{props.item.text}</li>
  )
}

export default TodosItem