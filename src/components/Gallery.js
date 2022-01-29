import React, { useState, useEffect } from "react";
import Video from "./Video";
import { firestore } from "../firebase/config";

export const Gallery = () => {
  const [videos, setVideo] = useState([]);

  useEffect(() => {
    // Gets a snapshot each time the collection gets updated
    const unsubscribe = firestore
      .collection("videos")
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        let documents = [];
        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setVideo(documents);
      });

    // Clean up awhen not showing Gallery
    return () => unsubscribe();
  }, []);
  return (
    <div className="container">
      <div className="row row-cols-3 mb-3">
        {videos &&
          videos.map((video) => <Video key={video.id} video={video} />)}
      </div>
    </div>
  );
};

export default Gallery;
