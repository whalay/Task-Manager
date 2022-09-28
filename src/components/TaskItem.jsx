import React from 'react'
import { MdDelete } from "react-icons/md";


const TaskItem = (props) => {
    const deleteHandler =() => {
        props.onDelete(props.id)
    }
    return (
        <li className='mx-auto bg-white m-4 p-5 list-none flex justify-between text-lg'>
            {props.children}
            <MdDelete onClick={deleteHandler} size='20px'/>
            
        </li>
    )
}

export default TaskItem