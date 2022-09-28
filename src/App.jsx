import React, { useState } from 'react';

import Header from "./components/Header"
import Task from "./components/Task"
import TaskForm from "./components/TaskForm"
import Card from './components/Card';



function App() {

  const [taskList, setTaskList] = useState([
   
  ]);

  const addTask = enteredTask => {
    setTaskList(prevTask => {
      const updatedTasks = [...prevTask];
      updatedTasks.unshift({ text: enteredTask, id: Math.random() });
      return updatedTasks;
    })
  };

  const deleteTask = taskId => {
    setTaskList(prevTask => {
      const updatedTasks = prevTask.filter(task => taskId !== task.id)
      return updatedTasks;
    })
  }

  const clearAll = () => {
    setTaskList([]);
  }


  let content = (
    <p className='text-center p-10'>No Task found. Maybe add one?</p>
  );

  if (taskList.length > 0) {
    content = (
      <Task taskList={taskList} onDelete={deleteTask} />
    );
  }



  return (
    <div className=" h-full p-4">
      <Card>
        <Header />
        <TaskForm onAddTask={addTask} onClear={clearAll} />
        <section>
          {content}
        </section>
      </Card>
    </div>
  )

}

export default App
