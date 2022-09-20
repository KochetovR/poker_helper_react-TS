import { Routes, Route } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import HowToUsePage from '../../pages/HowToUsePage';
import Contacts from '../../pages/Contacts'
import NotFoundPage from '../../pages/NotFoundPage';
import Layout from '../Layout';
import './App.scss';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='HowToUse' element={<HowToUsePage />} />
        <Route path='contacts' element={<Contacts />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
