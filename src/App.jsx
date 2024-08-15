// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

function App() {
  return (
    <div>
      <h1>My Hacker Stories</h1>

      <label htmlFor='search'>Search: </label>
      <input id='search' type='text' />

      <hr />

      <ul>
        {list.map(function (item) {
          return (
          <li key={item.objectID}>
            <span>
              <a href={item.url}>{item.title} </a>
            </span>
            <span>{item.author}</span>
            {/*<span>{item.num_comments}</span>*/}
            {/*<span>{item.points}</span>*/}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;

/*
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        This is the first time I have touched React!
      </p>
    </>
  )
}

export default App;
*/
