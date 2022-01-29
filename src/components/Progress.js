import React, { useEffect } from "react";
import useStorage from "../utils/useStorage";
import { ProgressBar } from "react-bootstrap";

export const Progress = ({ video, setVideo }) => {
  const { url, progress } = useStorage(video);

  useEffect(() => {
    if (url) {
      setVideo(null);
    }
  }, [url, setVideo]);

  return (
    <div className="w-50 pb-5">
      <ProgressBar
        striped
        variant="info"
        now={progress}
        label={`${Math.floor(progress)}%`}
      />
    </div>
  );
};

export default Progress;
