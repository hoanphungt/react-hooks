import React, { useState } from 'react';

function App() {
  //new state variable
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click
      </button>
    </div>
  );
}

export default App;
