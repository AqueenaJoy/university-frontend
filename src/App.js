import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddScoreCard from './components/AddScoreCard';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      
      <Route path="/" element={<AddScoreCard />} />
     </Routes>
     </BrowserRouter>    
    </div>
  );
}

export default App;
