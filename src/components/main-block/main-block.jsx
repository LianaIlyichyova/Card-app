import Card from "../UI/card/card";
import classes from "./main-block.module.css";
import { useSelector } from "react-redux";

export default function MainBlock() {
  const list = useSelector(function (state) {
    return state.currentList.list;
  });

  let listMatrix = () => {
    let newArr = [];
    for (let i = 0; i < list.length; i += 3) {
      let row = [...list].slice(i, i + 3);
      newArr.push(row);
    }
    return newArr;
  };

  return (
    <div className={classes.mainBlock}>
      <table className = {classes.table}>
        <tbody >
          {listMatrix().length > 0 &&
            listMatrix().map((row, i) => (
              <tr key={`row${i}`}>
                {row.map((card) => (
                  <td key={card.id}><Card  title={card.title} id={card.id} /></td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
