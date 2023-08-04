import {Route, Routes} from 'react-router-dom';
import './styles/App.css';
import { Home } from './pages/Home';
import NotFound from './pages/NotFound';
import Working from './pages/Working';
import InputsAll from './pages/InputsAll';


function App() {
  return(
    <>
      <Routes>
        <Route path='/' element={<Home />} errorElement={<NotFound/>} />
        <Route path='/buttons' element={<Home />} errorElement={<NotFound/>} />
        <Route path='/working' element={<Working />}  />
        <Route path='/inputs' element={<InputsAll />}  />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )  
}

export default App
