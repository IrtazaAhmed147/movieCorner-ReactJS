import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import './index.css'
import Moviedetails from './Components/Moviedetails';
import Movielist from './Components/Movielist';
import Navbar from './Layout/Navbar';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import MovieDetailCard from './Components/MovieDetailCard';

function App() {

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>

      <Router>



        <Navbar />
      
          <Routes>  
            <Route path='/' element={<Movielist />}/>
            <Route path='/yourmovies' element={<Moviedetails />}/>
            <Route path='/movie' element={<MovieDetailCard />}/>

            
        
        
          </Routes>
          
      </Router>
       
        
    </QueryClientProvider>
  );
}

export default App;
