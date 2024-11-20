import React, { useState } from 'react';
import './App.css';
import ShowDetails from './components/ShowDetails';
import Schedule from './components/Schedule';

const App = () => {
  const [selectedShow, setSelectedShow] = useState(null);

  return (
    <div>
      {selectedShow ? (
        <ShowDetails show={selectedShow} onBack={() => setSelectedShow(null)} />
      ) : (
        <Schedule onShowSelect={setSelectedShow} />
      )}
    </div>
  );
};

export default App;
