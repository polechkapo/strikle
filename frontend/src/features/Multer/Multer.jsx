import React, { useState } from 'react';
import empty from './empty.jpeg';

export default function Multer() {
  const [photo, setPhoto] = useState(null);

  const hendlerUloadPhoto = React.useCallback(async (e) => {
    try {
      const picturesData = [...e.target.files];
      const file = new FormData();
      picturesData.forEach((img) => {
        file.append('homesImg', img);
      });
      const response = await fetch('/api/multer', {
        method: 'POST',
        body: file,
      });
      const test = await response.json();
      setPhoto(test);
    } catch (error) {
      console.log(error.message);
    }
  });

  return (
    <div>
      <div className="avatar">
        {
          photo
            ? <img className="photo" src={photo} alt="avatar" style={{ width: 100 }} />
            : <img className="photo" src={`${empty}`} alt="avatar" />
        }
      </div>
      <form action="/multer" method="post">
        <input type="file" onChange={hendlerUloadPhoto} />
        <button type="button" className="btn">Save changed</button>
      </form>

    </div>
  );
}
