import { useReducer } from 'react';
import AddTask from './AddTask.jsx';
import TaskList from './TaskList.jsx';
import tasksReducer from './TaskReducer.jsx';

export default function TaskApp() {
  const [tasks, dispatchEvent] = useReducer(tasksReducer, initialTasks);

  function handleAddTask(text) {
    dispatchEvent({
      type: 'added',
      id: nextId++,
      text: text
    })
  }

  function handleChangeTask(task) {
    dispatchEvent({
      type: 'changed',
      task: task,
    })
  }

  function handleDeleteTask(taskId) {
    dispatchEvent({
      type: 'deleted',
      id: taskId,
    })
  }


  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}

let nextId = 3;
const initialTasks = [
  { id: 0, text: 'Visit Kafka Museum', done: true },
  { id: 1, text: 'Watch a puppet show', done: false },
  { id: 2, text: 'Lennon Wall pic', done: false },
];