import Card from "../UI/card/card";
import classes from "./main-block.module.css";
import { useSelector } from "react-redux";
import { selectList } from "../../redux/store";

export default function MainBlock() {
  const list = useSelector(selectList);

  return (
    <div className={classes.mainBlock}>
      <div className={classes.table}>
        {list.map((card) => (
          <Card title={card.title} id={card.id} />
        ))}
      </div>
    </div>
  );
}
