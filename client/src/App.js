import { Route, Routes } from 'react-router-dom';
import MovieDetail from './Page/MovieDetail';
import MovieList from './Page/MovieList';

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </main>
  );
}

export default App;
