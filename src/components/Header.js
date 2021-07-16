function Header(props) {

  const { randomTags, time } = props

    return (
      <div className="navbar">
        {randomTags.map((tag) =>
          <div
            key={tag.y}
            className="nav-item"
            found={tag.found}
          >
            {tag.label}
          </div>
        )}
        <div className="nav-item timer">{time}</div>
      </div>
      
    );
  }
  
  export default Header;
  