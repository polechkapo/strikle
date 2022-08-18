import React, {useCallback, useState} from 'react';
import empty from './empty.jpeg';
import axios from 'axios';


export default function Multer() {
  const [img, setImg] = useState(null);
  const [avatar, setAvatar] = useState(null);

  const sendFile = useCallback(async() => {
    try {
      const data = new FormData()
      data.append('avatar', img)
    } catch (error) {
      await axios.post('/api/upload', data, {
        headers: {
          'content-type': 'multipart/form-data'
        }
      })
      .then(res => setAvatar(res.data.path))
    }
  }, [img])
  
  
  return (
    <div>
      <div className='avatar'>
        {
          avatar
          ? <img className='photo' src={`${avatar}`} alt="avatar" />
          : <img className='photo' src={`${empty}`} alt="avatar" />
        }
        <img src={`${empty}`} alt="avatar" />
      </div>
        <input type="file" onChange={e => setImg(e.target.files[0])}/>
        <button className='btn' onClick={sendFile}>Добавить аватар</button>
    </div>
  );
}

