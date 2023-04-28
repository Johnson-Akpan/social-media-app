import "./sidebar.css";

const sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <img
              src="/assets/icons/rss-feed-symbol.png"
              alt=""
              className="sidebarIcon"
            />
            <span>Feed</span>
          </li>

          <li className="sidebarListItem">
            <img
              src="/assets/icons/comments.png"
              alt=""
              className="sidebarIcon"
            />
            <span>Chats</span>
          </li>
          <li className="sidebarListItem">
            <img
              src="/assets/icons/play-button.png"
              alt=""
              className="sidebarIcon"
            />
            <span>Videos</span>
          </li>
          <li className="sidebarListItem">
            <img
              src="/assets/icons/multiple-users-silhouette.png"
              alt=""
              className="sidebarIcon"
            />
            <span>Groups</span>
          </li>
          <li className="sidebarListItem">
            <img
              src="/assets/icons/bookmark.png"
              alt=""
              className="sidebarIcon"
            />
            <span>Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <img src="/assets/icons/ask.png" alt="" className="sidebarIcon" />
            <span>Questions</span>
          </li>
          <li className="sidebarListItem">
            <img
              src="/assets/icons/portfolio.png"
              alt=""
              className="sidebarIcon"
            />
            <span>Jobs</span>
          </li>
          <li className="sidebarListItem">
            <img
              src="/assets/icons/calendar.png"
              alt=""
              className="sidebarIcon"
            />
            <span>Events</span>
          </li>
          <li className="sidebarListItem">
            <img
              src="/assets/icons/learning.png"
              alt=""
              className="sidebarIcon"
            />
            <span>Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr " />
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="/assets/persons/pexels-kiyan-mirzaei-4420634.jpg"
              alt=""
            />
            <span className="sidebarFriendName">Kiyan Mirzaeri</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="/assets/persons/pexels-chloe-1043471.jpg"
              alt=""
            />
            <span className="sidebarFriendName">Jones Chloe</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="/assets/persons/pexels-bruno-salvadori-2269872.jpg"
              alt=""
            />
            <span className="sidebarFriendName">Bruno Salvadori</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="/assets/persons/pexels-george-dolgikh-1310522.jpg"
              alt=""
            />
            <span className="sidebarFriendName">George Dolgikh</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="/assets/persons/pexels-ketut-subiyanto-4307869.jpg"
              alt=""
            />
            <span className="sidebarFriendName">Ketut Subiyanto</span>
          </li>
          {/* <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="/assets/persons/pexels-pixabay-220453.jpg"
              alt=""
            />
            <span className="sidebarFriendName">John Bill</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="/assets/persons/pexels-cottonbro-studio-4626343.jpg"
              alt=""
            />
            <span className="sidebarFriendName">Amina Aminu</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="/assets/persons/pexels-cottonbro-studio-4709285.jpg"
              alt=""
            />
            <span className="sidebarFriendName">Stella Joe</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="/assets/persons/pexels-cottonbro-studio-9222625.jpg"
              alt=""
            />
            <span className="sidebarFriendName">Isaac Femi</span>
          </li> */}
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="/assets/persons/pexels-cottonbro-studio-10669639.jpg"
              alt=""
            />
            <span className="sidebarFriendName">Bella Stanley</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="/assets/persons/pexels-engin-akyurt-1441151.jpg"
              alt=""
            />
            <span className="sidebarFriendName">Engin Akyurt</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default sidebar;
