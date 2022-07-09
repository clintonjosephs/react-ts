import React from 'react'

const TodosItem: React.FC<{ item: string }> = (props) => {
  return (
    <li>{props.item}</li>
  )
}

export default TodosItem