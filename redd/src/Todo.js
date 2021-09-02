import React from "react";
import "./Todo.css";
import {useState} from "react";
import {useDispatch} from "react-redux";
import { addTodo,deleteTodo,removeTodo } from "./actions";

const Todo  = () => 
{
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
                    <input type="text" placeholder="Add Items..." value={inputData} onChange={(event)=> setInputData(event.target.value)}></input><span><button onClick = {()=>dispatch(addTodo(inputData))}>+</button></span>
                </div>

            </div>

        </div>
        </>
    )
}

export default Todo;