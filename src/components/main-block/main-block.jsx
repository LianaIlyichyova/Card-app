import Card from "../UI/card/card";
import classes from "./main-block.module.css"

export default function MainBlock(){
    return(
        <div className = {classes.mainBlock}>
            {/* <table>
                <tr></tr>
            </table> */}
        <Card/>
        <Card/>
        <Card/>
        </div>
    )
}