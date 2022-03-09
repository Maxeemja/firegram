import Title from './components/Title';
import React, { useState } from 'react';
import { UploadForm } from './components/uploadForm';
import { ImgGrid } from './components/imgGrid';
import { Modal } from './components/modal';
function App() {
  const [currImg, setCurrImg] = useState(null)

  return (
    <div className="App">
      <Title/>
      <UploadForm/>
      <ImgGrid setCurrImg={setCurrImg}/>
      {currImg && <Modal currImg={currImg} setCurrImg={setCurrImg}/>}
    </div>
  );
}
export default App;
