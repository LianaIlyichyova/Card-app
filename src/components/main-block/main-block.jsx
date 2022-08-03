import Card from "../UI/card/card";
import { getList } from "../../redux/store";
import classes from "./main-block.module.css";
import { useSelector } from "react-redux";

export default function MainBlock() {
  const list = useSelector(getList);

  return (
    <div className={classes.mainBlock}>
      <div className={classes.table}>
        {list.map((card) => (
          <Card title={card.title} id={card.id} key = {card.id}/>
        ))}
      </div>
    </div>
  );
}
