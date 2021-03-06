import React, { Component } from "react";
import PropTypes from "prop-types";

class Todo extends Component {
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todoProp.completed ? "line-through" : "none",
    };
  };

  render() {
    const { id, title } = this.props.todoProp;
    return (
      <div style={this.getStyle()}>
        <input
          type="checkbox"
          onChange={this.props.markComplete.bind(this, id)}
        />{" "}
        {title}
        <button onClick={this.props.deleteTodo.bind(this, id)} style={btnStyle}>
          x
        </button>
      </div>
    );
  }
}
Todo.propTypes = {
  todoProp: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};
const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 9px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right",
};
export default Todo;
