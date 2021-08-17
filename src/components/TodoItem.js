
import React from 'react';

import Button from '@atlaskit/button';
import styled,{ css } from 'styled-components';
import Checkbox  from '@atlaskit/checkbox';
import RemoveIcon from '@atlaskit/icon/glyph/trash';

const ButtonStyled = styled(Button)`
  margin-top: 5px;
  text-align:left;

  &,
  &:hover{
  ${(p)=>
    p.isCompleted && css`
    text-decoration: line-through;
    color:#555555;    
  `}
  }
  &:hover{
    .remove-icon{
      display: inline-block;
    }
  }
  .remove-icon{
    display:none;
    border-radius:3px;
  }



`
 
function TodoItem({key,todoItem, HandleCheckChild, HandleRemoveClick, HandleRemoveChecked}) {

  
  return ( <div className="todoItem">
      <Checkbox size="large"  onChange={()=>HandleCheckChild(todoItem.id)} isChecked={todoItem.isChecked}  />
      <ButtonStyled onChange={()=>HandleRemoveChecked()} isCompleted={todoItem.isComplete} shouldFitContainer iconAfter={
      <span className="remove-icon" 
            onClick={()=>HandleRemoveClick(todoItem)}>
       <RemoveIcon 
      cursor="pointer" 
      size="large" 
      />
      </span>} >
        {todoItem.name}</ButtonStyled>
     </div>
  );
}

export default TodoItem;