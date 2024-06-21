import './App.css';
import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [count, setCount] = useState(0); // Corrected typo here

  const incrementCount = () => setCount(count + 1);

  return (
    <div className="App">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={incrementCount}>Increment counter</button>
      <h3>Input text: {input}</h3>
      <h3>Count: {count}</h3>
      <hr />
      <ChildComponent count={count} onClick={incrementCount} />
    </div>
  );
}

const ChildComponent = React.memo(function({ count, onClick }) {
  console.log("Child component is rerendering");
  return (
    <div>
      <h2>This is a child component</h2>
      <button onClick={onClick}>Increment</button>
      <h4>Count: {count}</h4> {/* Display count correctly */}
    </div>
  );
});

export default App;