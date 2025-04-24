# anonstories/client/src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SubmitStory from './pages/SubmitStory';
import StoryPage from './pages/StoryPage';
import Login from './pages/Login';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/submit" element={<SubmitStory />} />
        <Route path="/story/:id" element={<StoryPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;