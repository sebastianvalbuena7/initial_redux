import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByArgument } from './store/slices/counter/counterSlice';

function App() {
  const { counter } = useSelector(state => state.counter);
  const dispatch = useDispatch();

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
        <button onClick={() => dispatch(increment())}>
          increment count is {counter}
        </button>

        <button onClick={() => dispatch(decrement())}>
          decrement count is {counter}
        </button>

        <button onClick={() => dispatch(incrementByArgument(5))}>
          Increment By argument count is {counter}
        </button>
      </div>
    </>
  )
}

export default App