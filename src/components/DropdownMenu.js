
function DropdownMenu(props){
    const {xPos, yPos, tags, xSize, ySize, handleButtonClick} = props
    const relX = Math.round((xPos / xSize) * 100) / 100
    const relY = Math.round((yPos / ySize) * 100) / 100

    function checkStyle () {
        let style = ""
        if (yPos >= 0.8 && xPos >= 0.8 ) {
            style = "bottom:" + xPos + "px, right: " +yPos + "px"
        }
        if (yPos >= 0.8 && xPos < 0.8 ) {
            style = "bottom:" + xPos + "px, left: " +yPos + "px"
        }
        if (yPos < 0.8 && xPos < 0.8 ) {
            style = "top:" + xPos + "px, left: " +yPos + "px"
        }
        if (yPos < 0.8 && xPos >= 0.8 ) {
            style = "top: calc(" + xPos + "px), right: calc(" +yPos + "px)"
        }
        console.log(style)
        return style
    }

    // 

    return(
        <div
            className="dropdown-menu"
            style={{ 
                top: `${yPos}px`,
                left: `${xPos}px`,           
            }}
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