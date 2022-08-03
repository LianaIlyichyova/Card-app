import classes from "./card.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getList } from "../../../redux/store";

export default function Card(props) {
  const list = useSelector(getList);
  let dispatch = useDispatch();

  function deleteCard() {
    let newList = [...list].filter((card) => card.id !== props.id);
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
      <div className={classes.number}>{props.title}</div>
    </div>
  );
}
