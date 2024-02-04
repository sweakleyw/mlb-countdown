import "./App.css";
import { Countdown } from "./components/Countdown";
import { Schedule } from "./components/Schedule";

function App() {
  return (
    <div className='App'>
      <div id='bg'>
        <Countdown />
        <Schedule />
      </div>
    </div>
  );
}

export default App;
