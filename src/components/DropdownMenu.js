import memeTags from '../images/memeTags.js'

function DropdownMenu({xPos, yPos}){

    // const [xPos, yPos] = props

    function getRandom(arr, n) {
        var result = new Array(n),
            len = arr.length,
            taken = new Array(len);
        if (n > len)
            throw new RangeError("getRandom: more elements taken than available");
        while (n--) {
            var x = Math.floor(Math.random() * len);
            result[n] = arr[x in taken ? taken[x] : x];
            taken[x] = --len in taken ? taken[len] : len;
        }
        return result;
    }

    return(
        <div
            className="dropdown-menu"
            style={{ top: `calc(${yPos}px)`, left: `${xPos}px` }}
        >
            <ul>
                {getRandom(memeTags, 3).map((tag) => 
                    <button key={tag.x + tag.y}>
                        {tag.label}
                    </button>
                )}
            </ul>
        </div>
    )
}

export default DropdownMenu