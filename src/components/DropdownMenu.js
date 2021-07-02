
function DropdownMenu(props){
    const {xPos, yPos, tags, xSize, ySize} = props
    const relX = xPos / xSize
    const relY = yPos / ySize

    function handleButtonClick(x, y){
        if (relX < x + .1 && relX > x - .1){
            if (relY < y + .1 && relY > y - .1){
                alert("correct")
                console.log("correct")
            }
        } else {
            console.log("incorrect")
        }
    }

    return(
        <div
            className="dropdown-menu"
            style={{ top: `calc(${yPos}px)`, left: `${xPos}px` }}
        >
            {relX}, {relY}
            <ul>
                {tags.map((tag) => 
                    <button
                        key={tag.x}
                        onClick={() => handleButtonClick(tag.x, tag.y)}
                    >
                        {tag.label}
                    </button>
                )}
            </ul>
        </div>
    )
}

export default DropdownMenu