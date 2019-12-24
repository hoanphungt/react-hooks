import React, { useState, useEffect } from 'react';

function App() {
  //new state variable
  const [count, setCount] = useState(0);

  //useEffect to perform side effects
  useEffect(() => {
    //Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  }, [count]);

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
