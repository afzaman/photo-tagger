
function DropdownMenu(props){
    const {xPos, yPos, tags, xSize, ySize, handleButtonClick} = props
    const relX = Math.round((xPos / xSize) * 100) / 100
    const relY = Math.round((yPos / ySize) * 100) / 100

    return(
        <div
            className="dropdown-menu"
            style={{ top: `calc(${yPos}px)`, left: `${xPos}px` }}
        >

            {tags.map((tag, index) => 
                <button
                    className="dropdown-button"
                    key={tag.x}
                    onClick={() => handleButtonClick(tag, index, relX, relY)}
                >
                    {tag.label}
                </button>
            )}
        </div>
    )
}

export default DropdownMenu