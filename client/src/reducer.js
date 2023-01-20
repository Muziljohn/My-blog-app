export const intialState = {
  user: null,
};
const reducer = (state, action) => {
  console.log(action.payload);
  switch (action.type) {
    case "SET_USER": {
      return { ...state, user: action.user };
    }
    case "REMOVE_USER": {
      return { ...state, user: null };
    }
    default:
      return;
  }
};

export default reducer;
