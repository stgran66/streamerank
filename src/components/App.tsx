import { Route, Routes } from 'react-router-dom';
import { CommonLayout } from './CommonLayout/CommonLayout';
import { HomePage } from './pages/HomePage';
import { StreamerPage } from './pages/StreamerPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<CommonLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/streamer/:id' element={<StreamerPage />} />
        <Route path='*' element={<h2>Page not found</h2>} />
      </Route>
    </Routes>
  );
}

export default App;
