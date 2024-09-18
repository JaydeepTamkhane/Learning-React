import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeComment } from "../features/commentSlice"; // Corrected path

function RemoverComment() {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comment.comments);

  return (
    <>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <div>{comment.text}</div>
            <button onClick={() => dispatch(removeComment(comment.id))}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default RemoverComment;
