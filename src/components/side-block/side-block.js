import classes from "./side-block.module.css"

export default function SideBlock(){
    return (
        <aside className={classes.aside}>
        <p>Press the "add card" to add the new Card 
            <br/> Use the "sort cards" button to sort the Cards by the increase 
            <br/> Press an X icon on the top right to delete them.
        </p>
        </aside>
    )
}