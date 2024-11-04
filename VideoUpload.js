import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

function VideoUpload({ onUpload }) {
  const [file, setFile] = useState(null);
  const [captchaToken, setCaptchaToken] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === 'video/mp4') {
      setFile(selectedFile);
    } else {
      alert('Please upload an MP4 video file.');
    }
  };

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file && captchaToken) {
      onUpload(file, captchaToken);
    } else {
      alert('Please complete the CAPTCHA and select a valid video file.');
    }
  };

  return (
    <div>
      <h1>AllMark</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} accept="video/mp4" />
        <ReCAPTCHA
          sitekey="YOUR_RECAPTCHA_SITE_KEY"
          onChange={handleCaptchaChange}
        />
        <button type="submit">Upload Video</button>
      </form>
    </div>
  );
}

export default VideoUpload;
