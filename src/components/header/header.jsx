import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import classes from "./header.module.css";

export default function Header() {
  const list = useSelector(function (state) {
    return state.currentList.list;
  });
  const dispatch = useDispatch();

  function findUniqueRandomTitle() {
    let isAddedItem = false;
    while (!isAddedItem) {
      let item = Math.floor((Math.random() + 1) * (list.length + 1) ** 2);
      if (list.indexOf(item) === -1) {
        isAddedItem = true;
        return item;
      }
    }
  }

  function handleAddCard() {
    let num = findUniqueRandomTitle();
    dispatch({
      type: "list-state",
      payload: {
        list: [...list, { id: uuidv4(), title: num }],
      },
    });
  }

  function sortCards() {
    let sortedList = [...list];
    sortedList.sort((a, b) => a.title - b.title);

    dispatch({
      type: "list-state",
      payload: {
        list: sortedList,
      },
    });
  }

  return (
    <div>
      <button onClick={handleAddCard} className={classes.btn}>
        Add Card
      </button>
      <button onClick={sortCards} className={classes.btn}>
        Sort Cards
      </button>
    </div>
  );
}
