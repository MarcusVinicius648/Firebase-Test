import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { CustomeProfile } from './pages/CustomeProfile';
import { Welcome } from './pages/Welcome';
import { AuthContextProvider } from './contexts/authContext';

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/rooms/profile" element={<CustomeProfile />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
};

export default App;
