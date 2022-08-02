import Button from "../UI/button/button";
import { useDispatch, useSelector } from "react-redux";

export default function Header(){

    const list = useSelector(function (state) {
        return state.currentList.list;
      });
    const dispatch = useDispatch();

    function findUniqueRandomName(){
        let isAddedItem = false
        while(!isAddedItem){
            let item = Math.floor(Math.random() * ((list.length+1)**2)) ;
            if(list.indexOf(item)===-1){
                isAddedItem=true;
                return item
            } 
        }
    }

    function handleAddCard(){
        let num = findUniqueRandomName();
        dispatch({
            type: "list-state",
            payload: {
              list: [...list,{id: Date.now(), title: num}],
            },
          });
    }

    function sortCards(){
        let sortedList=[...list];
        sortedList.sort((a, b)=> a.title-b.title);
        dispatch({
            type: "list-state",
            payload: {
              list: sortedList,
            },
          });
    }

    return(
        <div>
            <Button onClick = {handleAddCard}>Add Card</Button>
            <Button onClick = {sortCards}>Sort Cards</Button>
        </div>
    )
}