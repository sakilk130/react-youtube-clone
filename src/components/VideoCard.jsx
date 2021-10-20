import React from 'react';
import Avatar from '@material-ui/core/Avatar';

import '../styles/VideoCard.css';

function VideoCard({ image, title, channel, timestamp, views, channelImage }) {
  return (
    <div className="videoCard">
      <img src={image} alt="" className="videoCard__thumbnail" />
      <div className="videoCard__info">
        <Avatar src={channelImage} alt="" className="videoCard__avatar" />
        <div className="videoCard__text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} • {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
