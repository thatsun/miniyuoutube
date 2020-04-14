import React from 'react';
import logo2 from '../img/golem.svg';

export default ({ video }) => {
  if (!video) return <div class="loading"><img src={logo2}></img></div>;

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <React.Fragment>
        
        <div className="videoframe">
            <iframe
                frameBorder="0"
                height="100%"
                width="100%"
                title="Video Player"
                src={videoSrc}
            />
        </div>

        
        <div className="videodetails">
            <h4>{video.snippet.title} - {video.snippet.channelTitle}</h4>
            <h5>{video.snippet.channelTitle}</h5>
            <h5>{video.snippet.description}</h5>
        </div>     
      
    </React.Fragment>
  );
}