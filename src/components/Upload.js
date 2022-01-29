import React, { useState } from "react";
import Progress from "./Progress";
import Error from "./Error";

export const Upload = () => {
  const [video, setVideo] = useState(null);
  const [error, setError] = useState(null);

  const allowedTypes = ["video/mp4"];

  const handleChange = (event) => {
    let fileInput = event.target.files[0];
    if (fileInput && allowedTypes.includes(fileInput.type)) {
      setVideo(fileInput);
      setError("");
    } else {
      setVideo(null);
      setError("Sorry, video files only");
    }
  };
  return (
    <>
      <div className="input-group mb-3 mt-3 w-50">
        <input
          className="form-control"
          id="inputVideo"
          type="file"
          accept="video/mp4"
          onChange={handleChange}
        />
        <label className="input-group-text" htmlFor="inputVideo">
          Upload
        </label>
      </div>
      {error && <Error error={error} />}
      {video && <Progress video={video} setVideo={setVideo} />}
    </>
  );
};

export default Upload;
