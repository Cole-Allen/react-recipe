import './css/reset.css'
import './css/App.css';
import './css/styles.css';
import Navbar from './components/Navbar';
import Search from './pages/Search';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Search></Search>
    </div>
  );
}

export default App;
