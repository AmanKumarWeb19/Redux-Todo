export const addTodo = (inputData) => {
  console.log(inputData);

  return {
    type: "ADD_TODO",
    payload: {
      id: new Date().getTime().toString(),
      data: inputData,
    },
  };
};

export const deleteTodo = () => {
  return { type: "DELETE_TODO" };
};

export const removeTodo = () => {
  return { type: "REMOVE_TODO" };
};
