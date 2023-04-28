import "./Topbar.css";

const Topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Johnsocial</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <img
            className="searchIcon"
            src="/assets/icons/magnifying-glass.png"
            alt=""
          />
          <input
            placeholder="search for friend, post  or video"
            className="searchInput"
            type="text"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <img className="notification" src="/assets/icons/user.png" alt="" />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <img
              className="notification"
              src="/assets/icons/comments.png"
              alt=""
            />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <img className="notification" src="/assets/icons/bell.png" alt="" />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img
          src="./assets/persons/pexels-andrew-personal-training-697509.jpg"
          alt=""
          className="topbarImg"
        />
      </div>
    </div>
  );
};

export default Topbar;
