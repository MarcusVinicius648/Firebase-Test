import {BrowserRouter,Route, Routes} from 'react-router-dom'

import { CustomeProfile } from './pages/CustomeProfile';
import { Welcome } from './pages/Welcome';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Welcome/>}/>
      <Route path="/rooms/profile" element={<CustomeProfile/>}/>
    </Routes>
   </BrowserRouter>
  );
};

export default App;
