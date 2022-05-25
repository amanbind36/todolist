import React from "react";
import { useState } from "react";
import styles from "./Todo.module.css";

const TodoItem=({todo})=>{
    const [iscompleted,setIsCompleted]=useState(todo.iscompleted);
    return (
        
        <div className={styles.todo} key={todo.id}>
        <input type="checkbox" 
        checked={iscompleted}
        onChange={(e)=>{
            setIsCompleted(e.target.checked)
        }} />
        <div className={iscompleted ? styles.striked : ""}>{todo.value}</div>
        </div>
    )
}

export default TodoItem;