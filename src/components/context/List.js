import React, { createContext, useContext, useState } from "react";

const ListContext = createContext();

export default function ListProvider( {children} ) {
    const [modal, setModal] = useState(false);
    const [text, setText] = useState('');
    const [items, setItems] = useState([]);

    return (
        <ListContext.Provider value={{modal, setModal, text, setText, items, setItems}}>
            {children}
        </ListContext.Provider>
    )
}

export function useList() {
    const context = useContext(ListContext);
    const {modal, setModal} = context;
    return {modal, setModal};
}

export function useText() {
    const context = useContext(ListContext);
    const {text, setText} = context;
    return {text, setText};
}

export function useItems() {
    const context = useContext(ListContext);
    const {items, setItems} = context;
    return {items, setItems};
}