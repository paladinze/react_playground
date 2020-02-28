import React, { useState, useEffect } from 'react';

const App: React.FC = (props) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("use effect triggered");
    return () => {
      console.log("clean up function triggered");
    }
  })

  return (
    <div>
      <h1>counting: {counter}</h1>
      <button onClick={() => {setCounter(counter + 1)}}>Click me to add</button>
    </div>
  );
}

export default App;
