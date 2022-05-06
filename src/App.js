import React, { useState, useEffect } from 'react';
import axios from "axios";

function App() {

  useEffect(() => {
    axios.get('/user?ID=12345')
      .then(function (response) {

      console.log('ok');
  })

  });

  return (
    <div className="App">
      <div>ok</div>
    </div>
  );
}

export default App;
