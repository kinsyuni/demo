import React, { useState, useEffect } from 'react';
import axios from "axios";

function App() {

  useEffect(() => {
    axios.get('/user?ID=12345')
      .then(function (response) {

      console.log(response);
  })

  });

  return (
    <div className="App">

    </div>
  );
}

export default App;
