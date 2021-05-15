import './App.css';
import Navbar from '../src/components/Navbar';
import Queens from '../src/components/Queens';


function App() {
  return (
    <div className="App">
      <div>
        <header>
          <Navbar/>
        </header>
        <body>
          <Queens />
        </body>
      </div>
    </div>
  );
}

export default App;
