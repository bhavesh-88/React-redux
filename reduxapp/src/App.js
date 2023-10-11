import './App.css';

import { Incnumber, Decnumber } from './actions';
import { useSelector, useDispatch } from 'react-redux';


function App() {
  const mystate = useSelector((state) => state.Changenumber);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Welcome To MY Page</h1>

      <button onClick={()=>dispatch(Incnumber())}>INCE</button>
      <h1>{mystate}</h1>
      <button onClick={()=>dispatch(Decnumber())}>DECE</button>
    </div>
  );
}

export default App;
