import Counter from "./Components/Counter";
import CounterHolder from "./Context/CounterHolder";

function App() {
  return (
    <CounterHolder>
        
          <div className="h-screen w-full flex justify-center items-center bg-black">
            <Counter/>
        
          </div>
        
    </CounterHolder>
  );
}

export default App;
