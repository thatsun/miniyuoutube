
import React from "react";

export default ({ video, onVideoSelect }) => {
  return (
    <div className="videoitemcontainer">
      <div className="videobutton" onClick={() => onVideoSelect(video)} >
        <img style={{ marginRight: "20px", width:"50%", height: "90%" ,paddingTop: "10px"}} alt="thumbnail" src={video.snippet.thumbnails.medium.url} />
        <div class="itemvideodetails">
          <h3>{video.snippet.title}</h3>
          <h4>{video.snippet.channelTitle}</h4>
        </div>
        
      </div>
    </div>
  );
}