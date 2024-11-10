import './App.css';
import Moviedetails from './Components/Moviedetails';
import Movielist from './Components/Movielist';
import Navbar from './Layout/Navbar';

function App() {
  return (
    <div>

      <Navbar />
      <div className='mainBox'>

        <Movielist />
        <Moviedetails />

      </div>
    </div>
  );
}

export default App;
