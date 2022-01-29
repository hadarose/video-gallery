import { useState, useEffect } from "react";
import { storage, firestore, timestamp } from "../firebase/config";

export const useStorage = (video) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // creating a reference to a file inside the default firebase storage booking
    const storageRef = storage.ref(video.name);
    // creating a collection
    const collectionRef = firestore.collection("videos");

    // Puts the file into the name reference
    storageRef.put(video).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        // Get the url of the file uploaded
        let fileUrl = await storageRef.getDownloadURL();
        const createdAt = timestamp();
        collectionRef.add({
          fileUrl,
          createdAt,
          name: video.name,
          description: "Some Description",
        });
        setUrl(fileUrl);
      }
    );
  }, [video]);

  return { progress, url, error };
};

export default useStorage;
