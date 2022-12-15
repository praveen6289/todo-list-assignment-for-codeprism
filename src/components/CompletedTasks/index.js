import { AiFillDelete } from "react-icons/ai";
import "./index.css";

const CompletedTasks = (props) => {
  const { todoItemDetails, deleteTask } = props;
  const { taskName, id } = todoItemDetails;

  const onDeleteTask = () => {
    deleteTask(id);
  };

  return (
    <li className={`completed-task`}>
      <p className="completed-task-name"> {taskName}</p>
      <button className="delete" onClick={onDeleteTask}>
        <AiFillDelete />
      </button>
    </li>
  );
};

export default CompletedTasks;
