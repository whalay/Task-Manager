import React from 'react'
import TaskItem from './TaskItem'

const Task = (props) => {
    return (
        <div className=" container w-[80%] mx-auto  m-10">
            {props.taskList.map((task) => {
                return (
                    <TaskItem key={task.id} id={task.id} onDelete={props.onDelete}>
                        {task.text}
                    </TaskItem>
                )



            }
            )}
        </div>)
}

export default Task