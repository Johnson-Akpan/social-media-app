import "./Share.css";

export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            className="shareProfileImg"
            src="/assets/persons/pexels-tony-jamesandersson-1674752.jpg"
            alt=""
          />
          <input placeholder="What's in your mind?" className="shareInput" />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOption">
            <div className="shareOptions">
              <img className="shareIcon" src="/assets/icons/video.png" alt="" />
              <span className="shareOptionText">Photo or Video</span>
            </div>

            <div className="shareOptions">
              <img className="shareIcon " src="/assets/icons/tag.png" alt="" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOptions">
              <img
                className="shareIcon "
                src="/assets/icons/google-maps.png"
                alt=""
              />
              <span className="shareOptionText">Locations</span>
            </div>
            <div className="shareOptions">
              {/* <img
                className="shareIcon "
                src="/assets/icons/laugh.png"
                alt=""
              /> */}
              <span>😁</span>
              <span className="shareOptionText">Feelings</span>
            </div>
            <button className="shareButton">Share</button>
          </div>
        </div>
      </div>
    </div>
  );
}
