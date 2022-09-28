import React, { useState } from 'react'

const TaskForm = (props) => {
    const [enteredTask, setEnteredTask] = useState('');
    const [IsValid, setIsvalid] = useState(true);

    const taskInputHandler = (e) => {
        if (e.target.value.trim().length > 0) {
            setIsvalid(true);
        } 
        setEnteredTask(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if (enteredTask.trim().length === 0) {
            setIsvalid(false);
            return;
        } 

        props.onAddTask(enteredTask);
        console.log(enteredTask);
        setEnteredTask('');
    }

    const clearAllTask = () => {
        props.onClear();
    }


    return (
        <div className='container mx-auto '>
            <form action="" onSubmit={submitHandler} className='block text-center'>

                <input type="text" onChange={taskInputHandler} value={enteredTask} placeholder='Add Task' className={`w-[80%] p-3 m-3 bg-slate-300 border outline-none  ${!IsValid ? 'border-red-600' : 'border-neutral-600' }`} />

                <div className='flex items-center justify-center gap-10'>
                    <button type='submit' className='bg-blue-700 p-2  text-white font-medium'>Create Task</button>
                    <button onClick={clearAllTask} className='bg-red-500 p-2  text-white font-medium'>Clear Task</button>
                </div>
            </form>
        </div>
    )
}

export default TaskForm