import { Route, Routes } from 'react-router-dom';
import MovieList from './Page/MovieList';

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<MovieList />} />
      </Routes>
    </main>
  );
}

export default App;
