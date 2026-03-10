import { data } from "react-router"

const name = 'boards'

export const getData = ()=>{
    const data = localStorage.getItem(name)
    return data ? JSON.parse(data) : {boards:[], lists:[], cards:[]}
}

export const setData=(data)=>{
    localStorage.setItem(name, JSON.stringify(data));
}

export function createBoard(title){

    const data = getData();
    const newBoard = {
        id: crypto.randomUUID(),
        title,
        createdAt: new Date().toISOString()
    }

    data.boards.push(newBoard)
    setData(data)
    return newBoard

}