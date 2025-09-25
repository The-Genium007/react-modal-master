import { ModalDemo } from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <header style={{ textAlign: 'center', padding: '20px' }}>
        <h1>React Modal Component</h1>
        <p>Composant modal simple avec CSS personnalisé</p>
      </header>
      
      <main>
        <ModalDemo />
      </main>
    </div>
  );
}

export default App;