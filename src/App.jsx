import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import './index.css';
import Navbar from './Layout/Navbar';
import Movielist from './Components/Movielist';
import UserMovies from './Components/UserMovies';
import MovieDetailCard from './Components/MovieDetailCard';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>

      <Router>

        <Navbar />

        <Routes>
          <Route path='/' element={<Movielist />} />
          <Route path='/yourmovies' element={<UserMovies />} />
          <Route path='/movie/:movieID' element={<MovieDetailCard />} />
        </Routes>

      </Router>


    </QueryClientProvider>
  );
}

export default App;
