# React useEffect Cleanup Function Not Called on Unmount

This repository demonstrates a bug where the cleanup function within a React `useEffect` hook is not reliably called when the component unmounts, specifically in React 18 and above.  This can lead to memory leaks or other unexpected side effects.

## Bug Description

The provided `bug.jsx` file showcases a simple counter component.  The `useEffect` hook includes a cleanup function intended to log a message when the component unmounts. However, under certain circumstances, this cleanup function is not executed.

## Solution

The `bugSolution.jsx` file provides a corrected implementation. The issue is addressed by carefully managing dependencies in the `useEffect` hook.  By including the necessary variables, the cleanup function is called appropriately.

## How to Reproduce

1. Clone this repository.
2. Navigate to the repository directory in your terminal.
3. Install dependencies using `npm install`.
4. Run the application using `npm start`.
5. Observe the console logs to note the absence or presence of the cleanup function call. Experiment by quickly mounting and unmounting the component to reproduce the issue.

## Note

This bug can be subtle and may not always manifest consistently. Careful testing and proper dependency management in `useEffect` hooks are crucial to prevent such issues.