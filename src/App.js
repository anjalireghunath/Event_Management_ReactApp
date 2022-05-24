import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AddEvents from './components/AddEvents';
import SearchEvent from './components/SearchEvent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <div>
<BrowserRouter>
<Routes>
  <Route path='/' exact element={<AddEvents/>}/>
  <Route path='/search' exact element={<SearchEvent/>}/>
</Routes>
</BrowserRouter>
   </div>
  );
}

export default App;
