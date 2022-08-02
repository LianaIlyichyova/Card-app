import Button from "../UI/button/button"

export default function Header(){

    function addCard(){

    }

    function sortCards(){

    }

    return(
        <header>
            <Button onClick = {addCard}>Add Card</Button>
            <Button onClick = {sortCards}>Sort Cards</Button>
        </header>
    )
}