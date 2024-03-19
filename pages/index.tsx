// pages/index.tsx

import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../redux/actions';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Home;
