import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [person, setPerson] = useState({
    fullName: 'John Doe',
    bio: 'hello i am real human :)',
    imgSrc: '/human.jpg',
    profession: 'i enjoy normal activities such as breathing air and walking with my leg',
  });
  const [show, setShow] = useState(false);
  const [timeSinceMount, setTimeSinceMount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeSinceMount(prevTime => prevTime + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <button className="button" onClick={() => setShow(prevShow => !prevShow)}>
        Toggle Show
      </button>
      {show && (
        <div className="person-info">
          <h1>{person.fullName}</h1>
          <p>{person.bio}</p>
          <img src={person.imgSrc} alt="Person" />
          <p>Profession: {person.profession}</p>
        </div>
      )}
      <p className="time">Time since mount: {timeSinceMount} seconds</p>
    </div>
  );
};

export default App;