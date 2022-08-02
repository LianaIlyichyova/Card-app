import Card from "../UI/card/card";
import classes from "./main-block.module.css";
import { useSelector } from "react-redux";

export default function MainBlock(){

    const list = useSelector(function (state) {
        return state.currentList.list;
      });

    //   function createMatrix(){
    //     for(){

    //     }
    //   }
    return(
        <div className = {classes.mainBlock}>
            {
                list.map((card,i)=><Card key = {card} name = {card} index = {i}/>)
            }
        </div>
    )
}