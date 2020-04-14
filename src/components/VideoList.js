import React from "react";
import logo2 from '../img/fairy.svg';

import VideoItem from "./VideoItem";

export default ({ videos, onVideoSelect }) => {
  if (videos.length<1) return <div class="previstalista"><img src={logo2}></img><h1>Lista de videos</h1></div>;

  const listOfVideos = videos.map(video => (
    <VideoItem
      onVideoSelect={onVideoSelect}
      key={video.id.videoId}
      video={video}
    />
  ));

  return (
    <div className="listavideos">
        {listOfVideos}
    </div>
  );
}