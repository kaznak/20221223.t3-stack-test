import Task, { type Task as TaskType } from "./Task";

export interface TasksProps {
  tasks: Array<TaskType>;
  toggleCompleted: (s: string) => void;
}

export default function Tasks({ tasks, toggleCompleted }: TasksProps) {
  return (
    <ul>
      {tasks.map((task) => (
        <Task key={task.id} task={task} toggleCompleted={toggleCompleted} />
      ))}
    </ul>
  );
}
