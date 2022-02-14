import React from "react";
import './header.css';
import { useList } from "../context/List";

function Header() {

    const {setModal} = useList();

    return (
        <div className="header">
            <h2>Tarefas</h2>
            <button onClick={() => setModal(true)}>+</button>
        </div>
    )
}

export default Header