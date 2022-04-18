
import './App.scss';
import CountDown from './components/CountDown';
import DigitalClock from './components/DigitalClock';
import Stopwatch from './components/Stopwatch';


function App() {
  return (
    <div className='box'>
   
     <DigitalClock/>
     
     <CountDown/>
     <Stopwatch/>
    </div>
  );
}

export default App;
