import { Route, Routes } from 'react-router-dom';
import { CommonLayout } from './CommonLayout';
import { HomePage } from './HomePage';
import { StreamerPage } from './StreamerPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<CommonLayout />}>
        <Route index element={<HomePage />} />
        <Route path=':id' element={<StreamerPage />} />
        <Route path='*' element={<h2>Page not found</h2>} />
      </Route>
    </Routes>
  );
}

export default App;
