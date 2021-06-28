function DropdownMenu({xPos, yPos}){

    // const [xPos, yPos] = props

    return(
        <div
            className="dropdown-menu"
            style={{ top: `calc(${yPos}px)`, left: `${xPos}px` }}
        >
            <ul>
                <li>Meme 1</li>
                <li>Meme 2</li>
                <li>Meme 3</li>
            </ul>
        </div>
    )
}

export default DropdownMenu