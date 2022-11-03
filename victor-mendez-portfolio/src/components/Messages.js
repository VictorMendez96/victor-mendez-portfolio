import React, { useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import ProfilePhoto from '../assets/profile-photo.jpg';

function Message () {
  const [position, setPosition] = useState('bottom-start');

  return (
    <ToastContainer position={position}>
      <Toast className='m-2'>
        <Toast.Header>
          <img src={ProfilePhoto} className="rounded me-2" alt={ProfilePhoto} width={30} />
          <strong className="me-auto">Victor</strong>
          <small className="text-muted">Just Now</small>
        </Toast.Header>
        <Toast.Body>Welcome! Thanks for visiting my website!</Toast.Body>
      </Toast>
      <Toast className='m-2'>
        <Toast.Header>
            <img src={ProfilePhoto} className="rounded me-2" alt={ProfilePhoto} width={30} />
            <strong className="me-auto">Victor</strong>
            <small className="text-muted">Just Now</small>
        </Toast.Header>
        <Toast.Body>Learn more about me, see my work, and contact me.</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

export default Message;