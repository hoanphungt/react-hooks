import React, { useState } from 'react';

function App() {
  //new state variable
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(32);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click
      </button>
      <hr/>
      {age === 32 ? (
        <div>
          <p>I am now {age} years old</p>
          <button onClick={() => setAge(33)}>
            My new age
          </button>
        </div>
      ) : (
        <div>
          <p>I will be {age} years old on 29/12/2019</p>
          <button onClick={() => setAge(32)}>
            My current age
          </button>
        </div>
      )
      }
    </div>
  );
}

export default App;
