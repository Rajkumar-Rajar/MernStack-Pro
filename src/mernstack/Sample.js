import React, { useRef } from 'react';
import axios from 'axios';

function App() {
  const fileInputRef = useRef(null);

  const uploadFile = async () => {
    const formData = new FormData();
    formData.append('file', fileInputRef.current.files[0]);

    try {
      const response = await axios.post('http://localhost:5000/upload', formData);
      console.log('File uploaded:', response.data);
    } catch (error) {
      console.error("There was an error uploading the file!", error);
    }
  };

  return (
    <div>
      <input type="file" ref={fileInputRef} />
      <button onClick={uploadFile}>Upload</button>
      {/* Here you can add components to display the uploaded files */}
    </div>
  );
}

export default App;
