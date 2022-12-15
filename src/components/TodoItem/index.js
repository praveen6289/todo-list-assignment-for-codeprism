import "./index.css";

const TodoItem = (props) => {
  const { todoItemDetails, completedTask } = props;
  const { taskName, id, isCompleted } = todoItemDetails;
  const completed = isCompleted ? "completed-button" : "";
  const taskCompleted = isCompleted ? "completed" : "task";
  const updatedButton = isCompleted ? "Completed" : "Complete";
  const updatedNameStatus = isCompleted ? "updated-status" : "task-name";

  const onClickComplete = () => {
    completedTask(id);
  };

  return (
    <li className={`task ${taskCompleted}`}>
      <p className={updatedNameStatus}> {taskName}</p>
      <div className="buttons-container">
        <button className={`status ${completed}`} onClick={onClickComplete}>
          {updatedButton}
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
