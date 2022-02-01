import React, { useContext, useRef, useEffect, useState } from "react";

import TodoContext from "../../context/todoContext";
import { Button } from "react-bootstrap";

const AddNewTask = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  const context = useContext(TodoContext);

  const focusInput = useRef(null);
  useEffect(() => {
    focusInput.current.focus();
  });

  return (
    <div className="m-2 p-2">
      <form
        className="form-inline justify-content-center"
        onSubmit={(event) => event.preventDefault()}
      >
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleOnChange}
          data-toggle="toggle"
          data-on={`بیاب "<i class='fa fa-search'></i>"`}
          data-off={`افزودن "<i class='fa fa-plus-square'></i>"`}
          data-onstyle="info"
          data-offstyle="success"
        ></input>

        <div className="input-group w-25">
          <input
            ref={focusInput}
            type={"text"}
            className="form-control"
            placeholder="افزودن کار جدید"
            onChange={context.handleTodoInput}
            value={context.todo}
          />

          <div className="input-group-prepend">
            <Button
              type="submit"
              onClick={context.handleCreateNewTodo}
              variant={isChecked ? "success" : "info"}
              size="sm"
              className={isChecked ? "fa fa-plus-square" : "fa fa-search"}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddNewTask;
