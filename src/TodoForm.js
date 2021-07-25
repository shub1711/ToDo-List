import React from "react";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import useInputState from "./hooks/useInputState";

function TodoForm({ addTodo }) {
  const [value, handleChange, reset] = useInputState("");
  return (
    <Paper
      style={{
        margin: "1rem0",
        margin: "50px",
        padding: "0rem1",
        border: "1.5px solid rgb(65,83,175)",
        borderBottom: "2px solid rgb(65,83,175)",
      }}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo(value);
          reset();
        }}
      >
        <TextField
          style={{ marginLeft: "20px" }}
          value={value}
          onChange={handleChange}
          margin="normal"
          label="Add a new todo..."
        />
      </form>
    </Paper>
  );
}
export default TodoForm;
