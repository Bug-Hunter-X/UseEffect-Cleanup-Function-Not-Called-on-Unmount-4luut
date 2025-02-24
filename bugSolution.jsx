```jsx
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    // This effect runs after every render
    console.log('Count updated:', count);
    return () => {
      // Cleanup function (optional)
      setIsMounted(false);
      console.log('Cleanup function called');
    };
  }, [count,isMounted]); // Add count to dependency array

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default MyComponent;
```