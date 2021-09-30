import React, { useState, useEffect } from 'react';
import { useCookies } from "react-cookie";


function Example() {
  const [count, setCount] = useState(0);
  const [cookies, setCookie] = useCookies(["user"]);

  function handleCookie() {
    setCookie("user", "gowtham", {
      path: "/"
    });
  }

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <h1>React cookies</h1>
      <button onClick={handleCookie}>Set Cookie</button>
     
    </div>
  );
}

export default Example;