import { useDispatch, useSelector } from "react-redux";
import { decrement, increment ,incrementByAmount } from "./redux/counter";

function App() {
  const count = useSelector((state) => state.counter.value  ) 
  const dispatch= useDispatch()
  return (
   <div>
    <button onClick={()=> dispatch (increment())}>increment</button>
    <span>{count}</span>
    <button onClick={()=> dispatch(decrement()) }>decrement</button>
    <button  onClick={()=> dispatch(incrementByAmount(10))}>increment by 10 </button>
   </div>
   
  );
}

export default App;
