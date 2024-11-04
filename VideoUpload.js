import React, { useState } from 'react';

function VideoUpload({ onUpload }) {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === 'video/mp4') {
      setFile(selectedFile);
    } else {
      alert('Please upload an MP4 video file.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      onUpload(file);
    }
  };

  return (
    <div>
      <h1>AllMark</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} accept="video/mp4" />
        <button type="submit">Upload Video</button>
      </form>
    </div>
  );
}

export default VideoUpload;
