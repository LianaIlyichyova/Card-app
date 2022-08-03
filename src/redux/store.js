import { createStore } from "redux";

const store = createStore(
  function (state, action) {
    if (action.type === "list-state") {
      sessionStorage.setItem("list",JSON.stringify(action.payload.list))
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
      list: sessionStorage.getItem("list") ? JSON.parse(sessionStorage.getItem("list")) : [],
    },
  }
);

export default store;
