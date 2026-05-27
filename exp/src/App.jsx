import { useReducer } from 'react';
import AddTask from './AddTask.jsx';
import TaskList from './TaskList.jsx';

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

  function tasksReducer(tasks, action) {
    if (action.type === 'added') {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false
        }
      ]
    } else if (action.type === 'changed') {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task
        } else {
          return t;
        }
      })
    } else if (action.type === 'deleted') {
      return tasks.filter((t) => t.id !== action.id)
    } else {
      throw Error('Unknown actions: ' + action.type)
    }
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