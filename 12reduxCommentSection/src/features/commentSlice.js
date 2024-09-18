import { createSlice, nanoid } from "@reduxjs/toolkit";

export const commentSlice = createSlice({
  name: "comment",
  initialState: {
    comments: [{ id: nanoid(), text: "hello how are you" }], // Initial state with a comment
  },
  reducers: {
    addComment: (state, action) => {
      state.comments.push({ id: nanoid(), text: action.payload });
    },
    removeComment: (state, action) => {
      state.comments = state.comments.filter(comment => comment.id !== action.payload);
    },
    updateComment: (state, action) => { // Added update functionality
      const { id, text } = action.payload;
      const existingComment = state.comments.find(comment => comment.id === id);
      if (existingComment) {
        existingComment.text = text;
      }
    }
  },
});

export const { addComment, removeComment, updateComment } = commentSlice.actions;
export const commentReducer = commentSlice.reducer;
