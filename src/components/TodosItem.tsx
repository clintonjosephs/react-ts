import React from 'react'
import classes from './css/TodoItem.module.css';

const TodosItem: React.FC<{ item: string }> = (props) => {
  return (
    <li className={classes.item}>{props.item}</li>
  )
}

export default TodosItem