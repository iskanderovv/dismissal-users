import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './routes/home/Home';
import DismissalUsers from './routes/dismissal-users/DismissalUsers';
import Navbar from './components/navbar/Navbar';
import { useFetch } from './hooks/useFetch';
import { useState } from 'react';
import Loader from 'rsuite/Loader';
import 'rsuite/Loader/styles/index.css'; 
import { DismissalProvider } from './context/Dismissal';

function App() {
  const [url, setUrl] = useState("/users?page=1");
  const { loading } = useFetch(url);

  return (
    <DismissalProvider>
      <Navbar />
      {loading ? (
        <Loader center size='md' backdrop content="loading..." />
      ) : (
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='/dismissal' element={<DismissalUsers />} />
        </Routes>
      )}
    </DismissalProvider>
  );
}

export default App;
