import classes from "./card.module.css";
import { useSelector, useDispatch } from "react-redux";

export default function Card(props) {
  const list = useSelector(function (state) {
    return state.currentList.list;
  });
  let dispatch = useDispatch();

  function deleteCard() {
    console.log(props.index);
    let newList = [...list].filter((card, index) => index !== props.index);
    dispatch({
      type: "list-state",
      payload: {
        list: newList,
      },
    });
  }

  return (
    <div className={classes.card}>
      <button className={classes.deleteButton} onClick={deleteCard}>
        X
      </button>
      <div className={classes.number}>{props.name}</div>
    </div>
  );
}
