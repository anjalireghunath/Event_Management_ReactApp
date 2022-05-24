import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AddEvents from './components/AddEvents';
import SearchEvent from './components/SearchEvent';

function App() {
  return (
   <div>
<AddEvents/>
<SearchEvent/>
   </div>
  );
}

export default App;
