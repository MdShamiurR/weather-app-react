import './App.css';
import Cities from './components/Cities';
import Filtering from './components/Filtering';
import TimeTables from './components/TimeTables';


function App() {
  return (
    <div className='mx-auto max-w-screen-md mt-4 p-24 bg-gradient-to-br from-zinc-700 to-black h-fit shadow-xl shadow-gray-400 rounded-md'>
      
    
      <Cities></Cities>
      <Filtering></Filtering>
      <TimeTables></TimeTables>
     
      
    </div>
  );
}

export default App;
