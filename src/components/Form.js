import React from "react";

const Form = ({ setInputText, todos, setTodos, inputText, setStatus }) => {
  const handleInputText = (evt) => {
    setInputText(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };

  const handleStatus = (evt) => {
    setStatus(evt.target.value);
  }

  return (
    <div>
      <form>
        <input type="text" onChange={handleInputText} value={inputText} className="todo-input" />
        <button className="todo-button" type="submit" onClick={handleSubmit}>
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select onChange={handleStatus} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Form;
