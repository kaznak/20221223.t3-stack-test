import {
  useState,
  type ChangeEventHandler,
  type FormEventHandler,
} from "react";

export interface CreateTaskProps {
  addTask: (t: string) => void;
}

export default function CreateTask({ addTask }: CreateTaskProps) {
  const [task, setTask] = useState("");

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setTask(e.target?.value);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    addTask(task);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="TODO"
        value={task}
        onChange={handleChange}
        required
      />
      <button type="submit">Add</button>
    </form>
  );
}
