import React, { useEffect } from "react";
import './modal.css';
import { useItems, useList, useText } from "../context/List";

function Modal() {

    const {modal, setModal} = useList();
    const {text, setText} = useText();
    const {items, setItems} = useItems();

    function addItems(){
        if(text){
            const taskDetails = {
                id: Math.floor(Math.random() * 1000),
                name: text,
                isCompleted: false,
            }
            setItems([...items, taskDetails]);
            setText('');
            setModal(false);
        }   
    }
    
    useEffect(() => {
        let savedItems = JSON.parse(localStorage.getItem("tasks"))
        if (savedItems) {
            setItems(savedItems)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(items))
    }, [items])

    return(
        <div className={modal ? "modal-bg" : "modalOff"}>
            <div className="modal">
                <button onClick={() => setModal(false)}>X</button>
                <div className="modal-input">
                    <input type="text" onChange={(e) => setText(e.target.value)} value={text}></input>
                    <button onClick={addItems}>+</button>
                </div>
            </div>
        </div>
    )
}

export default Modal