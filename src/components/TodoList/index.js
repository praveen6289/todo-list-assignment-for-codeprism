import { Component } from "react";
import TodoItem from "../TodoItem";
import CompletedTasks from "../CompletedTasks";
import { v4 } from "uuid";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import "./index.css";

class TodoList extends Component {
  state = {
    todoList: [],
    completedTaskList: [],
    taskName: "",
    isExpanded: false,
  };

  onChangeTask = (event) => {
    this.setState({ taskName: event.target.value });
  };

  onClickAddItem = () => {
    const { todoList, taskName } = this.state;
    const newItem = {
      id: v4(),
      taskName,
      isCompleted: false,
    };

    this.setState({ todoList: [...todoList, newItem], taskName: "" });
  };

  deleteTask = (id) => {
    const { completedTaskList } = this.state;
    const filteredList = completedTaskList.filter((eachItem) => {
      return eachItem.id !== id;
    });
    this.setState({ completedTaskList: filteredList });
  };

  completedTask = (uniqueId) => {
    const { todoList, completedTaskList } = this.state;
    const completedTask = todoList.find(({ id }) => id === uniqueId);
    console.log(completedTask);
    const filteredList = todoList.filter((eachItem) => {
      return eachItem.id !== uniqueId;
    });
    this.setState({
      todoList: filteredList,
      completedTaskList: [...completedTaskList, completedTask],
    });
  };

  onClickExpand = () => {
    const { isExpanded } = this.state;
    this.setState((prevState) => ({
      isExpanded: !prevState.isExpanded,
    }));
  };

  render() {
    const { todoList, taskName, completedTaskList, isExpanded } = this.state;
    return (
      <div className="todo-list-bg-container">
        <h1 className="heading">Todo List</h1>
        <div class="app-container">
          <div className="app-input-container">
            <div className="input-container">
              <input
                type="text"
                placeholder="Enter your Task"
                className="user-input"
                onChange={this.onChangeTask}
                value={taskName}
              />
              <button className="add-button" onClick={this.onClickAddItem}>
                +
              </button>
            </div>
            <div className="result-container">
              {todoList.length > 0 ? (
                <ul className="task-list-container">
                  {todoList.map((eachItem) => (
                    <TodoItem
                      todoItemDetails={eachItem}
                      key={eachItem.id}
                      completedTask={this.completedTask}
                    />
                  ))}
                </ul>
              ) : (
                <p className="no-tasks">No Tasks Are Available</p>
              )}
            </div>
          </div>
          <div className="completed-task-container">
            <div className="completed-header-container">
              <h1 className="completed-heading">Completed Tasks</h1>
              <button onClick={this.onClickExpand} className="expand">
                {isExpanded ? (
                  <BsFillArrowDownCircleFill />
                ) : (
                  <BsFillArrowRightCircleFill />
                )}
              </button>
            </div>
            {isExpanded && (
              <div className="result-container">
                {completedTaskList.length > 0 ? (
                  <ul className="completed-task-list-container">
                    {completedTaskList.map((eachItem) => (
                      <CompletedTasks
                        todoItemDetails={eachItem}
                        key={eachItem.id}
                        deleteTask={this.deleteTask}
                      />
                    ))}
                  </ul>
                ) : (
                  <p className="no-tasks">No Tasks Are Available</p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default TodoList;
