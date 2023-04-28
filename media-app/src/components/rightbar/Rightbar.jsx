import  './rightbar.css'
import { Users } from "../../dummyData"
import Online from "../../components/online/Online"

export default function rightbar({ profile }) {
  
  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img
            className="birthdayImage"
            src="/assets/icons/gift-box.png"
            alt=""
          />
          <span className="birthdayText">
            {" "}
            <b>Adam Joe</b> and <b>3 other friends</b> have a birthday today.
          </span>
        </div>
        <img
          className="rightbarAd"
          src="/assets/posts/pexels-saifullah-hafeel-1677180.jpg"
          alt=""
        />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightBar = () => {
    return (
      <>
        <h4 className='rightbarTitle'>User Information</h4>
        <div className='rightbarInfo'>
          <div className="rightbarInfoItem">
            <span className='rightbarInfokey'>City:</span>
            <span className='rightbarInfokey'>New York</span>
          </div>
          <div className="rightbarInfoItem">
            <span className='rightbarInfokey'>From:</span>
            <span className='rightbarInfokey'>Nigeria</span>
          </div>
          <div className="rightbarInfoItem">
            <span className='rightbarInfokey'>Relationship:</span>
            <span className='rightbarInfokey'>single</span>
          </div>
        </div>
        <h4>User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarfollowing">
            <img className='rightbarFollowingImg' src="assets/persons/pexels-cottonbro-studio-4626343.jpg" alt="" />
            <div className="rightbarFollowing">Johnson Akpan</div>
          </div>
          <div className="rightbarfollowing">
            <img className='rightbarFollowingImg' src="assets/persons/pexels-cottonbro-studio-4626343.jpg" alt="" />
            <div className="rightbarFollowing">Johnson Akpan</div>
          </div>
          <div className="rightbarfollowing">
            <img className='rightbarFollowingImg' src="assets/persons/pexels-cottonbro-studio-4626343.jpg" alt="" />
            <div className="rightbarFollowing">Johnson Akpan</div>
          </div>
          <div className="rightbarfollowing">
            <img className='rightbarFollowingImg' src="assets/persons/pexels-cottonbro-studio-4626343.jpg" alt="" />
            <div className="rightbarFollowing">Johnson Akpan</div>
          </div>
          <div className="rightbarfollowing">
            <img className='rightbarFollowingImg' src="assets/persons/pexels-cottonbro-studio-4626343.jpg" alt="" />
            <div className="rightbarFollowing">Johnson Akpan</div>
          </div>
          <div className="rightbarfollowing">
            <img className='rightbarFollowingImg' src="assets/persons/pexels-cottonbro-studio-4626343.jpg" alt="" />
            <div className="rightbarFollowing">Johnson Akpan</div>
          </div>
        </div>
      </>
    )
  }
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
      {profile ?  <ProfileRightBar/> : <HomeRightBar/>}
      </div>
    </div>
  )
}
