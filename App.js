import React, { useState } from 'react';
import VideoUpload from './components/VideoUpload';
import ResultPage from './components/ResultPage';
import LoadingAnimation from './components/LoadingAnimation';
import './App.css';

function App() {
  const [page, setPage] = useState('upload');
  const [result, setResult] = useState(null);

  const handleVideoUpload = async (file) => {
    setPage('loading');

    // Simulate a backend call
    const response = await fakeBackendCall(file);
    setResult(response);

    setPage('result');
  };

  const fakeBackendCall = (file) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("The video is Real!"); // Replace with actual backend logic
      }, 3000); // Simulate delay
    });
  };

  return (
    <div className="App">
      {page === 'upload' && <VideoUpload onUpload={handleVideoUpload} />}
      {page === 'loading' && <LoadingAnimation />}
      {page === 'result' && <ResultPage result={result} />}
    </div>
  );
}

export default App;
