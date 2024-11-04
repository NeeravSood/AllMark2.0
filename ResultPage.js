import React from 'react';

function ResultPage({ result }) {
  return (
    <div>
      <h2>Detection Result</h2>
      <p>{result}</p>
    </div>
  );
}

export default ResultPage;
