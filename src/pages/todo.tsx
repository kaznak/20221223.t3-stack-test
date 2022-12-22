import { useState } from "react";
import CreateTask from "../components/CreateTask";
import Tasks from "../components/Tasks";
import { type Task } from "../components/Task";

export function Todo() {
  const [tasks, setTasks] = useState<Array<Task>>([]);

  const createTask = (text: string, id: string) => ({
    id,
    text,
    completed: false,
  });

  const addTask = (task: string) => {
    const temp = [...tasks];
    temp.push(createTask(task, tasks.length.toString()));
    setTasks(temp);
  };

  const toggleCompleted = (id: string) => {
    const temp = [...tasks];
    const obj = temp.find((t) => t.id === id);
    if (obj) obj.completed = !obj.completed;
    setTasks(temp);
  };

  return (
    <div>
      <CreateTask addTask={addTask} />
      <Tasks tasks={tasks} toggleCompleted={toggleCompleted} />
    </div>
  );
}
export default Todo;
