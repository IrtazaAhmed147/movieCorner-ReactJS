import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import Moviedetails from './Components/Moviedetails';
import Movielist from './Components/Movielist';
import Navbar from './Layout/Navbar';

function App() {

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider  client={queryClient}>

    <div>

      <Navbar />
      <div className='mainBox'>

        <Movielist />
        <Moviedetails />

      </div>
    </div>
    </QueryClientProvider>
  );
}

export default App;
