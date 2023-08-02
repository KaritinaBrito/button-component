import {Route, Routes} from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import NotFound from './pages/NotFound';
import Working from './pages/Working';


function App() {
  return(
    <>
      <Routes>
        <Route path='/' element={<Home />} errorElement={<NotFound/>} />
        <Route path='/buttons' element={<Home />} errorElement={<NotFound/>} />
        <Route path='working' element={<Working />}  />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )  
}

export default App
