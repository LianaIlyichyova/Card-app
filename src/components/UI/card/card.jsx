import classes from "./card.module.css"

export default function Card(props){
    function deleteCard(){
        
    }
    return (
        <div className = {classes.card}>
            <div className = {classes.deleteButton} onClick = {deleteCard}>X</div>
            <div className = {classes.number}>Number</div>
        </div>
    )
}