
import './App.css';
import { useCallback, useEffect, useState } from 'react';
import Textfield from '@atlaskit/textfield';
import Button from '@atlaskit/button';
import { v1} from "uuid";
import React from 'react';
import TodoLists from './components/TodoList';
import Header from './components/Header';
import Checkbox from '@atlaskit/checkbox';
import RemoveIcon from '@atlaskit/icon/glyph/trash';


const TODO_APP_STORAGE_KEY = 'TODO_APP'

function App() {
  const [TodoList, setTodoList] = useState([]);
  const [TextInput, setTextInput] = useState("");
  const [Check,setCheck]=useState(false);

  useEffect(()=>{
    const storagedTodoList = localStorage.getItem(TODO_APP_STORAGE_KEY);
    if(storagedTodoList){
      setTodoList(JSON.parse(storagedTodoList));
    }
  },[])

  useEffect(()=>{
    localStorage.setItem(TODO_APP_STORAGE_KEY,JSON.stringify(TodoList))
  },[TodoList])


  const HandleTextInput = useCallback((e) => {
    setTextInput(e.target.value);
  }, []);

  const HandleButtonClicked = useCallback((e) => {
    setTodoList([
      { id: v1(), name: TextInput, isComplete: false, isChecked: false },
      ...TodoList,
    ]);
    setTextInput("");

  }, [TextInput, TodoList]);


  const HandleOnKeyUp = useCallback((e) => {
    if (e.keyCode === 13) {
      setTodoList([
        { id: v1(), name: TextInput, isComplete: false, isChecked: false },
        ...TodoList,
      ]);
      setTextInput("");
    }

  }, [TextInput, TodoList]);

  const HandleCheckAll = useCallback((e) => {
    console.log('log');
    let checked = e.target.checked;
    setTodoList((prevState) =>
      prevState.map(todoItem => {if(checked===true){
        setCheck(true); 
        return ( { ...todoItem, isChecked: checked, isComplete:true })
      }else if(checked===false){
        setCheck(false); 
        return ( { ...todoItem, isChecked: checked, isComplete:false } )
      }
          
      }
      )
    );
    
  }, []);

  const HandleCheckChild = useCallback((id) => {
    console.log('log');
    setTodoList((prevState) =>
      prevState.map(todoItem => {
        if (todoItem.isChecked === false) {
          return (todoItem.id === id ? { ...todoItem, isChecked: true, isComplete: true } : todoItem)
        } else {
          return (todoItem.id === id ? { ...todoItem, isChecked: false, isComplete: false } : todoItem)
        }
      }
      )
    );
  }, []);

  const HandleRemoveClick = useCallback((TodoItem)=>{
    console.log('log');
    if(TodoItem.isChecked){
      TodoList.splice(TodoList.indexOf(TodoItem),1);
     } 
     setTodoList([...TodoList]);
    }
    
  ,[TodoList])


  const HandleRemoveChecked = useCallback(()=>{
    console.log('check');
    TodoList.map((todoItem)=>{
      if(todoItem.isComplete===true){
        TodoList.splice(TodoList.indexOf(todoItem),1);
        HandleRemoveChecked();
      }
    })
    setTodoList([...TodoList]);
    setCheck(false);  
    // setTodoList([...TodoList]);
  },[TodoList])

  return (
    <div className="App scrollbar">
      <Header />
      <div className="input-container">
        <Checkbox isChecked={Check} onChange={HandleCheckAll} size="large" name="parent" />
        <span className="remove-icon" 
            onClick={()=>HandleRemoveChecked()}>
       <RemoveIcon 
      primary='#4fff4f' 
      cursor="pointer" 
      size="large" 
      />
      </span>
        <Textfield placeholder="Nhập Todo"
          value={TextInput}
          onChange={HandleTextInput}
          onKeyUp={HandleOnKeyUp}
          elemAfterInput={
            <Button onClick={HandleButtonClicked}
              isDisabled={!TextInput}
              appearance='primary'
              type='submit'>
              Thêm vào
            </Button>}
        />
      </div>

      <TodoLists TodoList={TodoList}
        HandleCheckChild={HandleCheckChild}
        HandleRemoveClick={HandleRemoveClick}
        HandleRemoveChecked={HandleRemoveChecked} />
    </div>
  );
}

export default App;
