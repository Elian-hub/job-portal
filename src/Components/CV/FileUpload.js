// src/FileUpload.js
import React, { useState } from 'react';

const onUpload = () => {
  console.log('uploaded');
};
const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedFile) {
      // Handle the file upload logic here
      console.log('File selected:', selectedFile);
    } else {
      console.log('No file selected');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='file' onChange={handleFileChange} />
        <button type='submit' onClick={onUpload}>
          Upload
        </button>
      </form>
      {selectedFile && (
        <div>
          <h4>Selected File</h4>
          <p>File name: {selectedFile.name}</p>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
