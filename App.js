import React, { useState } from 'react';
import VideoUpload from './components/VideoUpload';
import ResultPage from './components/ResultPage';
import LoadingAnimation from './components/LoadingAnimation';
import './App.css';

function App() {
  const [page, setPage] = useState('upload');
  const [result, setResult] = useState(null);

  const handleVideoUpload = async (file, captchaToken) => {
    setPage('loading');

    try {
      const formData = new FormData();
      formData.append('video', file);
      formData.append('captcha', captchaToken);

      // Replace with your actual backend URL
      const response = await fetch('https://your-backend-url/api/detect', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      setResult(data.message || "Detection completed.");
    } catch (error) {
      setResult('Error: Unable to process the video. Please try again.');
    }

    setPage('result');
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
