import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import GetStarted from './pages/GetStarted';
import Analytics from './pages/Analytics'; // 👈 Check this import

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/analytics" element={<Analytics />} /> {/* 👈 Check this path */}
      </Routes>
    </Router>
  );
}

export default App;