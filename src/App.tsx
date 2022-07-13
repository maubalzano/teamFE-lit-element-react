import React, { useState } from 'react';
import './App.css';
import 'teamfe-lit-user-card';
import UserCard from './components/user-card';
import { User } from 'teamfe-lit-user-card';


function App() {

  const user: User = {
    firstName: "Francesco",
    lastName: "Rossi",
    dob: '22-09-2022',
    gender: 'male',
    address: 'Viale Manzoni 6',
    imgUrl: 'https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png'
  }

  const [isDisabled, setIsDisabled] = useState(false);

  const handleCustomEvent = () => {
    console.log('event fired!')
    setIsDisabled(!isDisabled);
  }

  return (
    <div style={{padding:20}}>
      <h2>This is parent component</h2>
      <UserCard customEvent={() => handleCustomEvent()} user={user} isDisabled={isDisabled}></UserCard>
    </div>
  );
}

export default App;
