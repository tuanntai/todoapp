import React from 'react';
import TodoItem from './TodoItem.js'

// import { Container } from './styles';

function TodoList({TodoList, HandleCheckChild, HandleRemoveClick, HandleRemoveChecked}) {
  return (<div>
      {
          TodoList.map(todoItem=>
          <TodoItem 
          HandleCheckChild={HandleCheckChild}
          HandleRemoveClick={HandleRemoveClick}
          HandleRemoveChecked={HandleRemoveChecked}
          todoItem={todoItem}/>)
      }
  </div>);
}

export default TodoList;