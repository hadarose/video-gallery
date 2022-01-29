import React from "react";

export const Video = ({ video }) => (
  <div className="col card text-start" style={{ width: 320 }}>
    <video controls>
      <source
        className="card-img-top pt-2"
        src={video.fileUrl}
        alt={`${video?.name}`}
      />
      Your browser does not support the video tag.
    </video>
    <div className="card-body">
      <h5 className="card-title">{video?.name}</h5>
      <p className="card-text">{video?.description}</p>
    </div>
  </div>
);

export default Video;
