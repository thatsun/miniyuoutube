import React, {useState} from 'react';



import youtube from './api/youtube';

import './main.css';

import logo from './img/hastelady.svg'




import {SearchBar,VideoDetail,VideoList} from './components';




export default () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <div className="container">
        <div className="header">
            <div className="titleholder">
                <img className="logo" src={logo} alt=""></img>
                <h1 className="maintitle">MiniTube</h1>

            </div>
        </div>        
       
        <SearchBar onSubmit={handleSubmit} />
        <div className="videoscontainer">
            <div className="videoplayer">
                <VideoDetail video={selectedVideo} />
            </div>
            
            <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
            
        
        </div>   
         
        
        
      
    </div>
  );

  async function handleSubmit(searchTerm) {
    const { data: { items: videos } } = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: 'AIzaSyD-YQvceS6sYdETKTr-uXPoBahCmEa2j3M',
        q: searchTerm,
      }
    });

    setVideos(videos);
    setSelectedVideo(videos[0]);
  }
}