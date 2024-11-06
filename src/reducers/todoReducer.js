const initialData = {
  list: [],
};
const todoReducer = (state = initialData, action) => {
  console.log("state:-", state, action);

  switch (action.type) {
    case "ADD_TODO":
      const { id, data } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
          },
        ],
      };
    default:
      return state;
  }
};

export default todoReducer;
