import React from "react";
import "./Todo.css";
import {useState} from "react";
import {useDispatch,useSelector} from "react-redux";
import { addTodo,deleteTodo,removeTodo } from "./actions";

const Todo  = () => 
{
    const list = useSelector((state)=>state.todoReducers.list);
    const [inputData, setInputData] = useState('');
    const dispatch = useDispatch();
    return ( 
        <>
        <div className="main-div">
            <div className="child-div">
                <figure>
                <figCaption>Add your task here</figCaption>
                </figure>

                <div className="addItems">
                    <input type="text" placeholder="Add Items..." value={inputData} onChange={(event)=> setInputData(event.target.value)}></input>
                    <span>
                        <button onClick = {()=>dispatch(addTodo(inputData),setInputData(''))}>+</button>
                    </span>
                </div>

                <div className="showItems">
                  {list.map((elem)=>
                  {
                      return (
                      <div class="eachItem" key={elem.id}>
                          <h1>{elem.data}</h1>
                          <span><button onClick={()=>dispatch(deleteTodo(elem.id))}>Del</button></span>
                      </div>
                      )
                  })}
                </div>

                <div>
                    <button className="btn-effect04"onClick= {()=>dispatch(removeTodo(removeTodo()))}>clear All</button>
                </div>

            </div>

        </div>
        </>
    )
}

export default Todo;