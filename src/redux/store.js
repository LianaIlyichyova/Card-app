import { createStore } from "redux";

const store = createStore(
  function (state, action) {
    if (action.type === "list-state") {
      return {
        ...state,
        currentList: {
          list: action.payload.list,
        },
      };
    }
    return state;
  },
  {
    currentList: {
      list: [],
    },
  }
);

export default store;
