import { useState } from "react";

export type Task = {
  id: string;
  text: string;
  completed: boolean;
};

export interface TaskProps {
  task: Task;
  toggleCompleted: (s: string) => void;
}

export default function Task({ task, toggleCompleted }: TaskProps) {
  const [completed, setCompleted] = useState(task.completed);

  return (
    <li className={completed ? "completed" : "incompleted"}>
      <span>{task.text}</span>
      <input
        type="checkbox"
        checked={completed}
        onClick={() => toggleCompleted(task.id)}
        onChange={() => setCompleted(task.completed)}
        readOnly
      />
    </li>
  );
}
