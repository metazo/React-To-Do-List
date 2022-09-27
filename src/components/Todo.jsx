import React from "react";

function Todo({ id, item, onCheck }) {
  return (
    <>
      <li
        onClick={() => {
          onCheck(id);
        }}
      >
        {item}
      </li>
    </>
  );
}

export default Todo;
