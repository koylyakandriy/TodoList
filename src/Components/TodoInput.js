import React from "react";

const TodoInput = ({ item, handleChange, handleSubmit, editItem }) => {
  return (
    <div className="card card-body my-3">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text bg-primary text-white">
              <i className="fas fa-book" />
            </div>
          </div>
          <input
            className="form-control text-capitalize"
            type="text"
            placeholder="add todo item"
            value={item}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          disabled={item === ""}
          className={
            editItem
              ? "btn btn-block btn-success mt-3"
              : "btn btn-block btn-primary mt-3 text-uppercase"
          }
        >
          {editItem ? "edit item" : "add item"}
        </button>
      </form>
    </div>
  );
};

export default TodoInput;
