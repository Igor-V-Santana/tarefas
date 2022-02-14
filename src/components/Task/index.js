import React from "react";
import { useItems } from "../context/List";
import Modal from "../Modal";
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';
import './task.css';

function Task() {

    const {items, setItems} = useItems();

    function deleteTask(id){
        setItems(items.filter((t) => t.id != id))
    }

    function finishTask(id){
        const element = items.findIndex(elem => elem.id == id);
        const newTasks = [...items];
        newTasks[element] = {
            ...newTasks[element],
            isCompleted : true,
        }
        setItems(newTasks);
    }

    return(
        <div className="task">
            <ul>
                {items.map(item => (
                    <li key={item.id} className={item.isCompleted ? "completed" : ""}>
                        {item.name}
                        <div className="taskBtn">
                            <button onClick={() => finishTask(item.id)}> <AiOutlineCheck /> </button>
                            <button onClick={() => deleteTask(item.id)}> <AiOutlineClose /> </button>
                        </div>
                    </li>
                ))}
            </ul>
            <Modal />
        </div>
    )
}

export default Task